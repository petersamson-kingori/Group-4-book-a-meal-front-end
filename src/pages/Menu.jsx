import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOptions } from '../store/menuSlice';
import { addToBasket, removeFromBasket } from '../store/basketSlice';

const Menu = ({ user }) => {
  const dispatch = useDispatch();
  const menuOptions = useSelector((state) => state.menu);
  const basketItems = useSelector((state) => state.basket);
  const [shippingLocation, setShippingLocation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://group-4-book-a-meal-api.onrender.com/api/v1/users/${user?.id}/user_menu_options`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          dispatch(setMenuOptions(data));
        } else {
          // Handle unauthorized or other error responses
          console.log('Error fetching menu options:', response.status);
        }
      } catch (error) {
        console.log('Error fetching menu options:', error);
      }
    };

    if (user) {
      fetchData();
    }
  }, [dispatch, user]);

  // Get the current day of the week
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  // Filter the menu options for the current day
  const filteredMenuOptions = menuOptions.filter((menuOption) => menuOption.name === currentDay);

  const handleAddToBasket = (item) => {
    dispatch(addToBasket(item));
  };

  const handleRemoveFromBasket = (itemId) => {
    dispatch(removeFromBasket(itemId));
  };

  const handleSubmit = async () => {
    const orderData = {
      userId: user.id,
      items: basketItems.map((item) => ({ id: item.id, name: item.name, price: item.price })),
      shippingLocation,
    };

    try {
      const response = await fetch('your-backend-endpoint-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Handle success case
        console.log('Order submitted successfully');
      } else {
        // Handle error case
        console.log('Failed to submit order:', response.status);
      }
    } catch (error) {
      console.log('Error submitting order:', error);
    }
  };

  return (
    <div>
      <h4>Menu Options for {currentDay}</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredMenuOptions.map((menuOption) => (
          <div
            key={menuOption.id}
            style={{
              border: '1px solid lightgrey',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              marginRight: '10px',
            }}
          >
            <p>Caterer: {menuOption.caterer.business_name}</p>
            {menuOption.menu_options.map((option) => (
              <div key={option.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <span style={{ marginRight: '10px' }}>
                  {option.name} - ${option.price}
                </span>
                <button onClick={() => handleAddToBasket(option)}>Add to Basket</button>
                <button onClick={() => handleRemoveFromBasket(option.id)}>Remove</button>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h4>Basket</h4>
      <ul>
        {basketItems.map((item) => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <h4>Shipping Location</h4>
      <input
        type="text"
        value={shippingLocation}
        onChange={(e) => setShippingLocation(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default Menu;

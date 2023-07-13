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

  const handleAddToBasket = (menuOption) => {
    dispatch(addToBasket(menuOption));
  };

  const handleRemoveFromBasket = (menuOption) => {
    dispatch(removeFromBasket(menuOption));
  };

  const handleSubmit = async () => {
    const orderData = {
      userId: user.id,
      // caterer: menuOption.caterer.id,
      // menu: menuOption.caterer.menu,
      email: user.email,
      items: basketItems.map((menuOption) => ({
        id: menuOption.id,
        name: menuOption.name,
        price: menuOption.price,
        caterer: menuOption.caterer.id,
        menu: menuOption.caterer.menu,

      })),
      shippingLocation,
    };

    try {
      const response = await fetch('https://group-4-book-a-meal-api.onrender.com/api/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user?.token}`,
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
                <img src={option.imageUrl} alt={option.name} style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '5px' }} /> 
                  {option.name} - ${option.price}
                </span>
                <button style={{
              backgroundColor: '#5CD88F', // Change the background color to a lighter shade of green
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none', // Remove the button outline
              marginRight: '5px',
            }} onClick={() => handleAddToBasket(option)}>Add to Basket</button>
                <button style={{
              backgroundColor: 'transparent', // Set the background color to transparent
              color: '#5CD88F', // Set the text color to the green color
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid #5CD88F', 
            }} onClick={() => handleRemoveFromBasket(option.id)}>Remove</button>
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
     <button
  style={{
    backgroundColor: '#5CD88F',
    color: 'white',
    padding: '8px 16px', // Adjust the padding values to make the button smaller
    borderRadius: '5px',
    border: 'none',
    marginRight: '5px',
  }}
  onClick={handleSubmit}
>
  Submit Order
</button>
    </div>
  );
};

export default Menu;

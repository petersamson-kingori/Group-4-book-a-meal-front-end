import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOptions, addToBasket, removeFromBasket } from '../store/menuSlice';

const Menu = ({ user }) => {
  const dispatch = useDispatch();
  const menuOptions = useSelector((state) => state.menu);

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
              <div
                key={`${menuOption.id}-${option.id}`}
                style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}
              >
                <span style={{ marginRight: '10px' }}>{option.name}</span>
                <span>${option.price}</span>
                <button onClick={() => dispatch(addToBasket(option))}>Add to Basket</button>
                <button onClick={() => dispatch(removeFromBasket(option))}>Remove</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

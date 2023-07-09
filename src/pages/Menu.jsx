import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuOptions } from '../store/menuSlice';

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
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '30px' }}>
        <h2>Welcome, {user ? user.username : 'Guest'}</h2>
        {user && (
          <button
            onClick={handleLogoutClick}
            style={{
              backgroundColor: '#34BB78',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
            }}
          >
            Logout
          </button>
        )}
      </div>
      {user && (
        <div style={{ margin: '0 250px' }}>
          <h2>Menu Options for {currentDay}</h2>
          {filteredMenuOptions.map((menuOption) => (
            <div key={menuOption.id}>
              <h3>{menuOption.name}</h3>
              <p>{menuOption.description}</p>
              <p>Caterer: {menuOption.caterer.business_name}</p>
              <ul>
                {menuOption.menu_options.map((option) => (
                  <li key={option.id}>
                    {option.name} - ${option.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {/* Additional content for the user profile */}
    </div>
  );
};
export default Menu;

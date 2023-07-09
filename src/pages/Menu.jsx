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

  return (
    <div>
      <h2>Menu Options</h2>
      {menuOptions.map((menuOption) => (
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
  );
};

export default Menu;

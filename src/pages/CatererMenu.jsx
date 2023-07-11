import React, { useEffect, useState } from 'react';
import { useAuth } from "./auth";

const CatererMenu = () => {
  const [catererData, setCatererData] = useState(null);
  const { caterer } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Make an API request to fetch the caterer data with authorization
      fetch(`https://group-4-book-a-meal-api.onrender.com/api/v1/caterers/${caterer.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => setCatererData(data.caterer))
        .catch(error => console.error('Error fetching caterer data:', error));
    }
  }, [caterer]);

  const handleDeleteMenuOption = (menuId, menuOptionId) => {
    const token = localStorage.getItem("token");
    if (token) {
      // Make an API request to delete the menu option with authorization
      fetch(`https://group-4-book-a-meal-api.onrender.com/api/v1/caterers/${caterer.id}/menus/${menuId}/menu_options/${menuOptionId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          if (response.ok) {
            // Refresh the caterer data after successful deletion
            fetchCatererData();
          } else {
            throw new Error('Error deleting menu option');
          }
        })
        .catch(error => console.error('Error deleting menu option:', error));
    }
  };

  const fetchCatererData = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Make an API request to fetch the updated caterer data with authorization
      fetch(`https://group-4-book-a-meal-api.onrender.com/api/v1/caterers/${caterer.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => setCatererData(data.caterer))
        .catch(error => console.error('Error fetching caterer data:', error));
    }
  };

  return (
    <div>
      {catererData && (
        <div>
          <h2>{catererData.business_name}</h2>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {catererData.menus.map(menu => (
              <li
                key={menu.id}
                style={{
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "10px"
                }}
              >
                <h3>{menu.name}</h3>
                <p>{menu.description}</p>
                <ul>
                  {menu.menu_options.map(menuOption => (
                    <li key={menuOption.id}>
                      <p>{menuOption.name}</p>
                      <p>{menuOption.description}</p>
                      <button style={{
              backgroundColor: 'transparent', // Set the background color to transparent
              color: '#5CD88F', // Set the text color to the green color
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid #5CD88F', 
            }}
                        onClick={() =>
                          handleDeleteMenuOption(menu.id, menuOption.id)
                        }
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CatererMenu;

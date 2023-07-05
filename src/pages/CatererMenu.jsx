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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CatererMenu;

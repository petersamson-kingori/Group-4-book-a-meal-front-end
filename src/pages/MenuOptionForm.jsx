import React, { useState } from 'react';
import { useAuth } from "./auth";

const MenuOptionForm = ({ menuId }) => {
  const { caterer } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      const menuOptionData = {
        menu_option: {
          name,
          description,
          price
        }
      };

      fetch(`https://group-4-book-a-meal-api.onrender.com/api/v1/caterers/${caterer.id}/menus/${menuId}/menu_options`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(menuOptionData)
      })
        .then(response => response.json())
        .then(data => {
          // Handle success
          console.log("Menu option created:", data);
          // Reset form fields
          setName("");
          setDescription("");
          setPrice("");
        })
        .catch(error => console.error('Error creating menu option:', error));
    }
  };

  return (
    <div style={{ backgroundColor: "#20c997", padding: "20px", borderRadius: "5px" }}>
      <h3>Add Menu Option</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ border: "none", borderBottom: "1px solid #ccc", outline: "none" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ border: "none", borderBottom: "1px solid #ccc", outline: "none" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ border: "none", borderBottom: "1px solid #ccc", outline: "none" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MenuOptionForm;

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
    <div>
      <h2>Menu</h2>
      <form className="form mb-5" onSubmit={handleSubmit}>
        <h5 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
          Add Option
        </h5>
        <div className="form__group">
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ borderRadius: "3px", border: "none", padding: "5px", marginBottom: "10px" }}
          />
        </div>
        <div className="form__group">
          <label htmlFor="description">Description:</label>
          <br />
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ borderRadius: "3px", border: "none", padding: "5px", marginBottom: "10px" }}
          />
        </div>
        <div className="form__group">
          <label htmlFor="price">Price:</label>
          <br />
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ borderRadius: "3px", border: "none", padding: "5px", marginBottom: "10px" }}
          />
        </div>
        <button className="addTOCart__btn">Submit</button>
      </form>
    </div>
  );
};

export default MenuOptionForm;

import React, { useState } from 'react';
import { useAuth } from "./auth";

const MenuOptionForm = () => {
  const { caterer } = useAuth();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [day, setDay] = useState("");
  
  const getMenuIdByName = (menuName) => {
    const menu = caterer.menus.find(menu => menu.name === menuName);
    return menu ? menu.id : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (token) {
      const menuOptionData = {
        menu_option: {
          name,
          description,
          price,
          day
        }
      };

      const menuId = getMenuIdByName(name); // Get the menu ID

      if (menuId) {
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
      } else {
        console.error('Menu not found');
      }
    }
  };

  return (
    <div>
       <h2 style={{ paddingLeft: '50px' }}>Menu</h2>
      <form className="form mb-5" onSubmit={handleSubmit}>
  <h5 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
    Add Option
  </h5>
  <div className="form__group">
          <label htmlFor="day">Select a menu:</label>
          <br />
          <select
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            style={{ borderRadius: "3px", border: "none", padding: "5px", marginBottom: "10px" }}
          >
            <option value="">Select a menu</option>
            {caterer.menus.map(menu => (
              <option key={menu.id} value={menu.name}>
                {menu.name}
             </option>
            ))}
          </select>
        </div>
  <div className="form__group">
    <label htmlFor="description">Name:</label>
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

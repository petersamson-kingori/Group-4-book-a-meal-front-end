import React, { useState } from 'react';

const CreateMenuOptionForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/menu-options', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          description,
          price,
          // Assuming you have the `menu_id` available here
          //menu_id: menuId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle success, e.g., display success message or redirect to menu details page
        console.log('Menu option created:', data);
      } else {
        throw new Error('Failed to create menu option');
      }
    } catch (error) {
      // Handle error, e.g., display error message
      console.error('Error creating menu option:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Create Menu Option</button>
    </form>
  );
};

export default CreateMenuOptionForm;

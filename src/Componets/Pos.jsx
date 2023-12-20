import React from "react";
import { useState } from "react";


function POS() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [lastName, setID] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFormData = {
      name: name,
      type: type,
      lastName: lastName,
      quantity: quantity,
      price: price,
    };

    if (editIndex === -1) {
      setFormData([...formData, newFormData]);
    } else {
      const updatedData = [...formData];
      updatedData[editIndex] = newFormData;
      setFormData(updatedData);
      setEditIndex(-1);
    }

    // Clear the form inputs
    setName('');
    setType('');
    setID('');
    setQuantity('');
    setPrice('');
  };

  const handleDelete = (index) => {
    const newData = [...formData];
    newData.splice(index, 1);
    setFormData(newData);
  };

  const handleEdit = (index) => {
    setEditIndex(index);

    // Prefill the form inputs with the data to be edited
    const editedData = formData[index];
    setName(editedData.name);
    setType(editedData.type);
    setLastName(editedData.lastName);
    setQuantity(editedData.quantity);
    setPrice(editedData.price);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        {/* Form inputs */}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="ID"
          value={type}
          onChange={(e) => setLastName(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginRight: '0.5rem' }}
        />

        {/* Submit button */}
        <button type="submit">{editIndex === -1 ? 'Submit' : 'Update'}</button>
      </form>

      {/* Table to display form data */}
      <table style={{ width: '70%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>ID</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.lastName}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default POS
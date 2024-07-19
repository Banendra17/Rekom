// src/components/InputForm.jsx

import React, { useState } from 'react';

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputValue);
    // Lakukan sesuatu dengan nilai input
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Masukkan nilai"
        style={{ padding: '10px', fontSize: '16px' }}
      />
      <button type="submit" style={{ marginTop: '10px', padding: '10px 20px', fontSize: '16px' }}>
        Submit
      </button>
    </form>
  );
};

export default InputForm;

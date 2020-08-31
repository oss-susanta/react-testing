import React, {useState} from 'react';

export default function Input() {
  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <label>
      <span>Name</span>
      <input
        type="text"
        placeholder="Enter your name"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
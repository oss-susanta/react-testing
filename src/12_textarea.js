import React, {useState} from 'react';

export default function Textarea() {
  const [value, setValue] = useState('');
  const handleChange = event => {
    setValue(event.target.value);
  };
  return (
    <label>
      <div>Comments</div>
      <textarea
        placeholder="Enter your comments..."
        value={value}
        rows={5}
        onChange={handleChange}
      />
    </label>
  );
}
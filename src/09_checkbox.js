import React, {useState} from 'react';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);
  const handleChange = event => {
    setChecked(event.currentTarget.checked);
  };
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      remember me
    </label>
  );
}
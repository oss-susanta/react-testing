import React, {Fragment, useState} from 'react';

const CONTACT_BY = [
  'mail',
  'phone',
];

export default function Radio() {
  const [checked, setChecked] = useState(CONTACT_BY[0]);
  const handleChange = event => {
    setChecked(event.currentTarget.name);
  };
  return (
    <div>
      {CONTACT_BY.map(by => (
        <Fragment key={by}>
          <label>
            <input
              type="radio"
              name={by}
              checked={checked === by}
              onChange={handleChange}
            />
            {by}
          </label>
        </Fragment>
      ))}
    </div>
  );
}
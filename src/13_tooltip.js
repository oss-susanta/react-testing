import React, {useState} from 'react';

export default function Tooltip() {
  const [hover, setHover] = useState(false);
  return (
    <div style={{position: 'relative'}}>
      <span
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        Hover
      </span>
      {hover && (
        <div
          style={{
            position: 'absolute',
            left: '50px',
            top: '20px',
            padding: '8px 16px',
            color: '#fff',
            background: '#333',
          }}
          role="tooltip"
        >
          Tooltip
        </div>
      )}
    </div>
  );
}
import React from 'react';

export default function Text({value, ...rest}) {
  return (
    <div className="text" {...rest}>
      {value}
    </div>
  );
}
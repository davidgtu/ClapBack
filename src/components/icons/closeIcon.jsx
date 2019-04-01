import React from 'react';

export const CloseIcon = ({ ...props }) => (
  <svg {...props}>
    <line x1="1" y1="13"
      x2="13" y2="1"
      stroke="black"
      strokeWidth="1" />
    <line x1="1" y1="1"
      x2="13" y2="13"
      stroke="black"
      strokeWidth="1" />
  </svg>
);
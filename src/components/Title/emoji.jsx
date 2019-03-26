import React from 'react';

export const Emoji = ({ icon, ...props }) => (
  <span {...props}>{icon}</span>
)
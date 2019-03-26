import React, { useState } from 'react';
import { Output } from './output';

const format = (text) => text.replace(/ /g, '👏')


export const Textarea = () => {
  const [text, setText] = useState('');
  const [pureText, setPureText] = useState('');



  return (
    <>
      <textarea value={pureText} onChange={(e) => {
        setText(format(e.target.value));
        setPureText(e.target.target)
      }} />
      <Output text={text} />
    </>
  )
}
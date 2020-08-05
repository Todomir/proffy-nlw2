import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ name, label, ...rest }) => {
  return (
    <div className='textarea-block'>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} />
    </div>
  );
};

export default TextArea;

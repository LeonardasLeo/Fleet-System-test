import React from 'react';

type Props = {
    type: 'regular' | 'secure'
    placeholder: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    autoFocus?: boolean;
};

const TextInput: React.FC<Props> = ({type, placeholder, onChange, autoFocus}) => {
  return (
    <>
        <input 
        className='textInput' 
        type={type === 'regular' ? 'text' : 'password'} 
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        />
    </>
  );
};

export default TextInput;
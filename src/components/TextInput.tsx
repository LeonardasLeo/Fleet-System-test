import React, { MutableRefObject, useRef, useState } from 'react';
import eye from '../assets/eye.svg';

type Props = {
    type: 'regular' | 'secure'
    placeholder: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    autoFocus?: boolean;
};

const TextInput: React.FC<Props> = ({type, placeholder, onChange, autoFocus}) => {
  let [visibility, setVisibility] = useState<string>(type);
  
  function toggleVisibility(): void {
    if (visibility === 'secure') {
      setVisibility('regular')
      return
    }
    setVisibility('secure')
  }
  return (
    <div>
        <input 
        className='textInput' 
        type={visibility === 'regular' ? 'text' : 'password'} 
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        />
        {type === 'secure' && <img onClick={() => toggleVisibility()} className='eye-icon' src={eye} alt="" />}
    </div>
  );
};

export default TextInput;
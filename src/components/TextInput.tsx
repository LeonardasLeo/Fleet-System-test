import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import eye from '../assets/eye.svg';

type Props = {
  type: 'regular' | 'secure';
  placeholder: string;
  onChange?: (text: string) => void;
  autoFocus?: boolean;
};

const TextInput = React.memo<Props>(({ type, placeholder, onChange, autoFocus }) => {
  const [visibility, setVisibility] = useState<string>(type);
  const inputElement: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const toggleVisibility = useCallback(() => {
    if (visibility === 'secure') {
      setVisibility('regular')
      return
    }
    setVisibility('secure')
  }, [visibility])
  
  return (
    <div className='inputWrapper'>
      <input
        className='textInput'
        type={visibility === 'secure' ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={() => {
          if (inputElement.current && onChange) {
            onChange(inputElement.current.value)
          }
        }}
        autoFocus={autoFocus}
        ref={inputElement}
      />
      {type === 'secure' && <img onClick={toggleVisibility} className='eye-icon' src={eye} alt="" />}
    </div>
  );
});

export default TextInput;
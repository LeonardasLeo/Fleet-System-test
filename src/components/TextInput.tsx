import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import eyeIcon from '../assets/eyeIcon.svg';

type Props = {
  type: 'regular' | 'secure';
  placeholder: string;
  onChange?: (text: string) => void;
  autoFocus?: boolean;
};

const TextInput = React.memo<Props>(({ type, placeholder, onChange, autoFocus }) => {
  const [visibility, setVisibility] = useState<string>(type);
  const inputElement: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const toggleVisibility = useCallback((): void => {
    if (visibility === 'secure') {
      setVisibility('regular')
      return
    }
    setVisibility('secure')
  }, [visibility])

  const onChangeFunction = useCallback((): void => {
    if (inputElement.current && onChange) {
      onChange(inputElement.current.value)
    }
  }, [onChange])

  return (
    <div className='inputWrapper'>
      <input
        className='textInput'
        type={visibility === 'secure' ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={onChangeFunction}
        autoFocus={autoFocus}
        ref={inputElement}
      />
      {type === 'secure' && <img onClick={toggleVisibility} className='eye-icon' src={eyeIcon} alt="" />}
    </div>
  );
});

export default TextInput;
import React from 'react';

type Props = {
  type: 'primary';
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = React.memo<Props>(({ type, value, onClick, disabled }) => {
  return (
    <>
      <button 
      className={`button-general ${disabled ? `${type}-disabled` : type}`} 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}>
        {value}
      </button>
    </>
  );
});

export default Button;
import React from 'react';

type Props = {
  type: 'primary';
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Button = React.memo<Props>(({ type, title, onClick, disabled }) => {
  return (
    <>
      <button 
      className={`button-general ${disabled ? `${type}-disabled` : type}`} 
      onClick={disabled ? undefined : onClick}
      disabled={disabled}>
        {title}
      </button>
    </>
  );
});

export default Button;
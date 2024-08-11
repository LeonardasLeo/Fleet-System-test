import React from 'react';

type Props = {
  type: 'primary' | 'secondary' | 'delete';
  value: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>; 
};

const Button: React.FC<Props> = ({type, value, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={`button-general ${type}`}>{value}</button>
    </>
  );
};

export default Button;
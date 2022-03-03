import React, { FC } from 'react';

export enum CardVariant { // enum - перечисление (что мы ожидаем)
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string;
  height?: string;
  // children?: React.ReactChild | React.ReactNode
  variant?: CardVariant;
  onClick?: () => void // Для функций
}

const Card: FC<CardProps> =
  ({
     width,
     height,
     variant,
     onClick,
     children
   }) => {
    return (
      <div style={{
        width,
        height,
        background: variant === CardVariant.primary ? 'lightgray' : '',
        border: variant === CardVariant.outlined ? '1px solid gray' : 'none'
      }}
           onClick={onClick}
      >
        {children}
      </div>
    );
  };

export default Card;
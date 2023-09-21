import React from 'react'

const AppButton = ({ onClick, className, text }) => {
    return (
      <button className={className} onClick={onClick} type="submit">
        {text}
      </button>
    );
  };
  
  export default AppButton;
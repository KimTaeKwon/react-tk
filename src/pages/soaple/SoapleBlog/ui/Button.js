import React from "react";

// const StyledButton = () => {
//   return(
//     <button></button>
//   );
// };

function Button(props) {
  const {title, onClick} = props;

  return (
    <button onClick={onClick}>{title || 'button'}</button>
    // <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>
    // <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>
  );
}
export default Button;
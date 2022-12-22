import React from "react";

const StyledTextarea = (props) => {
  return(
    // <textarea style={{height:props.height}}></textarea>
    <textarea style={{height: `${props.height}px`}}></textarea>
  );
};

function TextInput(props) {
  const {height, value, onChange} = props;

  return (
    // <textarea style={{height:{height}}} height={height} value={value} onChange={onChange}></textarea>
    
    // <textarea style={props} value={value} onChange={onChange}></textarea>

    <StyledTextarea height={height} value={value} onChange={onChange}></StyledTextarea>
  );
}
export default TextInput;
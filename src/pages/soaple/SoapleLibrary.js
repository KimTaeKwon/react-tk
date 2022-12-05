import React from "react";
import Book from "./Book";

const Library = (props) => {
  return(
    <div>
      <Book name="파이썬" numOfPage={300} />
      <Book name="AWS" numOfPage={400} />
      <Book name="리액트" numOfPage={500} />
    </div>
  );
}

function SoapleLibrary() {
  return (
    <>
    <Library></Library>
    </>
  );
}
export default SoapleLibrary;
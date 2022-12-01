import { useState } from "react";

function Ca() {
  let post = 'Title';
  let [title,setTitle] = useState(['recommend title1','recommend title2','recommend title3']);
  return (
    <div className="coding-apple">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      <h2 style={{color:'red', fontSize:'15px'}}>{post}</h2>
      <div className="list">
        <h3>{title[0]}</h3>
        <p>2022.12.01</p>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>2022.12.01</p>
      </div>
      <div className="list">
        <h3>{title[2]}</h3>
        <p>2022.12.01</p>
      </div>
    </div>
  );
}
export default Ca;
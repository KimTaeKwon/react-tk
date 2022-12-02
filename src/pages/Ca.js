import { useState } from "react";

const Modal = () => {
  return(
    <div className="modal">
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function Ca() {
  let post = 'Title';
  let [title, setTitle] = useState(['b recommend title1','c recommend title2','a recommend title3']);

  let [like, setlike] = useState(0);

  const AddLike = () => {
    setlike(like+1);
  }

  const ReTitle = () => {
    const copyTitle = [...title];
    copyTitle[0] = 'ReTitle';
    setTitle(copyTitle);
  }

  const SortTitle = () => {
    const copyTitle = [...title];
    copyTitle.sort();
    setTitle(copyTitle);
  }

  return (
    <div className="coding-apple">
      <div className="black-nav">
        <h1>React Blog</h1>
      </div>
      <h2 style={{color:'red', fontSize:'15px'}}>{post}</h2>
      <button onClick={ReTitle}>타이틀 수정</button>
      <button onClick={SortTitle}>Solt</button>
      <div className="list">
        <h3>{title[0]} <button onClick={AddLike}>👍🏻</button> {like} </h3>
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

      <Modal></Modal>
    </div>
  );
}
export default Ca;
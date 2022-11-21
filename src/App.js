import { useState } from "react";
import './App.css';

const Wrapper = ({children}) => {
  const style = {
    border : '1px solid red',
    padding : '1em'
  }
  return (
    <div style={style}>{children}</div>
  )
}

const Block =  (val) => <div className={val}></div>;
// const Block =  () => <div className='h10 m-tb10'></div>;

const Plus = () => {
  const[number,setNumber] = useState(0);
  const add = () => setNumber(number+1);

  return(
    <div>
      <h1>num : {number}</h1>
      <button onClick={add}>plus</button>
    </div>
  );
}

const Typekey = () => {
  const[users, setUsers] = useState([{id:5, name:'name51'}]);
  const download = () => {
    let sample = [
      {id:1, name:'name1'},
      {id:2, name:'name2'},
      {id:3, name:'name3'},
      {id:4, name:'name4'}
    ];
    setUsers([...users, ...sample])
  }

  return (
    <div>
      <button onClick={download}>Down</button>
      {users.map((u) => (
        <div key={u.id}>
          {u.id},{u.name}
        </div>
      ))}
    </div>
  );
}

function App() {
    return (
      <Wrapper>
          <Plus></Plus>
          {/* <Block></Block> */}
          {Block('h10 m-tb10')}
          {Typekey()}
      </Wrapper>
    );
}
export default App;
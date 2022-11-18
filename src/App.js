import { useState } from "react";
import './App.css';

// function Typekey() {
const Typekey = () => {
  const[users, setUsers] = useState([{id:5, name:'name5'}]);
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
      <div className='h10 m-tb10'></div>
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
      <div>
        {Typekey()}
      </div>
    );
}
export default App;
import { useState } from "react";

const Block = (val) => <div className={val}></div>;
// const Block =  () => <div className='h10 m-tb10'></div>;

const Plus = () => {
  // const [변수명, set변수명] = useState(초기값); // useState 사용법
  const[number,setNumber] = useState(0);
  const add = () => setNumber(number+1);
  const minus = () => setNumber(number-1);

  return (
    <div>
      <p>num : {number}</p>
      <button onClick={add}>plus</button>
      <button onClick={minus}>minus</button>
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

const TitleText = (props) => {
  return(
    <p>{`${props.name}`}</p>
  );
};

function Til(props) {
  return (
    <>
        <TitleText name={'asd'}></TitleText>
        
        {Block('h10 m-tb10')}
        <Plus></Plus>
        {Block('h10 m-tb10')}
        {Typekey()}
    </>
  );
}
export default Til;
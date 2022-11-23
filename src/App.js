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

const Block = (val) => <div className={val}></div>;
// const Block =  () => <div className='h10 m-tb10'></div>;

const Plus = () => {
  const[number,setNumber] = useState(0);
  const add = () => setNumber(number+1);

  return (
    <div>
      <p>num : {number}</p>
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

const Header = (props) => {
  return(
    <header>
      <h1>
        <a href="/" 
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}>
        {props.title}</a>
      </h1>
    </header>
  );
}

const List = (props) => {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} 
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}
      >
      {t.title}</a></li>);
  }
  return(
    <ol>
      {lis}
    </ol>
  );
}

const Article = (props) => {
  return(
    <article>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </article>
  );
}

function App() {
  const topics = [
    {id:1, title:'list1', body:'list array 1'},
    {id:2, title:'list2', body:'list array 2'},
    {id:3, title:'list3', body:'list array 3'},
  ];

  // const _mode = useState('welcome');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  let content = null;
  if (mode === 'welcome') {
    content = <Article title='welcome' body='hello, welcome'></Article>;
  } else if(mode === 'read') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
      
    }
    content = <Article title={title} body={body}></Article>;
  }

  return (
    <Wrapper>
        <Header title='react' 
        onChangeMode={() => {
          //  alert('Hi');
          setMode('welcome');
        }}>
        </Header>
        <Article title='Article title' body='Article body'></Article>
        <Article title='Article2 title' body='Article2 body'></Article>
        <List topics={topics} 
        onChangeMode={(_id) => {
          // alert(id);
          setMode('read');
          setId(_id);
        }}>
        </List>
        {content}
        {Block('h10 m-tb10')}
        <Plus></Plus>
        {Block('h10 m-tb10')}
        {Typekey()}
    </Wrapper>
  );
}
export default App;
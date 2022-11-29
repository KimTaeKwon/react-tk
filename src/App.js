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
      <p>title : {props.title}</p>
      <p>body : {props.body}</p>
    </article>
  );
}

const Create = (props) => {
  return(
    <article>
      <h2>Create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title,body);
      }}>
        <div><input type="text" name="title" placeholder="title"></input></div>
        <div><textarea name="body" placeholder="body"></textarea></div>
        <div><input type="submit" value="Create"></input></div>
      </form>
    </article>
  );
}

const Update = (props) => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return(
    <article>
      <h2>Update</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title,body);
      }}>
        <div><input type="text" name="title" placeholder="title" value={title} onChange={event=>{
          setTitle(event.target.value);
        }}></input></div>
        <div><textarea name="body" placeholder="body" value={body} onChange={event=>{
          setBody(event.target.value);
        }}></textarea></div>
        <div><input type="submit" value="Update"></input></div>
      </form>
    </article>
  );
}

function App() {
  const [topics, setTopics] = useState([
    {id:1, title:'list1', body:'list array 1'},
    {id:2, title:'list2', body:'list array 2'},
    {id:3, title:'list3', body:'list array 3'},
  ]);

  // const _mode = useState('welcome');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('welcome');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextControl = null;
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
    contextControl = <>
    <li><a href={'/update/'+id} onClick={event=>{
      event.preventDefault();
      setMode('UPDATE');
    }}>update</a></li>
    <li><input type="button" value="Delete" onClick={()=>{
      const newTopics = [];
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].id !== id) {
          newTopics.push(topics[i]);
        }
      }
      setTopics(newTopics);
      setMode('welcome');
    }} /></li>
    </>;
  } else if(mode === 'create'){
    content = <Create onCreate={(_title, _body)=>{
      const newTopic = {id:nextId, title:_title, body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('read');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>;
  } else if(mode === 'UPDATE'){
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }

    content = <Update title={title} body={body} onUpdate={(_title, _body)=>{
      const newTopics = [...topics];
      const updateTopic = {id:id, title:_title, body:_body};
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updateTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('read');
    }}></Update>;
  }

  return (
    <Wrapper>
        <Header title='h1' 
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
        <ul>
          <li>
            <a href="/create" onClick={event=>{
            event.preventDefault();
            setMode('create');
            }}>create</a>
          </li>
          {contextControl}
        </ul>
        {Block('h10 m-tb10')}
        <Plus></Plus>
        {Block('h10 m-tb10')}
        {Typekey()}
    </Wrapper>
  );
}
export default App;
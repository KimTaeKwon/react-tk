import { useState, useEffect } from "react";

const Tick = () => {
  const [date, setDate] = useState(new Date());
  // setInterval(()=> {
  //   setDate(new Date());
  // }, 1000);
  useEffect(()=>{
    setInterval(()=> {
      setDate(new Date());
    }, 1000);
  }, []);

  return(
    <>{date.toLocaleTimeString()}</>
  );
}

const Welcome = (props) => {
  return(
    <div>
      Hello, {props.name}
    </div>
  );
}
const TilProps = (props) => {
  return(
    <div>
      <Welcome name="Mike"></Welcome>
      <Welcome name="Steve"></Welcome>
      <Welcome name="Jane"></Welcome>
    </div>
  );
}




const Comment = (props) => {

  props = {
    author:{
      name : 'this is name',
      avatarUrl : '/favicon.ico'
    },
    text : 'this is reply.',
    date : new Date(),
  }

  const Avatar = (props) => {
    return(
      <img className="avatar" src={props.user.avatarUrl} alt={props.user.name} />
    );
  }

  const UserInfo = (props) => {
    return(
      <div className="user-info">
        <Avatar user={props.user} />
        <div className="user-info-name">
          {props.user.name}
        </div>
      </div>
    );
  }

  return(
    <div className="comment">
      <UserInfo user={props.author} />

      {/* <div className="user-info">

      <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} /> // avatar 컴포넌트

      <Avatar user={props.author} />
      <div className="user-info-name">
        {props.author.name}
      </div>
      </div> */}

      <div className="comment-text">
        {props.text}
      </div>

      <div className="comment-text">
        {props.date.toLocaleDateString()}
      </div>
    </div>
  );
}

function Soaple() {
  return (
    <>
    <Tick></Tick>
    <hr />
    <TilProps></TilProps>
    <hr />
    <Comment></Comment>
    </>
  );
}

export default Soaple;
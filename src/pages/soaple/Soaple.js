import { useState, useEffect, useRef } from "react";

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

const styles = {
  nameText: {
    color:'pink',
    fontSize: 16,
    fontWeight:'bold'
  },
  commentText: {
    color:'blue',
    fontSize: 14,
  },
};
const CommentText = (props) => {
  return(
    <div>
      <span style={styles.nameText}>{props.name}</span>
      <span style={styles.commentText}>{props.comment}</span>
    </div>
  );
}
const replies = [
  {
    id: 1,
    name: 'name 1',
    comment : 'replay 1'
  },
  {
    id: 2,
    name: 'name 2',
    comment : 'replay 2'
  },
  {
    id: 3,
    name: 'name 3',
    comment : 'replay 3'
  },
];
const CommentList = (props) => {
  return(
    <div>
      {
        replies.map((comment) => {
          return(
            <CommentText key={comment.id} name={comment.name} comment={comment.comment}></CommentText>
          );
        })
      }
    </div>
  );
}

const Counter = (props) => {
  // const [변수명, set변수명] = useState(초기값); // useState 사용법
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // 컴포넌트가 마운트 된 이후,
  //   // 의존성 배열에 있는 변수들 중 하나라고 값이 변경되었을 때 실행됨
  //   // 의존성 배열에 빈 배열[]을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
  //   // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨

  //   return() => {
  //     // 컴포넌트가 마운트 해제 되기 전에 실행됨
  //   }
  // }, [의존성 변수1, 의존성 변수2, ...]);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return(
    <div>
      <p>총 {count}번 클릭했습니다.</p>
      <button onClick={() => setCount(count +1)}>Click</button>
    </div>
  );
}

const TextInputWithFocusButton = (props) => {
  const inputElem = useRef(null);
  const onButtonClick = () => {
    // current 는 마운트된 input을 가리킴
    inputElem.current.focus();
  }
  return(
    <div>
      <input ref={inputElem} type='text' />
      <button onClick={onButtonClick}>
        Focus the input
      </button>
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
    <hr />
    <CommentList></CommentList>
    <hr />
    <Counter></Counter>
    <hr />
    <TextInputWithFocusButton></TextInputWithFocusButton>
    </>
  );
}

export default Soaple;
import { useState } from "react";
import React from 'react'

const Board = (props) => {
  // const [isActive, setActive] = useState('false');
  // const handleToggle = () => {
  //     setActive(!isActive);
  // };


  const handleToggle = () => {
    let asd = Math.random();
    // console.log(Math.ceil((asd)*10000));
    let rotate = Math.ceil((asd)*10000);

    document.querySelector('#roulette').style.transform = 'rotate('+rotate+'deg)';

    setTimeout(() => {
      alert(rotate);
      window.location.reload();
      // document.querySelector('#roulette').style.transform = 'none';
    }, 4500);
  };

  return(
    <>
    {/* <div style={{transform: 'rotate(3600deg)'}} className={isActive ? 'roulette act' : 'roulette'}> */}
    <div id="roulette" className={'roulette'}>
        <svg viewBox="0 0 40 40">
            <g>
              <circle
                    r="10"
                    cx="20"
                    cy="20"
                    fill="transparent"
                    stroke="tomato"
                    strokeWidth={"20"}
                    strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
              />
              <text x="20%" y="70%" textAnchor="end" stroke="white" strokeWidth="0px" dy=".3em" fontSize="12px" fill="white">꽝</text>
            </g>
            {/* <circle
                r="10"
                cx="20"
                cy="20"
                fill="transparent"
                stroke="tomato"
                strokeWidth={"20"}
                strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
            /> */}
            
            <circle
                r="10"
                cx="20"
                cy="20"
                fill="transparent"
                stroke="pink"
                strokeWidth={"20"}
                strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
            />

            {/* <g>
            <circle
                r="10"
                cx="20"
                cy="20"
                fill="transparent"
                stroke="pink"
                strokeWidth={"20"}
                strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
            />
            <text x="20%" y="70%" textAnchor="end" stroke="white" strokeWidth="0px" dy=".3em" fontSize="12px" fill="white">1</text>
            </g> */}

            <circle
                r="10"
                cx="20"
                cy="20"
                fill="transparent"
                stroke="yellow"
                strokeWidth={"20"}
                strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
            />
            <circle
                r="10"
                cx="20"
                cy="20"
                fill="transparent"
                stroke="red"
                strokeWidth={"20"}
                strokeDasharray={"calc(25 * calc(2*3.14*10) / 100) calc(2*3.14*10)"}
            />
        </svg>
    </div>
    <button onClick={handleToggle}>Start</button>
    </>
  );
};

// const StartButton = (props) => {
//     const [isActive, setActive] = useState('false');
//     const handleToggle = () => {
//         setActive(!isActive);
//     };
//   return(
//     // <button onClick={handleToggle} className={isActive ? 'act' : null}>{`${props.name}`}</button>
//     <button onClick={handleToggle}>{`${props.name}`}</button>
//   );
// };

const Roulette = (props) => {


  return (
      <div>
        <Board></Board>
        
        
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
            <path d="M80 80
                    A 45 45, 0, 0, 0, 125 125
                    L 125 80 Z" fill="green"/>
            <path d="M230 80
                    A 45 45, 0, 1, 0, 275 125
                    L 275 80 Z" fill="red"/>
            <path d="M80 230
                    A 45 45, 0, 0, 1, 125 275
                    L 125 230 Z" fill="purple"/>
            <path d="M230 230
                    A 45 45, 0, 1, 1, 275 275
                    L 275 230 Z" fill="blue"/>

            <path d="M230 230
                    A 45 45, 0, 1, 1, 275 275
                    L 275 230 Z" fill="red"/>
                <path d="
                M 50 10
                A 40 40, 0, 0, 0, 10 50"
                stroke="green"
                fill="transparent" />
                

                a rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 dx dy
                M 시작점xy A 반지름, 회전각, 큰호, 쓸기, 끝점
        </svg> */}
    </div>
  )
}

export default Roulette
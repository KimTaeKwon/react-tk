import { useState } from "react";

import React from 'react'

const Roulette = () => {
  return (
    <div>
        <div className="roulette">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
                <path d="M80 80
                        A 45 45, 0, 0, 0, 125 125
                        L 125 80 Z" fill="green"/>
            </svg>
        </div>
        

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
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

            {/* <path d="
            M 50 50
            A 45 45, 0, 1, 0, 275 125
            L 275 80 Z
            "/> */}

<path d="
    M 50 10
    A 40 40, 0, 0, 0, 10 50"
    stroke="green"
    fill="transparent" />
    

{/* a rx ry x축-회전각 큰-호-플래그 쓸기-방향-플래그 dx dy */}
{/* M 시작점xy A 반지름, 회전각, 큰호, 쓸기, 끝점 */}
        </svg>
    </div>
  )
}

export default Roulette
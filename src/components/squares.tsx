import { useEffect } from 'react';

import '../styles/_squares.scss'

export function Squares (){
    useEffect(() => {
        console.log('square')
        const ulSquares = document.querySelector("ul.squares")

        for(let i = 0; i < 11; i++){
            const li = document.createElement("li");
        
            const size = Math.floor(Math.random() * (120 - 10) + 10);
            
            li.style.width = `${size}px`;
            li.style.height = `${size}px`;
            li.style.bottom = `-${size}px`;
        
            const position = Math.random() * (99 - 1) + 1
            li.style.left = `${position}%`;
        
            const delay = Math.random() * (5 - 0.1) + 0.1
            li.style.animationDelay = `${delay}s`;
        
            const duration = Math.random() * (24 - 12) + 12
            li.style.animationDuration = `${duration}s`;
            
            // const duration = Math.random() * (24 - 12) + 12
            li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;	
        
            ulSquares?.appendChild(li)
        }
    });
    
    return(
        <ul className="squares"></ul>
    )    
}
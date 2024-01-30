import React, { useEffect, useState } from 'react'
import './Usage.css'

function Usage() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('white');
    const [boom, setBoom] = useState(false);

    useEffect(() =>{
        setBoom(false)
        const id = setTimeout(()=>{
            setBoom(true)
        }, count * 1000);

        return () => {
            clearTimeout(id);
        }
    },[count]);
  return (
    <div className='usage'>
        <div className='usage-item' style={{background: color}}>
        <button onClick={() =>{
            setCount((state)=>{
                return state + 1
            })
        }}>Increment</button>
        <label>{count}</label>
        <button onClick={() =>{
            setCount((state)=>{
                return state - 1
            })
        }
        }>Decrement</button>
        </div>
        <button onClick={() =>{
            setColor('green');
        }}>Green</button>
        <button onClick={()=>{
            setColor('blue');
        }}>Blue</button>

        {
            boom && count ? (
                <div className='boom'>
                    <span>
                        Boom
                    </span>
                </div>
            ) : null
        }
    </div>
  )
}

export default Usage

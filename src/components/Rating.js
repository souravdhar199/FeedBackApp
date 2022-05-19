import React, { useState } from 'react'

export default function Rating({picked}) {
  const[select, setSelect] = useState(4);

  const help =(e)=>{
   
    setSelect(+e.currentTarget.value);
    picked(+e.currentTarget.value);
   
 
  }
  return (
    <ul className='rating'>
      <li>
        <input
        type="radio"
        id="num1"
        value="1"
        onChange={help}
        checked={select===1}
        />
        <label htmlFor='num1'>1</label>
      </li>

      <li>
        <input
        type="radio"
        id="num2"
        value="2"
        checked={select===2}
        onChange={help}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
        type="radio"
        id="num3"
        value="3"
        checked={select===3} 
        onChange={help}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
        type="radio"
        id="num4"
        value="4"
        checked={select===4}
        onChange={help}
        />
        <label htmlFor='num4'>4</label>
      </li>
      
    </ul>
  )
}

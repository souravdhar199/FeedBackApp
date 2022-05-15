import React from 'react'

export default function Card({children}) {

  console.log(children);
  return (
    <div className='card'>{children}</div>
  )
}

import React from 'react'

export default function Operators() {
    const Operators = ['+' , '-', '*','/','>','<']
  return (
    <div className = 'letters'>
      {
        Operators.map((it) => 
        <div><button className='btn'>{it}</button></div>
        )
      }
    </div>
  )
}

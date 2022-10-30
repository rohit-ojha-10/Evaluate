import React, { useState , useRef} from 'react'
export default function Letters({ expression, setExpression }) {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const Letters = ['A', 'B', 'C', 'D', 'E']
  const Logical = ['>', '<']
  const arithmatic = ['+', '-', '*', '/']
  const [btn, setBtn] = useState([])
  const handlePrompt = () => {
    let number = prompt('Enter Number');
    setExpression([...expression, number])
    setBtn([...btn,number])
  }
  const handleClick = (e) => {
    e.preventDefault()
    setExpression([...expression, e.target.value])
    setBtn([...btn,e.target.value])
    console.log(e.target.value)
  }
  const dragStart = (e) => {
    setExpression([...expression, e.target.value])
  };
  const remove = (index) => {
    let arr = []
    for(let i = 0;i < btn.length;i++)
    {
        if(i !== index)
          arr.push(btn[i])
    }
    setBtn(arr)
    setExpression([...arr])
  }
  const dragEnter = (e) => {
    e.preventDefault()
  };
  console.log(btn)
  return (
    <div className='whole'>
      <div className='letters'>
        {
          Letters.map((it,index) => <div>
          <button value={it} className='btn'  
          onDragStart={(e) => dragStart(e)}
          onDragEnter={(e) => {dragEnter(e);}}
          onDragEnd = {(e) => setBtn([...btn,e.target.value])}
          key={index}
          draggable
          >{it}</button></div>
          )
        }
        
      </div>
      <div className='operators'>
        {
            arithmatic.map((it,index) => <div>
            <button value={it} className='btn'  
            onDragStart={(e) => dragStart(e)}
            onDragEnter={(e) => {dragEnter(e);}}
            onDragEnd = {(e) => setBtn([...btn,e.target.value])}
            key={index}
            draggable
            >{it}</button></div> )
        }
        {
          Logical.map((it) => <div>
            <button value={it} className='btn'  
          onClick={handleClick}>{it}</button>
          </div>)
        }
        {
           <button className='btn'  
           onClick={handlePrompt}>{"RHS INTEGER"}</button>
        }
    </div>
      <div className='dropbox'   onDragOver = {(e) => {
            e.preventDefault();
          }}>
        {btn && btn.map((it,index) => <div><div className='btn btnn' style={(it >= 'A' && it <= 'E') ? {backgroundColor : "whitesmoke"} : {backgroundColor : "lightblue"}}><div className='cross' onClick={() => remove(index)}><div className='crossStyle'>x</div></div>{it}</div></div>)}
      </div>
    </div>
  )
}

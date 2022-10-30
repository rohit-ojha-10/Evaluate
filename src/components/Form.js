import React, { useRef } from 'react'
import '../style.css'
import axios from 'axios';
export default function Form({expression , setExpression}) {
    
    const handleSubmit = async (e) => {
        console.log(expression)
        e.preventDefault()
        try {
            await axios.post(`https://frozen-savannah-67023.herokuapp.com/evaluate`,
            {
              expression : expression
            })
            .then((response) => {
              alert(response.data)
            })
          } catch (error) {
            alert("Invalid Expression")
          }
    }
    let exp = ""
    for(let i = 0;i < expression.length;i++)
        exp = exp + ' ' + expression[i]
    const RHS = useRef()
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type = "text" value={exp} ref = {final_exp}/> */}
        <button>Evaluate</button>
      </form>

    </div>
  )
}

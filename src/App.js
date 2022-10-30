import logo from './logo.svg';
import Letters from './components/Letters';
import Operators from './components/Operators';
import './style.css'
import Form from './components/Form';
import { useState } from 'react';
function App() {
  const [expression,setExpression] = useState([])
  return (
    <div className='App'>
      <div >
        <Letters expression={expression} setExpression = {setExpression} />
      </div>
      {/* <div>
        <Operators />
      </div> */}
      <div>
        <Form expression={expression} setExpression = {setExpression}/>
      </div>
    </div>
  );
} 
 
export default App;

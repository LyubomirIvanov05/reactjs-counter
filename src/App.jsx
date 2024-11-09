import { useState } from 'react'
import Counter from './components/Counter'
import Buttons from './components/Buttons'
import Settings from './components/Settings';

function App() {
  const [count, setCount] = useState(0);
  const [startingValue, setStartingValue] = useState(0);
  const [changeValue, setChangeValue] = useState(1);
  
  return (
    <>
      <div className='counter-container'>
        <Counter count={count}/>
        <Buttons count={count} setCount={setCount} changeValue={changeValue}/>
      </div>
      <Settings setCount={setCount} startingValue={startingValue}
       setStartingValue={setStartingValue} setChangeValue={setChangeValue} 
       changeValue={changeValue}/>
    </>
  )
}

export default App

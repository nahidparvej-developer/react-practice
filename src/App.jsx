import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import singer from './singer'
import Singer from './singer'
import Counter from './counter'
import Team from './team'
import User from './api'
import Friends from './friends';

function App() {
  const [count, setCount] = useState(0)

  const singers = [
    { name: 'Evan', age: 35 },
    { name: 'Eva', age: 28 },
    { name: 'Fardin', age: 59 },
    { name: 'Evana', age: 38 },

  ]
  function handleclick() {
    alert('insert please')
  }


  return (
    <>
 
      <Friends></Friends>
      {/* api */}
       <User></User>

      {/* counter */}
      <Counter></Counter>
      <button onClick={handleclick}>Clicked</button>

      {/* favoroute singer  */}
      <h3> My Favourite Singer</h3>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <h1>Vite + React</h1>
      
      {/* team  */}
      <Team></Team>

      {/* persons */}
      <Third></Third>

      {/* todo component  */}
      <Todo task=' this is raton'
        isDone={true}></Todo>

      <Todo task=' Magibazi raton'
        isDone={false}></Todo>

      <Todo task=' he is play boy'
        isDone={true}></Todo>
    </>
  )
}

function Third() {
  const person = { name: 'nahid parvej', age: 23, }
  return (
    <div className='persons'>
      <h3>This is a student</h3>
      <p>name : {person.name}</p>
      <p>age : {person.age}</p>

    </div>)


}

export default App

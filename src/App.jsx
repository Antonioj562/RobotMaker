import { useState } from 'react'
import './App.css'
import factory from "../assets/factory.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <img className='factoryImg' src={factory}/>
      <h1>BotCreator</h1>

      <h4>Explore this bot creator and see how the bots are able to be displayed to you.</h4>
      <h4>The ability of adding your own bots to the ranks.</h4>
    </div>
  )
}

export default App

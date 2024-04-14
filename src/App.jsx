import { useState } from 'react'
import './App.css'
import factory from "../assets/factory.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="appContainer">
      <img className='factoryImg' src={factory}/>
      <h1>BotCreator</h1>

      <h3>Explore this bot creator and see how the bots are able to be displayed to you.</h3>
      <h3>The ability of adding your own bots to the ranks.</h3>
    </div>
  )
}

export default App

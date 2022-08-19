import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App

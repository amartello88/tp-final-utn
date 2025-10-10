import { Link } from "react-router-dom"
import '../views/Help.css'

const Help = () => {
  return (
    <main>
      <h1>Hola a todos desde la página de Help</h1>
      <p className="text-info">Ir a <Link to="/chat">Chat</Link></p>
    </main>
  )
}

export default Help
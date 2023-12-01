import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import './App.css'
import { useState } from "react"

function App() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <p>CV Application</p>
      <div className="container">
        <div className="card">
          <div className="card-title" onClick={() => setCollapse(!collapse)}>
            <p>Experience</p><p>+</p>
          </div>
          { collapse && <Experience /> }
          
        </div>
        <div className="card">
          <p>Personal</p>
          <Personal />
        </div>
      </div>
    </>
  )
}

export default App

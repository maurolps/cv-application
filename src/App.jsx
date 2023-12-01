import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import './App.css'

function App() {
  return (
    <>
      <p>CV Application</p>
      <div className="container">
        <div className="card">
          <p>Experience</p>
          <Experience />
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

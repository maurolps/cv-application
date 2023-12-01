import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import { LoadCard } from "./components/LoadCard.jsx"
import { useState } from "react"
import './App.css'

function App() {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <p>CV Application</p>
      <div className="container">
        <LoadCard title="Personal Details" component={Personal} />
        <LoadCard title="Work Experience" component={Experience} />
      </div>
    </>
  )
}

export default App

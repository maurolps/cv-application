import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import { Education } from "./components/Education.jsx"
import { LoadCard } from "./components/LoadCard.jsx"
import './App.css'

function App() {
  return (
    <>
      <p>CV Application</p>
      <div className="container">
        <LoadCard title="Personal Details" component={Personal} />
        <LoadCard title="Work Experience" component={Experience} />
        <LoadCard title="Education" component={Education} />
      </div>
    </>
  )
}

export default App

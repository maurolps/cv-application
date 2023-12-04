import { Header } from "./components/Header.jsx"
import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import { Education } from "./components/Education.jsx"
import { LoadCard } from "./components/LoadCard.jsx"
import './App.css'

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <LoadCard title="Personal Details" component={Personal} />
          <LoadCard title="Work Experience" component={Experience} />
          <LoadCard title="Education" component={Education} />
        </div>
        <div className="preview">
          <p>Preview</p>
        </div>
      </main>
    </>
  )
}

export default App

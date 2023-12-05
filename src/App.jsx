import { Header } from "./components/Header.jsx"
import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import { Education } from "./components/Education.jsx"
import { LoadCard } from "./components/LoadCard.jsx"
import { Preview} from "./components/Preview.jsx"
import { useState } from "react"
import './App.css'

function App() {
  const [cardCollapse, setCardCollapse] = useState('Personal Details');
  const [updatePreview, setUpdatePreview] = useState('');

  const toggleCards = (title) => {
    setCardCollapse(title);
  }

  const inputChange = (e) => {
    setUpdatePreview(e.target.value);
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <LoadCard title="Personal Details" component={Personal} toggle={toggleCards} collapse={cardCollapse} inputChange={inputChange} />
          <LoadCard title="Work Experience" component={Experience} toggle={toggleCards} collapse={cardCollapse} inputChange={inputChange} />
          <LoadCard title="Education" component={Education} toggle={toggleCards} collapse={cardCollapse} inputChange={inputChange} />
        </div>
        <div className="preview">
          <Preview text={updatePreview}/>
        </div>
      </main>
    </>
  )
}

export default App

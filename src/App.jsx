import { Header } from "./components/Header.jsx"
import { Personal } from "./components/Personal.jsx"
import { Experience } from "./components/Experience.jsx"
import { Education } from "./components/Education.jsx"
import { LoadCard } from "./components/LoadCard.jsx"
import './App.css'
import { useState } from "react"

function App() {
  const [cardCollapse, setCardCollapse] = useState(false);

  const toggleCards = () => {
    setCardCollapse(!cardCollapse);
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <LoadCard title="Personal Details" component={Personal} toggle={toggleCards} collapse={cardCollapse} />
          <LoadCard title="Work Experience" component={Experience} toggle={toggleCards} collapse={cardCollapse} />
          <LoadCard title="Education" component={Education} toggle={toggleCards} collapse={cardCollapse} />
        </div>
        <div className="preview">
          <p>Preview</p>
        </div>
      </main>
    </>
  )
}

export default App

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
  const [updatePersonal, setUpdatePersonal] = useState({
    ["full-name"]: "",
    ["email"]: "",
    ["phone-number"]: "",
    ["address"]: "",
    ["company-name"]: "",
    ["position-title"]: "",
    ["start-date"]: "",
    ["end-date"]: "",
    ["location"]: "",
    ["description"]: "",
    ["school"]: "",
    ["degree"]: "",
    ["start"]: "",
    ["end"]: "",
    ["region"]: "",
  })

  const toggleCards = (title) => {
    setCardCollapse(title);
  }

  const inputChange = (e) => {
    const { value, id } = e.target;
    setUpdatePersonal((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="container">
          <LoadCard title="Personal Details" 
            component={Personal} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange} 
            update={updatePersonal} 
          />
          <LoadCard title="Work Experience" 
            component={Experience} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange}
            update={updatePersonal} 
          />
          <LoadCard title="Education" 
            component={Education} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange}
            update={updatePersonal} 
          />
        </div>
        <div className="preview">
          <Preview update={updatePersonal}/>
        </div>
      </main>
    </>
  )
}

export default App

import { Header } from "./components/Header"
import { Personal } from "./components/Personal"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { LoadCard } from "./components/LoadCard"
import { Preview} from "./components/Preview"
import { useState } from "react"

import { svgPersonal, svgExp, svgEdu, svgDownload }  from './assets/svgs'

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
            svg={svgPersonal}
            component={Personal} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange} 
            update={updatePersonal} 
          />
          <LoadCard title="Work Experience" 
            svg={svgExp}
            component={Experience} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange}
            update={updatePersonal} 
          />
          <LoadCard title="Education" 
            svg={svgEdu}
            component={Education} 
            toggle={toggleCards} 
            collapse={cardCollapse} 
            inputChange={inputChange}
            update={updatePersonal} 
          />
        </div>
        <div className="preview-wrapper">
          <div className="preview">
            <Preview update={updatePersonal}/>
          </div>
          <div className="action">
            <button className="btn-download">PDF {svgDownload}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

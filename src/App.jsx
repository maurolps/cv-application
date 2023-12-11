import { Header } from "./components/Header"
import { Personal } from "./components/Personal"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { LoadCard } from "./components/LoadCard"
import { Preview} from "./components/Preview"
import { useState } from "react"

import { svgPersonal, svgExp, svgEdu, svgDownload, svgAutofill, svgTrash }  from './assets/svgs'

import './App.css'

function App() {
  const [cardCollapse, setCardCollapse] = useState('Personal Details');
  const [updatePersonal, setUpdatePersonal] = useState({
    ["full-name"]: "John Doe",
    ["email"]: "john.doe@example.com",
    ["phone-number"]: "555-1234",
    ["address"]: "123 Main Street, Cityville, State, 12345",
    ["company-name"]: "Tech Solutions Inc.",
    ["position-title"]: "Full Stack Developer",
    ["start-date"]: "January 2018",
    ["end-date"]: "Present",
    ["location"]: "Cityville, State",
    ["description"]: "Develop and maintain full-stack applications, participate in system architecture design, troubleshoot and debug issues, collaborate with cross-functional teams.",
    ["school"]: "University of Tech",
    ["degree"]: "Bachelor of Science in Computer Science",
    ["start"]: "September 2014",
    ["end"]: "May 2018",
    ["region"]: "Cityville, State",
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
          <div className="card-actions">
            <button className="btn-autofill">Auto Fill {svgAutofill}</button>
            <button>{svgTrash}</button>
          </div>
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
            <Preview update={updatePersonal}/>
          <div className="action">
            <button className="btn-download">PDF {svgDownload}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

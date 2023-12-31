import { Header } from "./components/Header"
import { Personal } from "./components/Personal"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { LoadCard } from "./components/LoadCard"
import { Preview} from "./components/Preview"
import { useState } from "react"
import { defaultData, exampleData, expData } from "./components/Data"
import { svgPersonal, svgExp, svgEdu, svgDownload, svgAutofill, svgTrash }  from './assets/svgs'
import './App.css'



function App() {
  const [cardCollapse, setCardCollapse] = useState('Personal Details');
  const [updatePersonal, setUpdatePersonal] = useState(defaultData);
  const [updateExp, setUpdateExp] = useState(null);
  const [addingExp, setAddingExp] = useState(false);

  const toggleCards = (title) => {
    setCardCollapse(title);
  }

  const toggleAddingExp = () => {
    setAddingExp(!addingExp);
  }

  const resetDraft = () =>  {
    setUpdatePersonal((prevData) => ({
      ...prevData,
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
    }))
  }

  const addExpItem = (item) => {
    setUpdateExp((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item]
    })
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
            <button className="btn-autofill" onClick={() => {
              setUpdatePersonal(exampleData);
              setUpdateExp(expData);
            }}>Auto Fill {svgAutofill}</button>
            <button onClick={() => {
              setUpdatePersonal(defaultData);
              setAddingExp(false);
              setUpdateExp(null);
            }}>{svgTrash}</button>
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
            update={updateExp}
            adding={addingExp}
            addExp={addExpItem}
            fieldsData={updatePersonal}
            resetDraft={resetDraft}
            toggleAdding={toggleAddingExp} 
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
            <Preview update={updatePersonal} updateExp={updateExp}/>
          <div className="action">
            <button className="btn-download">PDF {svgDownload}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

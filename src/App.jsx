import { Header } from "./components/Header"
import { Personal } from "./components/Personal"
import { Experience } from "./components/Experience"
import { Education } from "./components/Education"
import { LoadCard } from "./components/LoadCard"
import { Preview} from "./components/Preview"
import { useState } from "react"
import generatePDF from 'react-to-pdf';
import { defaultData, exampleData, expData, eduData } from "./components/Data"
import { svgPersonal, svgExp, svgEdu, svgDownload, svgAutofill, svgTrash }  from './assets/svgs'
import './App.css'

const pdfOptions = {
  method: 'open',
}

function App() {
  const [cardCollapse, setCardCollapse] = useState('Personal Details');
  const [updatePersonal, setUpdatePersonal] = useState(defaultData);
  const [updateExp, setUpdateExp] = useState(null);
  const [addingExp, setAddingExp] = useState(false);
  const [editMode, setEditMode ] = useState({active: false, index: null,});
  const [updateEdu, setUpdateEdu] = useState(null);
  const [addingEdu, setAddingEdu] = useState(false);
  const [editModeEdu, setEditModeEdu ] = useState({active: false, index: null,});


  const toggleCards = (title) => {
    setCardCollapse(title);
  }

  const toggleAddingExp = () => {
    setAddingExp(!addingExp);
  }

  const toggleAddingEdu = () => {
    setAddingEdu(!addingEdu);
  }

  const toggleEditMode = (index = null) => {
    setEditMode({
      active: !editMode.active,
      index,
    })
  }

  const toggleEditModeEdu = (index = null) => {
    setEditModeEdu({
      active: !editModeEdu.active,
      index,
    })
  }

  const editing = (fieldsData) => {
    setUpdatePersonal((prevData) => ({
      ...prevData,
      ...fieldsData
    }))
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

  const addEduItem = (item) => {
    setUpdateEdu((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item]
    })
  }

  const updateExpItem = (item, index) => {
    setUpdateExp((prevData) => {
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    })
  }

  const updateEduItem = (item, index) => {
    setUpdateEdu((prevData) => {
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    })
  }

  const delExpItem = (index) => {
    const tempArr = [...updateExp];
    tempArr.splice(index, 1);
    setUpdateExp(tempArr);
  }

  const delEduItem = (index) => {
    const tempArr = [...updateEdu];
    tempArr.splice(index, 1);
    setUpdateEdu(tempArr);
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
              setUpdateEdu(eduData);
              setTimeout(() => {
                const profileImg = document.getElementById('profile-img');
                profileImg.src = "./src/assets/john-doe.png";      
              }, 300);
            }}>Auto Fill {svgAutofill}</button>
            <button onClick={() => {
              setUpdatePersonal(defaultData);
              setAddingExp(false);
              setAddingEdu(false);
              setUpdateExp(null);
              setUpdateEdu(null);
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
            delExp={delExpItem}
            updateItem={updateExpItem}
            editing={editing}
            toggleEdit={toggleEditMode}
            editMode={editMode}
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
            update={updateEdu} 
            adding={addingEdu}
            addExp={addEduItem}
            delExp={delEduItem}
            updateItem={updateEduItem}
            editing={editing}
            toggleEdit={toggleEditModeEdu}
            editMode={editModeEdu}
            fieldsData={updatePersonal}
            resetDraft={resetDraft}
            toggleAdding={toggleAddingEdu}

          />
        </div>
        <div className="preview-wrapper">
            <Preview update={updatePersonal} updateExp={updateExp} updateEdu={updateEdu} editMode={editMode} />
          <div className="action">
            <button className="btn-download" onClick={() => {
              const pdfTarget = () => document.getElementById('pdf-content');
              const pdfContent = pdfTarget();
              pdfContent.classList.add("print-pdf");
              generatePDF(pdfTarget, pdfOptions);
              pdfContent.classList.remove("print-pdf");
            }}>PDF {svgDownload}</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

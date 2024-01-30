import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { LoadCard } from "./components/LoadCard";
import { Preview } from "./components/Preview";
import { useState } from "react";
import generatePDF from "react-to-pdf";
import { defaultData } from "./components/Data";
import { svgPersonal, svgExp, svgEdu, svgDownload } from "./assets/svgs";
import "./App.css";

const pdfOptions = {
  method: "open",
};

function App() {
  const [cardCollapse, setCardCollapse] = useState("Personal Details");
  const [fieldsData, setFieldsData] = useState(defaultData);
  const [updateExp, setUpdateExp] = useState(null);
  const [addingExp, setAddingExp] = useState(false);
  const [editMode, setEditMode] = useState({ active: false, index: null });
  const [updateEdu, setUpdateEdu] = useState(null);
  const [addingEdu, setAddingEdu] = useState(false);
  const [editModeEdu, setEditModeEdu] = useState({
    active: false,
    index: null,
  });

  const toggleCards = (title) => {
    setCardCollapse(title);
  };

  const toggleAddingExp = () => {
    setAddingExp(!addingExp);
  };

  const toggleAddingEdu = () => {
    setAddingEdu(!addingEdu);
  };

  const toggleEditMode = (index = null) => {
    setEditMode({
      active: !editMode.active,
      index,
    });
  };

  const toggleEditModeEdu = (index = null) => {
    setEditModeEdu({
      active: !editModeEdu.active,
      index,
    });
  };

  const editing = (data) => {
    setFieldsData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  const resetDraft = () => {
    setFieldsData((prevData) => ({
      ...prevData,
      ["company-name"]: null,
      ["position-title"]: null,
      ["start-date"]: null,
      ["end-date"]: null,
      ["location"]: null,
      ["description"]: null,
      ["school"]: null,
      ["degree"]: null,
      ["start"]: null,
      ["end"]: null,
      ["region"]: null,
    }));
  };

  const addExpItem = (item) => {
    setUpdateExp((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item];
    });
  };

  const addEduItem = (item) => {
    setUpdateEdu((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item];
    });
  };

  const updateExpItem = (item, index) => {
    setUpdateExp((prevData) => {
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    });
  };

  const updateEduItem = (item, index) => {
    setUpdateEdu((prevData) => {
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    });
  };

  const delExpItem = (index) => {
    const tempArr = [...updateExp];
    tempArr.splice(index, 1);
    setUpdateExp(tempArr);
  };

  const delEduItem = (index) => {
    const tempArr = [...updateEdu];
    tempArr.splice(index, 1);
    setUpdateEdu(tempArr);
  };

  const inputChange = (e) => {
    const { value, id } = e.target;
    setFieldsData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <>
      <main>
        <div className="container">
          <header>
            <Header
              setFieldsData={setFieldsData}
              setUpdateExp={setUpdateExp}
              setUpdateEdu={setUpdateEdu}
              setAddingEdu={setAddingEdu}
              setAddingExp={setAddingExp}
            />
          </header>

          <LoadCard
            title="Personal Details"
            svg={svgPersonal}
            component={Personal}
            toggle={toggleCards}
            collapse={cardCollapse}
            inputChange={inputChange}
            update={fieldsData}
          />
          <LoadCard
            title="Work Experience"
            svg={svgExp}
            component={Experience}
            toggle={toggleCards}
            collapse={cardCollapse}
            inputChange={inputChange}
            update={updateExp}
            adding={addingExp}
            addItem={addExpItem}
            delItem={delExpItem}
            updateItem={updateExpItem}
            editing={editing}
            toggleEdit={toggleEditMode}
            editMode={editMode}
            fieldsData={fieldsData}
            resetDraft={resetDraft}
            toggleAdding={toggleAddingExp}
          />
          <LoadCard
            title="Education"
            svg={svgEdu}
            component={Education}
            toggle={toggleCards}
            collapse={cardCollapse}
            inputChange={inputChange}
            update={updateEdu}
            adding={addingEdu}
            addItem={addEduItem}
            delItem={delEduItem}
            updateItem={updateEduItem}
            editing={editing}
            toggleEdit={toggleEditModeEdu}
            editMode={editModeEdu}
            fieldsData={fieldsData}
            resetDraft={resetDraft}
            toggleAdding={toggleAddingEdu}
          />
        </div>
        <div className="preview-wrapper">
          <Preview
            update={fieldsData}
            updateExp={updateExp}
            updateEdu={updateEdu}
            editMode={editMode}
            editModeEdu={editModeEdu}
          />
          <div className="action">
            <button
              className="btn-download"
              onClick={() => {
                const pdfTarget = () => document.getElementById("pdf-content");
                const pdfContent = pdfTarget();
                pdfContent.classList.add("print-pdf");
                generatePDF(pdfTarget, pdfOptions);
                pdfContent.classList.remove("print-pdf");
              }}
            >
              PDF {svgDownload}
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { LoadCard } from "./components/LoadCard";
import { Preview } from "./components/Preview";
import { Skills } from "./components/Skills";
import { useState } from "react";
import generatePDF from "react-to-pdf";
import { defaultData } from "./components/Data";
import {
  svgPersonal,
  svgExp,
  svgEdu,
  svgDownload,
  svgSkills,
  svgGithub,
} from "./components/Svgs";
import "./App.css";
import { ChangeEvent } from "react";
import {
  FieldsData,
  EditMode,
  ExperienceItem,
  EducationItem,
  PdfOptions,
} from "@Types/app";

const pdfOptions: PdfOptions = {
  method: "open",
};

function App() {
  const [cardCollapse, setCardCollapse] = useState("Personal Details");
  const [fieldsData, setFieldsData] = useState<FieldsData>(defaultData);
  const [updateExp, setUpdateExp] = useState<ExperienceItem[] | null>(null);
  const [addingExp, setAddingExp] = useState(false);
  const [editMode, setEditMode] = useState<EditMode>({
    active: false,
    index: null,
  });
  const [updateEdu, setUpdateEdu] = useState<EducationItem[] | null>(null);
  const [addingEdu, setAddingEdu] = useState(false);
  const [editModeEdu, setEditModeEdu] = useState<EditMode>({
    active: false,
    index: null,
  });

  const toggleCards = (title: string) => {
    setCardCollapse(title);
  };

  const toggleAddingExp = () => {
    setAddingExp(!addingExp);
  };

  const toggleAddingEdu = () => {
    setAddingEdu(!addingEdu);
  };

  const toggleEditMode = (index: number | null = null) => {
    setEditMode({
      active: !editMode.active,
      index,
    });
  };

  const toggleEditModeEdu = (index: number | null = null) => {
    setEditModeEdu({
      active: !editModeEdu.active,
      index,
    });
  };

  const editing = (data: FieldsData) => {
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

  const addExpItem = (item: ExperienceItem) => {
    setUpdateExp((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item];
    });
  };

  const addEduItem = (item: EducationItem) => {
    setUpdateEdu((prevData) => {
      if (!Array.isArray(prevData)) return [item];
      return [...prevData, item];
    });
  };

  const updateExpItem = (item: ExperienceItem, index: number) => {
    setUpdateExp((prevData) => {
      if (!prevData) return null;
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    });
  };

  const updateEduItem = (item: EducationItem, index: number) => {
    setUpdateEdu((prevData) => {
      if (!prevData) return null;
      const eduData = [...prevData];
      eduData[index] = item;
      return eduData;
    });
  };

  const delExpItem = (index: number) => {
    if (!updateExp) return;
    const tempArr = [...updateExp];
    tempArr.splice(index, 1);
    setUpdateExp(tempArr);
  };

  const delEduItem = (index: number) => {
    if (!updateEdu) return;
    const tempArr = [...updateEdu];
    tempArr.splice(index, 1);
    setUpdateEdu(tempArr);
  };

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            title="Skills"
            svg={svgSkills}
            component={Skills}
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
                pdfContent?.classList.add("print-pdf");
                generatePDF(pdfTarget, pdfOptions);
                pdfContent?.classList.remove("print-pdf");
              }}
            >
              PDF {svgDownload}
            </button>
          </div>
        </div>
      </main>
      <footer>
        {svgGithub}{" "}
        <a href="https://github.com/maurolps/cv-application">maurolps</a>
      </footer>
    </>
  );
}

export default App;

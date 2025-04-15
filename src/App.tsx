import { Header } from "./components/Header";
import { Personal } from "./components/Personal";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { LoadCard } from "./components/LoadCard";
import { Preview } from "./components/Preview";
import { Skills } from "./components/Skills";
import generatePDF from "react-to-pdf";
import {
  svgPersonal,
  svgExp,
  svgEdu,
  svgDownload,
  svgSkills,
  svgGithub,
} from "./components/Svgs";
import "./App.css";
import { PdfOptions } from "@Types/app";

import useAppStore from "./store/useAppStore";

const pdfOptions: PdfOptions = {
  method: "open",
};

function App() {
  const {
    cardCollapse,
    fieldsData,
    updateExp,
    addingExp,
    editMode,
    updateEdu,
    addingEdu,
    editModeEdu,
    toggleCards,
    inputChange,
    toggleAddingExp,
    toggleAddingEdu,
    toggleEditMode,
    toggleEditModeEdu,
    editFields,
    resetDraft,
    addExpItem,
    addEduItem,
    updateExpItem,
    updateEduItem,
    delExpItem,
    delEduItem,
  } = useAppStore(); // avoid destructuring the entire store, can cause unnecessary re-renders.

  return (
    <>
      <main>
        <div className="container">
          <header>
            <Header />
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
            editing={editFields}
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
            editing={editFields}
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

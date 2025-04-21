import "../styles/header.css";
import React from "react";
import DarkMode from "./DarkMode";
import { svgAutofill, svgTrash } from "./Svgs";
import { exampleData, expData, eduData } from "./Data";
import useAppStore from "../store/useAppStore";

export const Header = () => {
  const resetStore = useAppStore((s) => s.resetStore);
  const updateFields = useAppStore((s) => s.updateFieldData);
  const editSections = useAppStore((s) => s.editSection);
  const setProfileImage = useAppStore((s) => s.setProfileImage);

  const handleAutoFill = () => {
    setProfileImage("/assets/john-doe.png");
    updateFields("fieldsData", exampleData);
    expData.forEach((item) => {
      editSections("experience", "add", item);
    });
    eduData.forEach((item) => {
      editSections("education", "add", item);
    });
  };

  const handleClearData = () => {
    resetStore();
  };

  const svgTrashWhite = React.cloneElement(svgTrash, {
    style: { fill: "#fdfdfd" },
  });

  return (
    <>
      <div className="logo">
        <p>CV APP</p>
        <DarkMode />
      </div>
      <div className="card-actions">
        <button
          className="btn-autofill"
          onClick={() => {
            handleClearData();
            handleAutoFill();
          }}
        >
          Auto Fill {svgAutofill}
        </button>
        <button
          onClick={() => {
            handleClearData();
          }}
        >
          {svgTrashWhite}
        </button>
      </div>
    </>
  );
};

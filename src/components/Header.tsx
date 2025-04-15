import "../styles/header.css";
import React, { FC } from "react";
import DarkMode from "./DarkMode";
import { svgAutofill, svgTrash } from "./Svgs";
import { exampleData, expData, eduData } from "./Data";
import useAppStore from "../store/useAppStore";

export const Header = () => {
  const editFields = useAppStore((s) => s.editFields);
  const addExpItem = useAppStore((s) => s.addExpItem);
  const addEduItem = useAppStore((s) => s.addEduItem);
  const resetStore = useAppStore((s) => s.resetStore);

  const handleAutoFill = () => {
    setTimeout(() => {
      const profileImg = document.getElementById(
        "profile-img"
      ) as HTMLImageElement;
      if (profileImg) {
        profileImg.src = "/assets/john-doe.png";
      }
    }, 50);
    editFields(exampleData);
    expData.forEach((item) => {
      addExpItem(item);
    });
    eduData.forEach((item) => {
      addEduItem(item);
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

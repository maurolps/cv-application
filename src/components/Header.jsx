import "../styles/header.css";
import React from "react";
import DarkMode from "./DarkMode";
import { svgAutofill, svgTrash } from "./Svgs";
import { defaultData, exampleData, expData, eduData } from "./Data";
import PropTypes from "prop-types";

Header.propTypes = {
  setFieldsData: PropTypes.func,
  setUpdateExp: PropTypes.func,
  setUpdateEdu: PropTypes.func,
  setAddingExp: PropTypes.func,
  setAddingEdu: PropTypes.func,
};

export function Header(props) {
  const {
    setFieldsData,
    setUpdateExp,
    setUpdateEdu,
    setAddingExp,
    setAddingEdu,
  } = props;

  const handleAutoFill = () => {
    setTimeout(() => {
      const profileImg = document.getElementById("profile-img");
      if (profileImg) {
        profileImg.src = "/assets/john-doe.png";
      }
    }, 50);
    setFieldsData(exampleData);
    setUpdateExp(expData);
    setUpdateEdu(eduData);
  };

  const handleClearData = () => {
    setFieldsData(defaultData);
    setAddingExp(false);
    setAddingEdu(false);
    setUpdateExp(null);
    setUpdateEdu(null);
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
}

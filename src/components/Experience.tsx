import { LoadFields } from "./LoadFields";
import { ExperienceItem } from "@Types/app";
import useAppStore from "../store/useAppStore";
import { svgAdd, svgEdit, svgTrash } from "./Svgs";
import React from "react";

export function Experience() {
  const experienceItems = useAppStore((s) => s.sections.experience.items);
  const adding = useAppStore((s) => s.sections.experience.adding);
  const editMode = useAppStore((s) => s.sections.experience.editMode);
  const fieldsData = useAppStore((s) => s.fieldsData);
  const editSection = useAppStore((s) => s.editSection);
  const resetDraft = useAppStore((s) => s.resetDraft);
  const updateFieldData = useAppStore((s) => s.updateFieldData);

  const svgTrashBlack = React.cloneElement(svgTrash, {
    fill: "#bbb",
    width: "15px",
  });

  const inputs = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  const handleCancelAdding = () => {
    editSection("experience", "toggleAdding", {});
    editSection("experience", "toggleEditMode", {});
    resetDraft();
  };

  const handleAcceptAdding = () => {
    if (editMode.active) {
      editSection("experience", "update", fieldsData, editMode.index);
    } else {
      editSection("experience", "add", fieldsData, null);
    }
    handleCancelAdding();
  };

  const handleEditItem = (index: number) => {
    updateFieldData("fieldsData", experienceItems[index]);
    editSection("experience", "toggleEditMode", {}, index);
    editSection("experience", "toggleAdding", {});
  };

  const handleDeleteItem = (index: number) => {
    editSection("experience", "delete", {}, index);
  };

  const handleAddItem = () => {
    editMode.active && editSection("experience", "toggleEditMode", {});
    editSection("experience", "toggleAdding", {});
  };

  return (
    <>
      {adding && (
        <>
          <LoadFields inputList={inputs} />
          <div className="card-actions btn-actions">
            <button
              className="btn-cancel"
              onClick={() => {
                handleCancelAdding();
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => {
                handleAcceptAdding();
              }}
            >
              {editMode.active ? <>Update</> : <>Add</>}
            </button>
          </div>
        </>
      )}

      {!adding && (
        <>
          <div className="exp-item-container">
            {experienceItems.map(
              (experience: ExperienceItem, index: number) => (
                <div className="exp-item" key={index}>
                  <div>
                    <div>
                      {experience["position-title"] || experience["degree"]}
                    </div>
                    <div className="exp-item-date">
                      {experience["company-name"] || experience["school"]} |{" "}
                      {experience["start-date"] || experience["start"]} -{" "}
                      {experience["end-date"] || experience["end"]}
                    </div>
                  </div>
                  <div className="exp-item-btn">
                    <button
                      onClick={() => {
                        handleEditItem(index);
                      }}
                    >
                      {svgEdit}
                    </button>
                    <button
                      aria-label="Remove item"
                      onClick={() => {
                        handleDeleteItem(index);
                      }}
                    >
                      {svgTrashBlack}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
          <div className="btn-add">
            <button
              onClick={() => {
                handleAddItem();
              }}
            >
              {svgAdd}{" "}
            </button>
          </div>
        </>
      )}
    </>
  );
}

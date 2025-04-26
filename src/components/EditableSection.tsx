import { LoadFields } from "./LoadFields";
import { ExperienceItem, EducationItem, TechStackItem } from "@Types/app";
import useAppStore from "../store/useAppStore";
import { svgAdd, svgEdit, svgTrash } from "./Svgs";
import React from "react";

type EditableSectionProps = {
  section: "experience" | "education" | "techstack";
  inputs: string[];
};

export function EditableSection({ section, inputs }: EditableSectionProps) {
  const editableItems = useAppStore((s) => s.sections[section].items);
  const adding = useAppStore((s) => s.sections[section].adding);
  const editMode = useAppStore((s) => s.sections[section].editMode);
  const fieldsData = useAppStore((s) => s.fieldsData);
  const editSection = useAppStore((s) => s.editSection);
  const resetDraft = useAppStore((s) => s.resetDraft);
  const updateFieldData = useAppStore((s) => s.updateFieldData);

  const svgTrashBlack = React.cloneElement(svgTrash, {
    fill: "#bbb",
    width: "15px",
  });

  const handleCancelAdding = () => {
    editSection(section, "toggleAdding", {});
    editMode.active && editSection(section, "toggleEditMode", {});
    resetDraft();
  };

  const handleAcceptAdding = () => {
    if (editMode.active) {
      editSection(section, "update", fieldsData, editMode.index);
    } else {
      editSection(section, "add", fieldsData, null);
    }
    handleCancelAdding();
  };

  const handleEditItem = (index: number) => {
    updateFieldData("fieldsData", editableItems[index]);
    editSection(section, "toggleEditMode", {}, index);
    editSection(section, "toggleAdding", {});
  };

  const handleDeleteItem = (index: number) => {
    editSection(section, "delete", {}, index);
  };

  const handleAddItem = () => {
    editMode.active && editSection(section, "toggleEditMode", {});
    editSection(section, "toggleAdding", {});
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
            {editableItems.map(
              (
                item: ExperienceItem | EducationItem | TechStackItem,
                index: number
              ) => (
                <div className="exp-item" key={index}>
                  <div>
                    <div>
                      {item["position-title"] ||
                        item["degree"] ||
                        item["tech-title"]}
                    </div>
                    <div className="exp-item-date">
                      {item["company-name"] ||
                        item["school"] ||
                        item["tech-content"]}{" "}
                      | {item["start-date"] || item["start"]} -{" "}
                      {item["end-date"] || item["end"]}
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

import { svgArrowDown, svgArrowUp } from "./Svgs";
import React from "react";
import "../styles/loadCard.css";
import { svgAdd, svgTrash, svgEdit } from "./Svgs";
import { LoadCardProps } from "../types/loadcard";
import { ExperienceItem } from "../types";

export function LoadCard(props: LoadCardProps) {
  const svgTrashBlack = React.cloneElement(svgTrash, {
    fill: "#bbb",
    width: "15px",
  });

  return (
    <div className="card">
      <div
        className="card-title"
        onClick={() => {
          props.collapse === props.title
            ? props.toggle("")
            : props.toggle(props.title);
        }}
      >
        <div className="card-svg">
          {props.svg}
          <p>{props.title}</p>
        </div>
        <p>{props.collapse === props.title ? svgArrowUp : svgArrowDown}</p>
      </div>

      {props.collapse === props.title && (
        <>
          {props.title === "Personal Details" && (
            <>
              <props.component
                inputChange={props.inputChange}
                update={props.update}
              />
            </>
          )}

          {props.title === "Skills" && (
            <>
              <props.component
                inputChange={props.inputChange}
                update={props.update}
              />
            </>
          )}

          {(props.title === "Education" ||
            props.title === "Work Experience") && (
            <>
              {props.adding && (
                <>
                  <props.component
                    inputChange={props.inputChange}
                    update={props.fieldsData || {}}
                  />
                  <div className="card-actions btn-actions">
                    <button
                      className="btn-cancel"
                      onClick={() => {
                        props.toggleAdding?.();
                        props.editMode?.active && props.toggleEdit?.();
                        props.resetDraft?.();
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        if (props.editMode?.active) {
                          props.updateItem?.(
                            props.fieldsData || {},
                            props.editMode.index || 0
                          );
                        } else {
                          props.addItem?.(props.fieldsData || {});
                        }
                        props.toggleAdding?.();
                        props.editMode?.active && props.toggleEdit?.();
                        props.resetDraft?.();
                      }}
                    >
                      {props.editMode?.active ? <>Update</> : <>Add</>}
                    </button>
                  </div>
                </>
              )}

              {!props.adding && (
                <>
                  {props.update !== null && (
                    <div className="exp-item-container">
                      {props.update.map(
                        (experience: ExperienceItem, index: number) => (
                          <div className="exp-item" key={index}>
                            <div>
                              <div>
                                {experience["position-title"] ||
                                  experience["degree"]}
                              </div>
                              <div className="exp-item-date">
                                {experience["company-name"] ||
                                  experience["school"]}{" "}
                                |{" "}
                                {experience["start-date"] ||
                                  experience["start"]}{" "}
                                - {experience["end-date"] || experience["end"]}
                              </div>
                            </div>
                            <div className="exp-item-btn">
                              <button
                                onClick={() => {
                                  props.editing?.(experience);
                                  props.toggleEdit?.(index);
                                  props.toggleAdding?.();
                                }}
                              >
                                {svgEdit}
                              </button>
                              <button
                                onClick={() => {
                                  props.delItem?.(index);
                                }}
                              >
                                {svgTrashBlack}
                              </button>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}
                  <div className="btn-add">
                    <button
                      onClick={() => {
                        props.editMode?.active && props.toggleEdit?.();
                        props.toggleAdding?.();
                      }}
                    >
                      {svgAdd}{" "}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

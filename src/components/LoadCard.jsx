import { svgArrowDown, svgArrowUp } from "../assets/svgs"
import React from "react";
import '../styles/loadCard.css'
import { svgAdd, svgTrash, svgEdit } from "../assets/svgs";

export function LoadCard(props) {
  const svgTrashBlack = React.cloneElement(svgTrash, { fill: "#bbb", width: "15px" });

  return (
    <div className="card">
      <div className="card-title" onClick={() => {
        props.collapse == props.title ? props.toggle('') : props.toggle(props.title);
        }}>
        <div className="card-svg">
          {props.svg}<p>{props.title}</p>
        </div>
        <p>{props.collapse == props.title ? svgArrowUp : svgArrowDown}</p>
      </div>

      { props.collapse == props.title && (
        <>

          {props.title === "Personal Details" && (
            <>
                <props.component inputChange={props.inputChange} update={props.update} />
            </>
          )}

          {props.title === "Work Experience" && (
            <>
            
              {props.adding && (
                <>
                  <props.component inputChange={props.inputChange} update={props.fieldsData} />
                  <div className="card-actions btn-actions">
                  <button className="btn-cancel" onClick={() => {

                      {
                        props.toggleAdding();
                        props.editMode && props.toggleEdit();
                        props.resetDraft();
                      }
                    }}>Cancel</button>
                    <button onClick={() => {
                      {
                        props.editMode.active ? (
                          props.updateItem({
                            ["company-name"]: props.fieldsData["company-name"],
                            ["position-title"]: props.fieldsData["position-title"],
                            ["start-date"]: props.fieldsData["start-date"],
                            ["end-date"]: props.fieldsData["end-date"],
                            ["location"]: props.fieldsData.location,
                            ["description"]: props.fieldsData.description,
                          }, props.editMode.index)                          
                          ) : (
                            props.addExp({
                              ["company-name"]: props.fieldsData["company-name"],
                              ["position-title"]: props.fieldsData["position-title"],
                              ["start-date"]: props.fieldsData["start-date"],
                              ["end-date"]: props.fieldsData["end-date"],
                              ["location"]: props.fieldsData.location,
                              ["description"]: props.fieldsData.description,
                            })
                            
                            )
                        props.toggleAdding();
                        props.editMode.active && props.toggleEdit();
                        props.resetDraft();
                      }
                    }}>{props.editMode.active ? (<>Update</>) : (<>Add</>)}</button>
                  </div>
                </>                
              )}  

              {!props.adding && (
                <>
                  {
                    props.update !== null && (
                      <div className="exp-item-container">
                        {
                          props.update.map((experience, index) => {
                            return (
                              <>
                                <div className="exp-item">
                                  <div>
                                    <div>
                                      {experience["position-title"]}
                                    </div>
                                    <div className="exp-item-date">
                                      {experience["company-name"]} | {experience["start-date"]} - {experience["end-date"]}
                                    </div>
                                  </div>
                                  <div className="exp-item-btn">
                                    <button onClick={() => {
                                      props.editing(experience);
                                      props.toggleEdit(index);
                                      props.toggleAdding();                                      
                                    }}>{svgEdit}</button>
                                    <button onClick={() => {
                                      props.delExp(index);
                                    }}>{svgTrashBlack}</button>
                                  </div>
                                </div>
                              </>
                            )
                          })
                        }
                      </div>
                    )
                  }
                  <div className="btn-add">
                    <button onClick={() => {
                      {props.toggleAdding()}
                    }}>{svgAdd} </button>
                  </div>
                </>
              )}
            </>
          )}
          
        </>
        )}
    </div>
  )
}
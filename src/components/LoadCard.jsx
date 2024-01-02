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
                <div className="action">
                  <button>Clear</button>
                </div>
            </>
          )}

          {props.title === "Work Experience" && (
            <>
            
              {props.adding && (
                <>
                  <props.component inputChange={props.inputChange} update={props.update} />
                  <div className="card-actions btn-actions">
                  <button className="btn-cancel" onClick={() => {
                      {props.toggleAdding()}
                    }}>Cancel</button>
                    <button onClick={() => {
                      {props.addExp({
                        ["company-name"]: "You should move this code to Exp Component!"
                      })}
                      {props.toggleAdding()}
                    }}>Add</button>
                  </div>
                </>                
              )}  

              {!props.adding && (
                <>
                  <div className="exp-item-container">
                    {
                      props.update.map((experience) => {
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
                                <button>{svgEdit}</button><button>{svgTrashBlack}</button>
                              </div>
                            </div>
                          </>
                        )
                      })
                    }
                  </div>
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
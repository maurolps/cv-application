import { svgEdu, svgExp, svgTrash } from "../assets/svgs";
import React from "react";
import "../styles/preview.css"

export function Preview(props) {
  const { update } = props;
  const svgEduBlack = React.cloneElement(svgEdu, { fill: "black" });
  const svgExpBlack = React.cloneElement(svgExp, { fill: "black" });

  return (
    <div className="preview">
      <div className="preview-info">
        <p>Preview</p>
      </div>
      {update["full-name"] == "" ? null : (
        <div className="preview-main">
          <div className="personal-details grid">
            <div>
              <div className="prev-image">
                <span className="prev-logo-text">{update["full-name"]}</span>
              </div>
            </div>
            <div className="prev-profile">
              <div className="prev-name">
                <h1>{update["full-name"]}</h1>
                <span>FullStack Web developer</span>
              </div>
              <div className="prev-contact">
                <span>{update["phone-number"]}</span>
                <span>{update.email}</span>
                <span>{update.address}</span>
              </div>
            </div>
          </div>

          <div className="prev-section grid">
            <div className="section-title">{svgExpBlack} Work Experience</div>
          </div>

          <div className="work-experience grid">
            <div>
              <div className="prev-title">{update["position-title"]}</div>
              <div className="prev-date"> {update["start-date"]} - {update["end-date"]}</div>
            </div>
            <div>
              <div className="prev-location">{update["company-name"]} - {update.location}</div>
              <div className="prev-description">{update.description}</div>
            </div>
          </div>

          <div className="prev-section grid">
            <div className="section-title">{svgEduBlack} Education</div>
          </div>
          <div className="education grid">
            <div>
              <div className="prev-title">{update.degree}</div>
              <div className="prev-date"> {update.start} - {update.end} </div>
            </div>
            <div>
              <div className="prev-location">{update.school} - {update.region}</div>
              <div className="prev-description"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
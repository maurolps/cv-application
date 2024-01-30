import { svgEdu, svgExp } from "../assets/svgs";
import { ProfileImage } from "./ProfileImage";
import React from "react";
import "../styles/preview.css";
import proptypes from "prop-types";

Preview.propTypes = {
  update: proptypes.object,
  updateExp: proptypes.array,
  updateEdu: proptypes.array,
  editMode: proptypes.object,
  editModeEdu: proptypes.object,
};

export function Preview(props) {
  const { update, updateExp, updateEdu } = props;
  const svgEduBlack = React.cloneElement(svgEdu, {
    style: { fill: "var(--text-color" },
  });
  const svgExpBlack = React.cloneElement(svgExp, {
    style: { fill: "var(--text-color" },
  });

  return (
    <div className="preview">
      <div className="preview-info">
        <p>Preview</p>
      </div>
      {(update["name"] !== "" || update["company-name"] !== "") && (
        <div className="preview-main" id="pdf-content">
          <div className="personal-details grid">
            <div>
              <div className="prev-image">
                <ProfileImage />
              </div>
            </div>
            <div className="prev-profile">
              <div className="prev-name">
                <h1>{update["name"]}</h1>
                <span>{update["p-description"]}</span>
              </div>
              <div className="prev-contact">
                <span>{update["phone-number"]}</span>
                <span>{update.email}</span>
                <span>{update.address}</span>
              </div>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgExpBlack}Experience</div>
            </div>
            {updateExp !== null &&
              updateExp.map((experience) => {
                return (
                  <>
                    <div className="work-experience grid">
                      <div>
                        <div className="prev-title">
                          {experience["position-title"]}
                        </div>
                        <div className="prev-date">
                          {experience["start-date"]} - {experience["end-date"]}
                        </div>
                      </div>
                      <div>
                        <div className="prev-location">
                          {experience["company-name"]} - {experience.location}
                        </div>
                        <div className="prev-description">
                          {experience.description}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            {!props.editMode.active &&
              (update["company-name"] != null ? (
                <div className="work-experience grid prev-draft">
                  <div>
                    <div className="prev-title">{update["position-title"]}</div>
                    <div className="prev-date">
                      {update["start-date"]} - {update["end-date"]}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {update["company-name"]} - {update.location}
                    </div>
                    <div className="prev-description">{update.description}</div>
                  </div>
                </div>
              ) : (
                ""
              ))}
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgEduBlack} Education</div>
            </div>
            {updateEdu !== null &&
              updateEdu.map((experience) => {
                return (
                  <>
                    <div className="education grid">
                      <div>
                        <div className="prev-title">{experience.degree}</div>
                        <div className="prev-date">
                          {experience.start} - {experience.end}
                        </div>
                      </div>
                      <div>
                        <div className="prev-location">
                          {experience.school} - {experience.region}
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            {!props.editModeEdu.active &&
              (update.school != null ? (
                <div className="education grid prev-draft">
                  <div>
                    <div className="prev-title">{update.degree}</div>
                    <div className="prev-date">
                      {update.start} - {update.end}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {update.school} - {update.region}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

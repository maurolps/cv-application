import { svgEdu, svgExp } from "./Svgs";
import { ProfileImage } from "./ProfileImage";
import React from "react";
import "../styles/preview.css";
import useAppStore from "../store/useAppStore";

function parseSkills(skills: string): string[] {
  return skills
    .split(",")
    .map((skill) => skill.trim())
    .filter((skill) => skill !== "");
}

export function Preview() {
  const update = useAppStore((s) => s.fieldsData);
  const updateExp = useAppStore((s) => s.sections.experience.items);
  const updateEdu = useAppStore((s) => s.sections.education.items);
  const editMode = useAppStore((s) => s.sections.experience.editMode);
  const editModeEdu = useAppStore((s) => s.sections.education.editMode);

  const skillsInput = update.skills || "";
  const skills: string[] = skillsInput ? parseSkills(skillsInput) : [];

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
          <div className="section-wrapper">
            <div className="personal-details grid">
              <div className="prev-image-wrapper">
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
            <div className="skill-list">
              <ul>
                {skills !== null &&
                  skills.map((skill, index) => {
                    return <li key={"skill" + index}>{skill}</li>;
                  })}
              </ul>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgExpBlack}Experience</div>
            </div>
            {updateExp !== null &&
              updateExp.map((experience, index) => (
                <div className="work-experience grid" key={index}>
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
              ))}
            {!editMode.active && update["company-name"] != null && (
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
            )}
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgEduBlack} Education</div>
            </div>
            {updateEdu !== null &&
              updateEdu.map((experience, index) => (
                <div className="education grid" key={index}>
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
              ))}
            {!editModeEdu.active && update.school != null && (
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
            )}
          </div>
        </div>
      )}
    </div>
  );
}

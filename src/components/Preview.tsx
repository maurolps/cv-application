import { svgEdu, svgExp, svgTechStack } from "./Svgs";
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
  const updateTech = useAppStore((s) => s.sections.techstack.items);
  const editModeExp = useAppStore((s) => s.sections.experience.editMode);
  const editModeEdu = useAppStore((s) => s.sections.education.editMode);
  const editModeTech = useAppStore((s) => s.sections.techstack.editMode);

  const skillsInput = update.skills || "";
  const skills: string[] = skillsInput ? parseSkills(skillsInput) : [];

  const svgEduBlack = React.cloneElement(svgEdu, {
    style: { fill: "var(--text-color" },
  });
  const svgExpBlack = React.cloneElement(svgExp, {
    style: { fill: "var(--text-color" },
  });
  const svgTechStackBlack = React.cloneElement(svgTechStack, {
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
            <div className="personal-details grid-header">
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
            <div className="prev-summary">
              <h2>Summary</h2>
              <p>
                I'm a Full stack web developer that enhance user interfaces for
                web applications, collaborate with UX/UI designers to implement
                visually appealing and responsive designs, optimize website
                performance, and ensure a seamless user experience.
              </p>
            </div>
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgExpBlack}Work Experience</div>
            </div>
            {updateExp !== null &&
              updateExp.map((experience, index) => (
                <div className="work-experience grid" key={index}>
                  <div>
                    <div className="prev-title">
                      {experience["position-title"]}
                    </div>
                    <div className="prev-date">
                      {experience["start-date"]}
                      {experience["start-date"] ? "-" : ""}
                      {experience["end-date"]}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {experience["company-name"]}
                      {experience["company-name"] ? "-" : ""}
                      {experience.location}
                    </div>
                    <div className="prev-description">
                      {experience.description}
                    </div>
                  </div>
                </div>
              ))}
            {editModeExp.active && update["company-name"] && (
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
                      {experience.start} {experience.start ? "-" : ""}{" "}
                      {experience.end}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {experience.school} {experience.school ? "-" : ""}{" "}
                      {experience.region}
                    </div>
                  </div>
                </div>
              ))}
            {editModeEdu.active && update.school && (
              <div className="education grid prev-draft">
                <div>
                  <div className="prev-title">{update.degree}</div>
                  <div className="prev-date">
                    {update.start} - {update.end}
                  </div>
                </div>
                <div>
                  <div className="prev-location">
                    {update.school} -{update.school} {update.region}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgTechStackBlack} Techstack</div>
            </div>
            {updateTech !== null &&
              updateTech.map((stack, index) => (
                <div className="grid" key={index}>
                  <div>
                    <div className="prev-title">{stack["tech-title"]}</div>
                  </div>
                  <div>
                    <div className="prev-location">{stack["tech-content"]}</div>
                  </div>
                </div>
              ))}
            {editModeTech.active && update.school && (
              <div className=" grid prev-draft">
                <div>
                  <div className="prev-title">{update.degree}</div>
                </div>
                <div>
                  <div className="prev-location">{update.school}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

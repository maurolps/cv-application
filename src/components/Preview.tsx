import { svgEdu, svgExp, svgTechStack } from "./Svgs";
import { ProfileImage } from "./ProfileImage";
import React from "react";
import "../styles/preview.css";
import useAppStore from "../store/useAppStore";

function parseSkills(skills: string): string[] {
  return skills.split(",");
}

function DescriptionList({
  description,
  listItem = true,
}: {
  description: string;
  listItem?: boolean;
}) {
  const parsedDescription = description.split("\n");

  if (listItem) {
    return (
      <ul>
        {parsedDescription.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {parsedDescription.map((desc, index) => (
        <span key={index}>{desc}</span>
      ))}
    </div>
  );
}

const ContactPhone = ({ phoneNumber }: { phoneNumber: string | null }) => {
  const isWhatsapp = phoneNumber?.endsWith("w");

  if (!isWhatsapp) return <span>{phoneNumber}</span>;

  const number = phoneNumber?.substring(0, phoneNumber?.length - 1);

  return (
    <div className="prev-phone">
      <img src="/assets/prev-whatsapp.png" alt="WhatsApp" />
      <span>{number}</span>
    </div>
  );
};

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
                  {update["p-description"] && (
                    <DescriptionList
                      description={update["p-description"]}
                      listItem={false}
                    />
                  )}
                </div>
                <div className="prev-contact">
                  <ContactPhone phoneNumber={update["phone-number"]} />
                  <span>{update.email}</span>
                  <span>{update.social}</span>
                  <span>{update.portfolio}</span>
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
            {update["summary"] && (
              <div className="prev-summary">
                <h2>Summary</h2>
                <p>{update["summary"]}</p>
              </div>
            )}
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
                      {experience["start-date"] ? " - " : ""}
                      {experience["end-date"]}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {experience["company-name"]}
                      {experience["company-name"] ? " - " : ""}
                      {experience.location}
                    </div>
                    <div className="prev-description">
                      {experience.description && (
                        <DescriptionList description={experience.description} />
                      )}
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
                  <div className="prev-description">
                    {update.description && (
                      <DescriptionList description={update.description} />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="section-wrapper">
            <div className="prev-section grid">
              <div className="section-title">{svgEduBlack} Education</div>
            </div>
            {updateEdu !== null &&
              updateEdu.map((education, index) => (
                <div className="education grid" key={index}>
                  <div>
                    <div className="prev-title">{education.degree}</div>
                    <div className="prev-date">
                      {education.start} {education.start ? " - " : ""}
                      {education.end}
                    </div>
                  </div>
                  <div>
                    <div className="prev-location">
                      {education.school} {education.school ? " - " : ""}
                      {education.region}
                    </div>
                    <div className="prev-description">
                      {education.description && (
                        <DescriptionList description={education.description} />
                      )}
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
                  <div className="prev-description">
                    {update.description && (
                      <DescriptionList description={update.description} />
                    )}
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

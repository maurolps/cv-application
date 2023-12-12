import { svgEdu, svgExp } from "../assets/svgs";
import "../styles/preview.css"

export function Preview(props) {
  const { update } = props;

  return (
    <div className="preview">
      <div className="preview-info">
        <p>Preview</p>
      </div>
      <div className="preview-main">
        <div className="personal-details grid">
          <div>
            <div className="prev-image">J</div>
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
          <div className="section-title">{svgExp} Work Experience</div>
        </div>

        <div className="work-experience grid">
          <div>
            <div className="prev-title">{update["position-title"]}</div>
            <div className="prev-date"> {update["start-date"]} - {update["end-date"]}</div>
          </div>
          <div>
            <div className="prev-location">{update.location}</div>
            <div className="prev-description">{update.description}</div>
          </div>
        </div>

        <div className="prev-section grid">
          <div className="section-title">{svgEdu} Education</div>
        </div>
        <div className="education grid">
          <div>
            <div className="prev-title">{update.degree}</div>
            <div className="prev-date"> {update.start} - {update.end} </div>
          </div>
          <div>
            <div className="prev-location">{update.region}</div>
            <div className="prev-description"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
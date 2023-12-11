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
              <h1>John Doe</h1>
              <span>FullStack Web developer</span>
            </div>
            <div className="prev-contact">
              <span>555-1234</span>
              <span>john.doe@example.com</span>
              <span>123 Main Street, Cityville, State, 12345</span>
            </div>
          </div>
        </div>

        <div className="prev-section grid">
          <div className="section-title">{svgExp} Work Experience</div>
        </div>

        <div className="work-experience grid">
          <div>
            <div className="prev-title">Senior<br />web developer</div>
            <div className="prev-date"> May 2017 - Present</div>
          </div>
          <div>
            <div className="prev-location">developers team - USA</div>
            <div className="prev-description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore?</div>
          </div>
        </div>

        <div className="work-experience grid">
          <div>
            <div className="prev-title">Senior<br />web developer</div>
            <div className="prev-date"> May 2017 - Present</div>
          </div>
          <div>
            <div className="prev-location">developers team - USA</div>
            <div className="prev-description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore?</div>
          </div>
        </div>

        <div className="prev-section grid">
          <div className="section-title">{svgEdu} Education</div>
        </div>
        <div className="education grid">
          <div>
            <div className="prev-title">Bachelor<br />Computer Science</div>
            <div className="prev-date"> Sep 2014 - May 2018</div>
          </div>
          <div>
            <div className="prev-location">UNIVERSITY of tech - Cityville State</div>
            <div className="prev-description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore?</div>
          </div>
        </div>
        <div className="education grid">
          <div>
            <div className="prev-title">Bachelor<br />Computer Science</div>
            <div className="prev-date"> Sep 2014 - May 2018</div>
          </div>
          <div>
            <div className="prev-location">UNIVERSITY of tech - Cityville State</div>
            <div className="prev-description"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore?</div>
          </div>
        </div>
      </div>
      {/* <h3>Personal Details</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'full-name' && text)}</p>
          <p>{(id == 'email' && text)}</p>
          <p>{(id == 'phone-number' && text)}</p>
          <p>{(id == 'address' && text)}</p>
        </>
      ))}
      <h3>Work Experience</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'company-name' && text)}</p>
          <p>{(id == 'position-title' && text)}</p>
          <p>{(id == 'start-date' && text)}</p>
          <p>{(id == 'end-date' && text)}</p>
          <p>{(id == 'location' && text)}</p>
          <p>{(id == 'description' && text)}</p>
        </>
      ))}

      <h3>Education</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'school' && text)}</p>
          <p>{(id == 'degree' && text)}</p>
          <p>{(id == 'start' && text)}</p>
          <p>{(id == 'end' && text)}</p>
          <p>{(id == 'region' && text)}</p>
        </>
      ))} */}
    </div>
  )
}
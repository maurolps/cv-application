import { svgArrowDown, svgArrowUp } from "../assets/svgs"
import '../styles/loadCard.css'

export function LoadCard(props) {

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
              <div><p>ADD</p></div>
            </>
          )}
          
        </>
        )}
    </div>
  )
}
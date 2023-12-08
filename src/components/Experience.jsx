import { LoadFields } from "./LoadFields"


export function Experience (props) {


  const inputs = ["Company Name", "Position Title", "Start Date", "End Date", "Location", "Description"];

  return <LoadFields inputList={inputs} inputChange={props.inputChange} update={props.update} />
}
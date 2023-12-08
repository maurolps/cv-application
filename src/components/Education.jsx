import { LoadFields } from "./LoadFields"

export function Education (props) {
  const inputs = ["School", "Degree", "Start", "End", "Region"];

  return <LoadFields inputList={inputs} inputChange={props.inputChange} update={props.update} />
}
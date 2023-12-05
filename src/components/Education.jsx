import { LoadFields } from "./LoadFields"

export function Education (props) {
  const inputs = ["School", "Degree", "Start", "End", "Location"];

  return <LoadFields inputList={inputs} inputChange={props.inputChange} />
}
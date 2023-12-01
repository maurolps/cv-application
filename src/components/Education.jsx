import { LoadFields } from "./LoadFields"

export function Education () {
  const inputs = ["School", "Degree", "Start", "End", "Location"];

  return <LoadFields inputList={inputs} />
}
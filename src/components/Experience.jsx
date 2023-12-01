import { LoadFields } from "./LoadFields"

export function Experience () {
  const inputs = ["Company Name", "Position Title", "Start Date", "End Date", "Location", "Description"];

  return <LoadFields inputList={inputs} />
}
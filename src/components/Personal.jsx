import { LoadFields } from "./LoadFields"

export function Personal () {
  const inputs = ["Full Name", "Email", "Phone Number", "Address"];

  return (
    <>
      <LoadFields inputList={inputs} />
    </>
  )
}
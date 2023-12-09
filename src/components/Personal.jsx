import { LoadFields } from "./LoadFields"

export function Personal (props) {
  const inputs = ["Full Name", "Email", "Phone Number", "Address"];  

  return (
  <>
    <LoadFields inputList={inputs}  inputChange={props.inputChange} update={props.update}/>
    <p><textarea name="personal-history" id="personaltext" cols="30" rows="8" 
        placeholder="<optional> Tell something about your history..."></textarea></p>
  </>
)
}
import { LoadFields } from "./LoadFields"

export function Personal (props) {
  const inputs = ["Full Name", "Email", "Phone Number", "Address"];  
  console.log('Personal: ', props);

  return <LoadFields inputList={inputs}  inputChange={props.inputChange} update={props.update}/>
}
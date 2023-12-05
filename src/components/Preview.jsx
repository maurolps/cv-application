// import { useState } from "react"

export function Preview(props) {
  // const [updateInfo, setUpdateInfo] = useState('');

  return (
    <>
      <p>Preview</p>
      <h3>Personal Details</h3>
      <p>{props.text}</p>
      <h3>Work Experience</h3>
      <h3>Education</h3>
    </>
  )
}
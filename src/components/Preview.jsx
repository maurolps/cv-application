export function Preview(props) {

  return (
    <>
      <p>Preview</p>
      <h3>Personal Details</h3>
      <p>{(props.update.id == 'full-name' && props.update.text) || 'Full Name'}</p>
      <p>{(props.update.id == 'email' && props.update.text)  || 'Email'}</p>
      <p>{(props.update.id == 'phone-number' && props.update.text) || 'Phone Number'}</p>
      <p>{(props.update.id == 'address' && props.update.text) || 'Address'}</p>
      <h3>Work Experience</h3>
      <h3>Education</h3>
    </>
  )
}
export function Preview(props) {

  const loadPreview = (id) => {
    const fieldText = document.getElementById(id)
    if ( fieldText !== null ) return fieldText.value;
  }

  return (
    <>
      <p>Preview</p>
      <h3>Personal Details</h3>
      <p>{(props.update.id == 'full-name' && props.update.text) || loadPreview('full-name')}&nbsp;</p>
      <p>{(props.update.id == 'email' && props.update.text)  || loadPreview('email')}&nbsp;</p>
      <p>{(props.update.id == 'phone-number' && props.update.text) || loadPreview('phone-number')}&nbsp;</p>
      <p>{(props.update.id == 'address' && props.update.text) || loadPreview('address')}&nbsp;</p>
      <h3>Work Experience</h3>
      <h3>Education</h3>
    </>
  )
}
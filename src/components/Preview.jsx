export function Preview(props) {
  const { update } = props;

  return (
    <>
      <div className="preview-info">
        <p>Preview</p>
      </div>
      <h3>Personal Details</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'full-name' && text)}</p>
          <p>{(id == 'email' && text)}</p>
          <p>{(id == 'phone-number' && text)}</p>
          <p>{(id == 'address' && text)}</p>
        </>
      ))}
      <h3>Work Experience</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'company-name' && text)}</p>
          <p>{(id == 'position-title' && text)}</p>
          <p>{(id == 'start-date' && text)}</p>
          <p>{(id == 'end-date' && text)}</p>
          <p>{(id == 'location' && text)}</p>
          <p>{(id == 'description' && text)}</p>
        </>
      ))}

      <h3>Education</h3>
      {Object.entries(update).map(([id, text]) => (
        <>
          <p>{(id == 'school' && text)}</p>
          <p>{(id == 'degree' && text)}</p>
          <p>{(id == 'start' && text)}</p>
          <p>{(id == 'end' && text)}</p>
          <p>{(id == 'region' && text)}</p>
        </>
      ))}
    </>
  )
}
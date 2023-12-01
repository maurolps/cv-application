export function LoadFields (props) {
  return (
    <>
      {
        props.inputList.map((inputName) => {
          const inputId = inputName.toLowerCase().replace(/\s+/g, "-");
          console.log(inputId);
          return (
            <>
              <label htmlFor={inputId}>{inputName}</label>
              <input type="text" id={inputId} name={inputId} key={inputId} />
            </>
          )
        })
      }
    </>
  )
}
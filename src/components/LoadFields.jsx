export function LoadFields (props) {

  console.log('loadfields: ', typeof(props.update));

  return (
    <div className="fields-container">
      {
        props.inputList.map((inputName) => {
          const inputId = inputName.toLowerCase().replace(/\s+/g, "-");
          return (
            <>
              <label htmlFor={inputId}>{inputName}</label>
              <input 
                type="text"
                id={inputId}
                onChange={props.inputChange}
                name={inputId}
                key={inputId}
                value={typeof(props.update) == 'object' ? props.update[inputId] : ""} 
              />
            </>
          )
        })
      }
    </div>
  )
}
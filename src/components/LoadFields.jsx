import propstypes from "prop-types";

LoadFields.propTypes = {
  inputList: propstypes.array,
  inputChange: propstypes.func,
  update: propstypes.object,
};

export function LoadFields(props) {
  return (
    <div className="fields-container">
      {props.inputList.map((inputName) => {
        const inputId = inputName.toLowerCase().replace(/\s+/g, "-");
        return (
          <>
            <label htmlFor={inputId}></label>
            <input
              type="text"
              id={inputId}
              placeholder={inputName}
              onChange={props.inputChange}
              name={inputId}
              key={inputId}
              value={
                typeof props.update == "object" ? props.update[inputId] : ""
              }
            />
          </>
        );
      })}
    </div>
  );
}

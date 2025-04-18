import useAppStore from "../store/useAppStore";

type LoadFieldsProps = {
  inputList: string[];
};

export function LoadFields(props: LoadFieldsProps) {
  const fieldsData = useAppStore((s) => s.fieldsData);
  const inputChange = useAppStore((s) => s.inputChange);

  return (
    <div className="fields-container">
      {props.inputList.map((inputName) => {
        const inputId = inputName.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={inputId}>
            <label htmlFor={inputId}></label>
            <input
              type="text"
              id={inputId}
              placeholder={inputName}
              onChange={inputChange}
              name={inputId}
              value={
                fieldsData &&
                typeof fieldsData == "object" &&
                fieldsData[inputId]
                  ? fieldsData[inputId]
                  : ""
              }
            />
          </div>
        );
      })}
    </div>
  );
}

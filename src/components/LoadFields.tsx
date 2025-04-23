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
            {inputId !== "description" ? (
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
            ) : (
              <textarea
                name={inputId}
                id={inputId}
                cols={30}
                rows={8}
                onChange={inputChange}
                value={
                  fieldsData &&
                  typeof fieldsData == "object" &&
                  fieldsData[inputId]
                    ? fieldsData[inputId]
                    : ""
                }
                placeholder={`• Add your description list here...\n• Add your description list here...`}
              ></textarea>
            )}
          </div>
        );
      })}
    </div>
  );
}

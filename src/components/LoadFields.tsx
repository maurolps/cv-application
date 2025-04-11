import { FieldsData } from "@Types/app";

type LoadFieldsProps = {
  inputList: string[];
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  update: FieldsData | null;
};

export function LoadFields(props: LoadFieldsProps) {
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
              onChange={props.inputChange}
              name={inputId}
              value={
                props.update &&
                typeof props.update == "object" &&
                props.update[inputId]
                  ? props.update[inputId]
                  : ""
              }
            />
          </div>
        );
      })}
    </div>
  );
}

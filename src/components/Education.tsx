import { LoadFields } from "./LoadFields";
import { FieldsData } from "@Types/app";

type EducationProps = {
  inputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  update: FieldsData;
};

export function Education(props: EducationProps) {
  const inputs = ["School", "Degree", "Start", "End", "Region"];

  return (
    <LoadFields
      inputList={inputs}
      inputChange={props.inputChange}
      update={props.update}
    />
  );
}

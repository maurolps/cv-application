import { LoadFields } from "./LoadFields";
import { FieldsData } from "../types";

type ExperienceProps = {
  inputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  update: FieldsData;
};

export function Experience(props: ExperienceProps) {
  const inputs = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  return (
    <LoadFields
      inputList={inputs}
      inputChange={props.inputChange}
      update={props.update}
    />
  );
}

import { LoadFields } from "./LoadFields";
import propstypes from "prop-types";

Experience.propTypes = {
  inputChange: propstypes.func,
  update: propstypes.object,
};

export function Experience(props) {
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

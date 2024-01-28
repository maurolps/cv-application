import { LoadFields } from "./LoadFields";
import prototypes from "prop-types";

Education.propTypes = {
  inputChange: prototypes.func,
  update: prototypes.object,
};

export function Education(props) {
  const inputs = ["School", "Degree", "Start", "End", "Region"];

  return (
    <LoadFields
      inputList={inputs}
      inputChange={props.inputChange}
      update={props.update}
    />
  );
}

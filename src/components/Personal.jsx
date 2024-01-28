import { LoadFields } from "./LoadFields";
import propstypes from "prop-types";

Personal.propTypes = {
  inputChange: propstypes.func,
  update: propstypes.object,
};

export function Personal(props) {
  const inputs = ["Name", "Email", "Phone Number", "Address"];

  return (
    <>
      <LoadFields
        inputList={inputs}
        inputChange={props.inputChange}
        update={props.update}
      />
      <textarea
        name="Personal Description"
        id="p-description"
        cols="30"
        rows="8"
        onChange={props.inputChange}
        value={
          typeof props.update == "object" ? props.update["p-description"] : ""
        }
        placeholder="<optional> Tell something about your history..."
      ></textarea>
    </>
  );
}

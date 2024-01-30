import propstypes from "prop-types";

Skills.propTypes = {
  inputChange: propstypes.func,
  update: propstypes.any,
};

export function Skills(props) {
  const { inputChange, update } = props;
  return (
    <>
      <textarea
        name="Skills"
        id="skills"
        cols="30"
        rows="8"
        onChange={inputChange}
        value={typeof update == "object" ? update["skills"] : ""}
        placeholder="HTML, CSS, JavaScript, React, Node.js..."
      ></textarea>
    </>
  );
}

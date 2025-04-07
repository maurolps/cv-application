import { FieldsData } from "../types";

type SkillsProps = {
  inputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  update: FieldsData;
};

export function Skills(props: SkillsProps) {
  const { inputChange, update } = props;
  return (
    <>
      <textarea
        name="Skills"
        id="skills"
        cols={30}
        rows={8}
        onChange={inputChange}
        value={
          update["skills"] && typeof update == "object" ? update["skills"] : ""
        }
        placeholder="HTML, CSS, JavaScript, React, Node.js..."
      ></textarea>
    </>
  );
}

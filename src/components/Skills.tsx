import useAppStore from "../store/useAppStore";

export function Skills() {
  const inputChange = useAppStore((s) => s.inputChange);
  const fieldsData = useAppStore((s) => s.fieldsData);
  return (
    <>
      <textarea
        name="Skills"
        id="skills"
        cols={30}
        rows={8}
        onChange={inputChange}
        value={fieldsData.skills || ""}
        placeholder="HTML, CSS, JavaScript, React, Node.js..."
      ></textarea>
    </>
  );
}

import { LoadFields } from "./LoadFields";
import useAppStore from "../store/useAppStore";

export function Personal() {
  const inputs = ["Name", "Email", "Phone Number", "Address", "p-description"];
  const fieldsData = useAppStore((s) => s.fieldsData);
  const inputChange = useAppStore((s) => s.inputChange);

  return (
    <>
      <LoadFields inputList={inputs} />
      <textarea
        name="Summary"
        id="summary"
        cols={30}
        rows={8}
        onChange={inputChange}
        value={fieldsData["summary"] || ""}
        placeholder="Tell something about your history..."
      ></textarea>
    </>
  );
}

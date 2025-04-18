import { LoadFields } from "./LoadFields";
import useAppStore from "../store/useAppStore";

export function Personal() {
  const inputs = ["Name", "Email", "Phone Number", "Address"];
  const fieldsData = useAppStore((s) => s.fieldsData);
  const inputChange = useAppStore((s) => s.inputChange);

  return (
    <>
      <LoadFields inputList={inputs} />
      <textarea
        name="Personal Description"
        id="p-description"
        cols={30}
        rows={8}
        onChange={inputChange}
        value={fieldsData["p-description"] || ""}
        placeholder="<optional> Tell something about your history..."
      ></textarea>
    </>
  );
}

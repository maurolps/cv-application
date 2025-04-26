import { LoadFields } from "./LoadFields";
import useAppStore from "../store/useAppStore";

export function Personal() {
  const inputs = [
    "Name",
    "Phone Number",
    "Email",
    "Social",
    "Portfolio",
    "Address",
  ];
  const fieldsData = useAppStore((s) => s.fieldsData);
  const inputChange = useAppStore((s) => s.inputChange);

  return (
    <>
      <LoadFields inputList={inputs} />
      <textarea
        name="p-description"
        id="p-description"
        cols={30}
        rows={3}
        onChange={inputChange}
        value={fieldsData["p-description"] || ""}
        placeholder={`FullStack Engineer \nReact | Node.js | Express | MongoDB`}
      ></textarea>
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

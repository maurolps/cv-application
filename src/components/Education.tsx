import { EditableSection } from "./EditableSection";

export function Education() {
  const inputs = ["School", "Degree", "Start", "End", "Region"];

  return <EditableSection section="education" inputs={inputs} />;
}

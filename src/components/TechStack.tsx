import { EditableSection } from "./EditableSection";

export function TechStack() {
  const inputs = ["Tech Title", "Tech Content"];

  return <EditableSection section="techstack" inputs={inputs} />;
}

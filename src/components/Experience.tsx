import { EditableSection } from "./EditableSection";

export function Experience() {
  const inputs = [
    "Company Name",
    "Position Title",
    "Start Date",
    "End Date",
    "Location",
    "Description",
  ];

  return <EditableSection section="experience" inputs={inputs} />;
}

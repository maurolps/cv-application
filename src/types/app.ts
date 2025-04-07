export type FieldsData = {
  [key: string]: string | null;
};

export type EditMode = {
  active: boolean;
  index: number | null;
};

export type CardSectionTitle =
  | "Personal Details"
  | "Skills"
  | "Work Experience"
  | "Education";

export type ExperienceItem = {
  [key: string]: string | null;
};

export type EducationItem = {
  [key: string]: string | null;
};
export type PdfOptions = {
  method: "open" | "save" | "build";
};

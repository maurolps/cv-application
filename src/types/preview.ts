type ExperienceItem = {
  "position-title"?: string;
  "start-date"?: string;
  "end-date"?: string;
  "company-name"?: string;
  location?: string;
  description?: string;
};

type EducationItem = {
  degree?: string;
  start?: string;
  end?: string;
  school?: string;
  region?: string;
};

type EditMode = {
  active: boolean;
  index: number | null;
};

export type PreviewProps = {
  update: Record<string, string | null>;
  updateExp: ExperienceItem[] | null;
  updateEdu: EducationItem[] | null;
  editMode: EditMode;
  editModeEdu: EditMode;
};

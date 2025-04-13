import {
  FieldsData,
  EditMode,
  ExperienceItem,
  EducationItem,
} from "@Types/app";

export type AppStore = {
  cardCollapse: string;
  fieldsData: FieldsData;
  updateExp: ExperienceItem[] | null;
  addingExp: boolean;
  editMode: EditMode;
  updateEdu: EducationItem[] | null;
  addingEdu: boolean;
  editModeEdu: EditMode;

  toggleCards: (title: string) => void;
  toggleAddingExp: () => void;
  toggleAddingEdu: () => void;
  toggleEditMode: (index?: number | null) => void;
  toggleEditModeEdu: (index?: number | null) => void;
  editing: (data: FieldsData) => void;
  resetDraft: () => void;
  addExpItem: (item: ExperienceItem) => void;
  addEduItem: (item: EducationItem) => void;
  updateExpItem: (item: ExperienceItem, index: number) => void;
  updateEduItem: (item: EducationItem, index: number) => void;
  delExpItem: (index: number) => void;
  delEduItem: (index: number) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

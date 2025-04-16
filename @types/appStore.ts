import {
  FieldsData,
  EditMode,
  ExperienceItem,
  EducationItem,
} from "@Types/app";

export type AppStore = {
  cardCollapse: string;
  fieldsData: FieldsData;
  sections: {
    experience: {
      items: ExperienceItem[];
      adding: boolean;
      editMode: EditMode;
    };
    education: {
      items: EducationItem[];
      adding: boolean;
      editMode: EditMode;
    };
  };

  resetStore: () => void;
  toggleField: (field: keyof AppStore) => void;
  updateFieldData: (field: keyof AppStore, data: any) => void;
  resetDraft: () => void;
  editSection: (
    section: "experience" | "education",
    action: string,
    item?: ExperienceItem | EducationItem,
    index?: number | null
  ) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

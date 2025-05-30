import {
  FieldsData,
  EditMode,
  ExperienceItem,
  EducationItem,
} from "@Types/app";

export type AppStore = {
  cardCollapse: string;
  fieldsData: FieldsData;
  profileImage: string;
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
    techstack: {
      items: EducationItem[];
      adding: boolean;
      editMode: EditMode;
    };
  };

  resetStore: () => void;
  setExpandedCard: (title: string) => void;
  toggleField: (field: keyof AppStore) => void;
  updateFieldData: (field: keyof AppStore, data: any) => void;
  loadProfileImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setProfileImage: (url: string) => void;
  resetDraft: () => void;
  editSection: (
    section: "experience" | "education" | "techstack",
    action: string,
    item?: ExperienceItem | EducationItem,
    index?: number | null
  ) => void;
  inputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

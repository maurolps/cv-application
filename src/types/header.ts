import { FieldsData, ExperienceItem, EducationItem } from "./app";

export type HeaderProps = {
  setFieldsData: React.Dispatch<React.SetStateAction<FieldsData>>;
  setUpdateExp: React.Dispatch<React.SetStateAction<ExperienceItem[] | null>>;
  setUpdateEdu: React.Dispatch<React.SetStateAction<EducationItem[] | null>>;
  setAddingExp: React.Dispatch<React.SetStateAction<boolean>>;
  setAddingEdu: React.Dispatch<React.SetStateAction<boolean>>;
};

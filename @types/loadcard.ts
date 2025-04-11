import { ChangeEvent } from "react";

export type LoadCardProps = {
  title: string;
  svg: JSX.Element;
  component: JSX.ElementType;
  toggle: (title: string) => void;
  collapse: string;
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  update: any;
  adding?: boolean;
  addItem?: (item: any) => void;
  delItem?: (index: number) => void;
  updateItem?: (item: any, index: number) => void;
  editing?: (data: any) => void;
  toggleEdit?: (index?: number | null) => void;
  editMode?: { active: boolean; index: number | null };
  fieldsData?: any;
  resetDraft?: () => void;
  toggleAdding?: () => void;
};

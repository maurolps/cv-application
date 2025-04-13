import { create } from "zustand";
import { AppStore } from "@Types/appStore";
import { defaultData } from "../components/Data";
import { FieldsData } from "@Types/app";

const useAppStore = create<AppStore>((set) => ({
  cardCollapse: "Personal Details",
  fieldsData: defaultData,
  updateExp: null,
  addingExp: false,
  editMode: { active: false, index: null },
  updateEdu: null,
  addingEdu: false,
  editModeEdu: { active: false, index: null },

  toggleCards: (title) => set({ cardCollapse: title }),
  toggleAddingExp: () => set((state) => ({ addingExp: !state.addingExp })),
  toggleAddingEdu: () => set((state) => ({ addingEdu: !state.addingEdu })),
  toggleEditMode: (index = null) =>
    set((state) => ({ editMode: { active: !state.editMode.active, index } })),
  toggleEditModeEdu: (index = null) =>
    set((state) => ({
      editModeEdu: { active: !state.editModeEdu.active, index },
    })),
  editing: (data) =>
    set((state) => ({ fieldsData: { ...state.fieldsData, ...data } })),
  resetDraft: () =>
    set((state) => ({
      fieldsData: {
        ...state.fieldsData,
        "company-name": null,
        "position-title": null,
        "start-date": null,
        "end-date": null,
        location: null,
        description: null,
        school: null,
        degree: null,
        start: null,
        end: null,
        region: null,
      },
    })),
  addExpItem: (item) =>
    set((state) => ({
      updateExp: state.updateExp ? [...state.updateExp, item] : [item],
    })),
  addEduItem: (item) =>
    set((state) => ({
      updateEdu: state.updateEdu ? [...state.updateEdu, item] : [item],
    })),
  updateExpItem: (item, index) =>
    set((state) => {
      const updated = [...(state.updateExp || [])];
      updated[index] = item;
      return { updateExp: updated };
    }),
  updateEduItem: (item, index) =>
    set((state) => {
      const updated = [...(state.updateEdu || [])];
      updated[index] = item;
      return { updateEdu: updated };
    }),
  delExpItem: (index) =>
    set((state) => {
      const updated = [...(state.updateExp || [])];
      updated.splice(index, 1);
      return { updateExp: updated };
    }),
  delEduItem: (index) =>
    set((state) => {
      const updated = [...(state.updateEdu || [])];
      updated.splice(index, 1);
      return { updateEdu: updated };
    }),
  inputChange: (e) => {
    const { id, value } = e.target;
    set((state) => ({
      fieldsData: {
        ...state.fieldsData,
        [id]: value,
      },
    }));
  },
}));
export default useAppStore;

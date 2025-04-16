import { create } from "zustand";
import { AppStore } from "@Types/appStore";
import { defaultData } from "../components/Data";

const initalState = {
  cardCollapse: "Personal Details",
  fieldsData: defaultData,
  sections: {
    experience: {
      items: [],
      adding: false,
      editMode: { active: false, index: null },
    },
    education: {
      items: [],
      adding: false,
      editMode: { active: false, index: null },
    },
  },
};

const useAppStore = create<AppStore>((set) => ({
  ...initalState,
  resetStore: () => set(() => ({ ...initalState })),

  setExpandedCard: (title) =>
    set((state) => ({
      cardCollapse: state.cardCollapse === title ? "" : title,
    })),

  toggleField: (field) =>
    set((state) => ({
      [field]: !state[field],
    })),

  updateFieldData: (field, data) =>
    set((state) => ({
      [field]: { ...(state[field] as any), ...data },
    })),

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

  editSection: (section, action, item, index = null) =>
    set((state) => {
      const editedSection = { ...state.sections[section] };
      switch (action) {
        case "add":
          if (item) {
            editedSection.items = [...editedSection.items, item];
          }
          break;
        case "update":
          if (index !== null && item) editedSection.items[index] = item;
          break;
        case "delete":
          if (index !== null) editedSection.items.splice(index, 1);
          break;
        case "toggleAdding":
          editedSection.adding = !editedSection.adding;
          break;
        case "toggleEditMode":
          editedSection.editMode = {
            active: !editedSection.editMode.active,
            index,
          };
          break;
        default:
          break;
      }
      return { sections: { ...state.sections, [section]: editedSection } };
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

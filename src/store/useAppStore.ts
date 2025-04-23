import { create } from "zustand";
import { AppStore } from "@Types/appStore";
import { defaultData } from "../components/Data";

const savedState = localStorage.getItem("cvState");

const defaultState = {
  cardCollapse: "Personal Details",
  fieldsData: defaultData,
  profileImage: "/assets/img-placeholder.png",
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

// Simple type guard to check if the stored state still valid
// consider adding zod lib if needed
const isValidState = (state: any): state is typeof defaultState => {
  try {
    return (
      typeof state === "object" &&
      state !== null &&
      "cardCollapse" in state &&
      "fieldsData" in state &&
      "profileImage" in state &&
      "experience" in state.sections &&
      "education" in state.sections
    );
  } catch {
    return false;
  }
};

const initialState =
  savedState && isValidState(JSON.parse(savedState))
    ? JSON.parse(savedState)
    : defaultState;

const useAppStore = create<AppStore>((set) => ({
  ...initialState,
  resetStore: () => set(() => ({ ...defaultState })),

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

  setProfileImage: (url) =>
    set(() => ({
      profileImage: url,
    })),

  loadProfileImage: (e) =>
    set((state) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          set({ profileImage: reader.result as string });
        };
        reader.readAsDataURL(file);
      }
      return { profileImage: state.profileImage };
    }),

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
          if (index !== null && item) {
            editedSection.items = state.sections[section].items.map((it, i) =>
              i === index ? item : it
            );
          }
          break;
        case "delete":
          if (index !== null) {
            editedSection.items = state.sections[section].items.filter(
              (_, i) => i !== index
            );
          }
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

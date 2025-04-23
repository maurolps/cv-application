import { StyleSheet } from "@react-pdf/renderer";
const fontSizes = {
  name: 20,
  role: 12,
  contact: 9,
  headings: 14,
  subheadings: 12,
  date: 9,
  text: 10,
  skills: 8,
};

const colors = {
  primary: "#0ca3a3",
  // primary: "#3457c4",
  text: "#333333",
};

export const styles = StyleSheet.create({
  page: {
    padding: 24,
    color: colors.text,
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    width: 430,
  },

  photoWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "88",
  },

  photoContainer: {
    width: 88,
    height: 88,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 88,
    height: 88,
    objectFit: "cover",
  },

  nameContainer: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontSize: fontSizes.name,
    fontWeight: "bold",
  },
  role: {
    fontSize: fontSizes.role,
    marginTop: 2,
  },
  contactContainer: {
    width: 140,
    fontSize: fontSizes.contact,
    textAlign: "right",
  },
  contact: {
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skillTag: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: fontSizes.skills,
    fontWeight: "bold",
    margin: 2,
  },
  summaryContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 470,
  },
  summaryHeader: {
    fontSize: fontSizes.headings,
    fontWeight: "bold",
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  summary: {
    fontSize: fontSizes.text,
    lineHeight: 1.2,
    marginBottom: 10,
  },

  section: {
    marginTop: 20,
  },

  sectionHeaderContainer: {
    width: 140,
    alignItems: "flex-end",
    marginBottom: 15,
  },

  sectionHeader: {
    fontSize: fontSizes.headings,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  entry: {
    marginBottom: 10,
  },
  entryRow: {
    flexDirection: "row",
  },
  entryColLeft: {
    width: 140,
    alignItems: "flex-end",
    flexDirection: "column",
  },
  entryColRight: {
    width: 350,
    paddingLeft: 20,
    flexDirection: "column",
  },
  entryTitle: {
    fontSize: fontSizes.subheadings,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "right",
  },
  entryDate: {
    fontSize: fontSizes.date,
    fontWeight: 300,
  },
  entryCompany: {
    fontSize: fontSizes.subheadings,
    fontWeight: "600",
    marginBottom: 5,
  },

  entryDesc: {
    fontSize: fontSizes.text,
    lineHeight: 1.2,
  },

  entryStack: {
    fontSize: fontSizes.text,
    fontWeight: "bold",
  },
});

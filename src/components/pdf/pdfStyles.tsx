import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontSize: 10,
    color: "#333333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  photoContainer: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: "#cccccc",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: 88,
    height: 88,
    objectFit: "cover",
  },
  photoPlaceholder: {
    width: 88,
    height: 88,
    backgroundColor: "#f0f0f0",
    borderRadius: 44,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111111",
  },
  role: {
    fontSize: 9,
    color: "#555555",
    marginTop: 2,
  },
  contactContainer: {
    width: 140,
    fontSize: 8,
    textAlign: "right",
  },
  contact: {
    marginBottom: 2,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  skillTag: {
    borderWidth: 1,
    borderColor: "#0ca3a3",
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    fontSize: 8,
    color: "#0ca3a3",
    margin: 2,
  },
  section: {
    marginTop: 8,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  entry: {
    marginBottom: 10,
  },
  entryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  entryTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#0ca3a3",
  },
  entryDate: {
    fontSize: 8,
    color: "#666666",
  },
  entryCompany: {
    fontSize: 8,
    fontWeight: "600",
    marginTop: 2,
  },
  entryDesc: {
    fontSize: 8,
    fontStyle: "italic",
    marginTop: 2,
    lineHeight: 1.2,
    color: "#444444",
  },
});

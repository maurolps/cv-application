import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./pdfStyles";

interface PreviewPDFProps {
  state: {
    fieldsData: Record<string, any>;
    sections: {
      experience: { items: any[]; editMode: { active: boolean } };
      education: { items: any[]; editMode: { active: boolean } };
    };
  };
}

export const PdfDocument: React.FC<PreviewPDFProps> = ({ state }) => {
  const { fieldsData: update, sections } = state;
  const expList = sections.experience.items;
  const eduList = sections.education.items;

  const skills: string[] = update.skills
    ? update.skills
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.photoContainer}>
            {update.photo ? (
              <Image src={update.photo} style={styles.photo} />
            ) : (
              <View style={styles.photoPlaceholder} />
            )}
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{update.name}</Text>
            <Text style={styles.role}>
              {update["p-description"].toUpperCase()}
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>{update["phone-number"]}</Text>
            <Text style={styles.contact}>{update.email}</Text>
            <Text style={styles.contact}>{update.address}</Text>
          </View>
        </View>

        {/* Skills tags */}
        {!!skills.length && (
          <View style={styles.skillsContainer}>
            {skills.map((skill, idx) => (
              <Text key={idx} style={styles.skillTag}>
                {skill}
              </Text>
            ))}
          </View>
        )}

        {/* Experience section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>EXPERIENCE</Text>
          {expList.map((item, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryRow}>
                <Text style={styles.entryTitle}>
                  {item["position-title"].toUpperCase()}
                </Text>
                <Text style={styles.entryDate}>
                  {item["start-date"]} - {item["end-date"]}
                </Text>
              </View>
              <Text style={styles.entryCompany}>
                {item["company-name"]} – {item.location}
              </Text>
              <Text style={styles.entryDesc}>{item.description}</Text>
            </View>
          ))}
        </View>

        {/* Education section */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>EDUCATION</Text>
          {eduList.map((item, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryRow}>
                <Text style={styles.entryTitle}>
                  {item.degree.toUpperCase()}
                </Text>
                <Text style={styles.entryDate}>
                  {item.start} - {item.end}
                </Text>
              </View>
              <Text style={styles.entryCompany}>
                {item.school} – {item.region}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

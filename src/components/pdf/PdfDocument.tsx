import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./pdfStyles";
import { AppStore } from "@Types/appStore";

type PdfDocumentProps = {
  state: AppStore;
};

export function PdfDocument({ state }: PdfDocumentProps) {
  const { fieldsData, sections, profileImage } = state;
  const expList = sections.experience.items;
  const eduList = sections.education.items;

  const skills: string[] = fieldsData.skills
    ? fieldsData.skills
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean)
    : [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.photoWrapper}>
            <View style={styles.photoContainer}>
              {profileImage ? (
                <Image src={profileImage} style={styles.photo} />
              ) : (
                <Image
                  src={"/assets/img-placeholder.png"}
                  style={styles.photo}
                />
              )}
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{fieldsData.name}</Text>
            <Text style={styles.role}>
              {fieldsData["p-description"]?.toUpperCase()}
            </Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>{fieldsData["phone-number"]}</Text>
            <Text style={styles.contact}>{fieldsData.email}</Text>
            <Text style={styles.contact}>{fieldsData.address}</Text>
          </View>
        </View>

        {/* Skills tags */}
        {!!skills.length && (
          <View style={styles.skillsContainer}>
            {skills.map((skill, idx) => (
              <Text key={idx} style={styles.skillTag}>
                {skill.toUpperCase()}
              </Text>
            ))}
          </View>
        )}

        {/* Experience section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>EXPERIENCE</Text>
          </View>
          {expList.map((item, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryRow}>
                <View style={styles.entryColLeft}>
                  <Text style={styles.entryTitle}>
                    {item["position-title"]?.toUpperCase()}
                  </Text>
                  <Text style={styles.entryDate}>
                    {item["start-date"]} - {item["end-date"]}
                  </Text>
                </View>
                <View style={styles.entryColRight}>
                  <Text style={styles.entryCompany}>
                    {item["company-name"]?.toUpperCase()} -{" "}
                    {item.location?.toUpperCase()}
                  </Text>
                  <Text style={styles.entryDesc}>{item.description}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Education section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>EDUCATION</Text>
          </View>
          {eduList.map((item, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryRow}>
                <View style={styles.entryColLeft}>
                  <Text style={styles.entryTitle}>
                    {item.degree?.toUpperCase()}
                  </Text>
                  <Text style={styles.entryDate}>
                    {item.start} - {item.end}
                  </Text>
                </View>
                <View style={styles.entryColRight}>
                  <Text style={styles.entryCompany}>
                    {item.school?.toUpperCase()} - {item.region?.toUpperCase()}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

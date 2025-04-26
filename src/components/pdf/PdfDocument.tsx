import { Document, Page, Text, View, Image, Link } from "@react-pdf/renderer";
import { styles } from "./pdfStyles";
import { AppStore } from "@Types/appStore";

type PdfDocumentProps = {
  state: AppStore;
};

const DescriptionList = ({ description }: { description: string }) => {
  const parsedDescription = description
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <View wrap={false} style={styles.entryDesc}>
      {parsedDescription &&
        parsedDescription.map((desc, index) => (
          <Text key={index} style={styles.entryDesc}>
            {desc}
          </Text>
        ))}
    </View>
  );
};

export function PdfDocument({ state }: PdfDocumentProps) {
  const { fieldsData, sections, profileImage } = state;
  const expList = sections.experience.items;
  const eduList = sections.education.items;
  const techList = sections.techstack.items;
  const summary = fieldsData.summary;

  const ContactPhone = ({ phoneNumber }: { phoneNumber: string | null }) => {
    const isWhatsapp = phoneNumber?.endsWith("w");

    if (!isWhatsapp)
      return (
        <>
          <Text style={styles.contact}>{phoneNumber}</Text>
        </>
      );

    const number = phoneNumber?.substring(0, phoneNumber?.length - 1);
    const rawPhoneNumber = phoneNumber?.replace(/[^0-9]/g, "");
    const whatsAppLink = "https:/wa.me/" + rawPhoneNumber;

    return (
      <View style={styles.iconContainer}>
        <Image style={styles.icon} src="/assets/whatsapp.png"></Image>
        <Link href={whatsAppLink} style={styles.contact}>
          {number}
        </Link>
      </View>
    );
  };

  const skills: string[] = fieldsData.skills
    ? fieldsData.skills
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean)
    : [];

  const formatLink = (link: string) => {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      return link;
    }
    return `https://${link}`;
  };

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
            <Text style={styles.role}>{fieldsData["p-description"]}</Text>
          </View>
          <View style={styles.contactContainer}>
            <ContactPhone phoneNumber={fieldsData["phone-number"]} />

            {fieldsData.email && (
              <Link href={"mailto:" + fieldsData.email} style={styles.contact}>
                {fieldsData.email}
              </Link>
            )}
            {fieldsData.social && (
              <Link href={formatLink(fieldsData.social)} style={styles.contact}>
                {fieldsData.social}
              </Link>
            )}
            {fieldsData.portfolio && (
              <Link
                href={formatLink(fieldsData.portfolio)}
                style={styles.contact}
              >
                {fieldsData.portfolio}
              </Link>
            )}
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

        {/* Summary section */}
        {summary && (
          <View style={styles.summaryContainer}>
            <Text style={styles.summaryHeader}>SUMMARY</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        )}

        {/* Experience section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>WORK EXPERIENCE</Text>
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
                    {item["company-name"]} - {item.location}
                  </Text>
                  {item.description && (
                    <DescriptionList description={item.description} />
                  )}
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
                    {item.school} - {item.region}
                  </Text>
                  {item.description && (
                    <DescriptionList description={item.description} />
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Tech Stack section */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeader}>TECHSTACK</Text>
          </View>
          {techList.map((item, i) => (
            <View key={i} style={styles.entry}>
              <View style={styles.entryRow}>
                <View style={styles.entryColLeft}>
                  <Text style={styles.entryTitle}>
                    {item["tech-title"]?.toUpperCase()}
                  </Text>
                </View>
                <View style={styles.entryColRight}>
                  <Text style={styles.entryStack}>{item["tech-content"]}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

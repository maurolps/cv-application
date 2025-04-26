const defaultData = {
  ["name"]: "",
  ["email"]: "",
  ["phone-number"]: "",
  ["address"]: "",
  ["summary"]: "",
  ["p-description"]: "",
  ["skills"]: "",
  ["portfolio"]: "",
  ["social"]: "",
  ["company-name"]: "",
  ["position-title"]: "",
  ["start-date"]: "",
  ["end-date"]: "",
  ["location"]: "",
  ["description"]: "",
  ["school"]: "",
  ["degree"]: "",
  ["start"]: "",
  ["end"]: "",
  ["region"]: "",
  ["tech-title"]: "",
  ["tech-content"]: "",
};

const exampleData = {
  ["name"]: "John Doe",
  ["email"]: "john.doe@techxlead.com",
  ["phone-number"]: "(+99) 553-35284w",
  ["address"]: "164 Main Street, CT, Brazil",
  ["p-description"]: "SENIOR FULLSTACK DEVELOPER\nReact | NodeJs | TypeScript",
  ["summary"]:
    "Senior Full Stack Developer with 7+ years of hands-on experience designing, developing, and scaling modern web applications. Proven ability to drive complex projects from conception to deployment with deep expertise in the JavaScript ecosystem. Seeking senior-level opportunities to lead and innovate in cutting-edge product teams.",
  ["skills"]:
    "Leadership, System Architecture, Scalable Solutions, Agile Development",
  ["portfolio"]: "johndoe.tech",
  ["social"]: "linkedin.com/in/johndoe",
};

const expData = [
  {
    ["company-name"]: "Freelance / Remote Contracts",
    ["position-title"]: "Senior Full Stack Web Developer",
    ["start-date"]: "Aug 2020",
    ["end-date"]: "Present",
    ["location"]: "Remote",
    ["description"]: `Spearheaded architecture and full-cycle development for enterprise-level web apps using React, Node.js, and TypeScript.\n\nLed backend microservices design with NestJS and PostgreSQL, ensuring performance and maintainability.\n\nCollaborated with cross-functional remote teams in Agile environments, delivering scalable products aligned with business objectives.`,
  },
  {
    ["company-name"]: "Quantum CNC",
    ["position-title"]: "Software Engineer",
    ["start-date"]: "Jun 2017",
    ["end-date"]: "May 2020",
    ["location"]: "California, EUA",
    ["description"]: `Oversaw technology initiatives, including the transition to modern web platforms and tools.\n\nDirected multidisciplinary teams, mentoring developers and aligning workflows with strategic goals.\n\nImplemented agile practices, optimizing delivery cycles and fostering a continuous improvement culture.`,
  },
];

const eduData = [
  {
    ["school"]: "Tech Universe",
    ["degree"]: "Bachelor in CS",
    ["start"]: "Sep 2014",
    ["end"]: "May 2018",
    ["region"]: "São Paulo, Brasil",
    ["description"]:
      "Bachelor's degree in Computer Science with a focus on software development, algorithms, and data structures. Participated in various projects and internships that enhanced practical skills in programming and system design.",
  },
  {
    ["school"]: "Innovate",
    ["degree"]: "Software Engineer",
    ["start"]: "Jan 2019",
    ["end"]: "Present",
    ["region"]: "California, EUA",
    ["description"]:
      "Software Engineer with a focus on web development and cloud technologies. Gained hands-on experience in building scalable applications and working with modern frameworks and tools.",
  },
];

const techData = [
  {
    ["tech-title"]: "Front-End",
    ["tech-content"]: `React, Redux, Next.js, TypeScript, Tailwind CSS`,
  },
  {
    ["tech-title"]: "Back-End",
    ["tech-content"]: `Node.js, Express, TypeScript, MongoDB, PostgreSQL, NestJS, GraphQL, REST APIs`,
  },
  {
    ["tech-title"]: "DevOps",
    ["tech-content"]: `Docker, Kubernetes, CI/CD, AWS, Azure, Terraform, GitHub Flow`,
  },
];

export { defaultData, exampleData, expData, eduData, techData };

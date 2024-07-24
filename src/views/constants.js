import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  AndroidOutlined,
  FolderOpenOutlined,
  CoffeeOutlined,
} from "@ant-design/icons";

export const tabList = [
  {
    key: "bio",
    label: "Bio",
    icon: <AndroidOutlined />,
  },
  {
    key: "projects",
    label: "Projects",
    icon: <FolderOpenOutlined />,
  },
  {
    key: "contact",
    label: "Contact",
    icon: <CoffeeOutlined />,
  },
];

export const techStack = [
  "HTML5",
  "CSS",
  "SASS",
  "Tailwind",
  "Javascript",
  "React",
  "Redux",
  "Firebase",
  "Nest JS",
  "Adonis JS",
];

export const contactArr = [
  {
    type: "github",
    link: "https://github.com/BrianYoon91",
    icon: (
      <GithubOutlined
        style={{
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/brian-yoon-7ba86b214/",
    icon: (
      <LinkedinOutlined
        style={{
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
    ),
  },
  {
    type: "email",
    link: "mailto:yoon.brian91@gmail.com",
    icon: (
      <MailOutlined
        style={{
          fontSize: "3rem",
          cursor: "pointer",
        }}
      />
    ),
  },
];

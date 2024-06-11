import {
  SiExpress,
  // SiSocketdotio,
  // SiPrisma,
  SiNextdotjs,
  // SiFlask,
} from "react-icons/si";
import {
  // FramerMotionIcon,
  ReactRouterDomIcon,
  // VitePwaIcon,
} from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
// import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
// import PythonSvg from "@/public/icons/python.svg";
import CSharpSvg from "@/public/icons/CSharp.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import BootstrapSvg from "@/public/icons/Bootstrap.svg";
// import SolidjsSvg from "@/public/icons/solidjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
// import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
// import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";
import AspDotnetSvg from "@/public/icons/Dot.NET_Core.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import SqlServerSvg from "@/public/icons/Sql-server.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
// import AwsSvg from "@/public/icons/aws.svg";
import AzureSvg from "@/public/icons/Azure.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      // {
      //   name: "SASS",
      //   icon: SassSvg,
      // },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      // {
      //   name: "Python",
      //   icon: PythonSvg,
      // },
      {
        name: "C Sharp",
        icon: CSharpSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      // {
      //   name: "Solidjs",
      //   icon: SolidjsSvg,
      // },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      // {
      //   name: "Tailwindcss",
      //   icon: TailwindcssSvg,
      // },
      {
        name: "MUI",
        icon: MuiSvg,
      },
      // {
      //   name: "Framer motion",
      //   icon: FramerMotionIcon,
      // },
      // {
      //   name: "Vite",
      //   icon: ViteSvg,
      // },
      // {
      //   name: "Vite PWA",
      //   icon: VitePwaIcon,
      // },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "Asp.net Core",
        icon: AspDotnetSvg,
      },
      // {
      //   name: "Socket.io",
      //   icon: SiSocketdotio,
      // },
      // {
      //   name: "Flask",
      //   icon: SiFlask,
      // },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "Postgress",
        icon: PostgressSvg,
      },
      {
        name: "SQL Server",
        icon: SqlServerSvg,
      },
      // {
      //   name: "Prisma",
      //   icon: SiPrisma,
      // },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Azure",
        icon: AzureSvg,
      },
      // {
      //   name: "AWS",
      //   icon: AwsSvg,
      // },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];

import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Face Recognition",
    href: "/projects",
    tags: ["Reactjs", "Nodejs", "AI", "Api", "Vercel"],
    image: {
      LIGHT: "/images/projects/facedetection-app.png",
      DARK: "/images/projects/facedetection-app.png",
    },
  },
  {
    index: 1,
    title: "Next Food",
    href: "/projects",
    tags: ["Reactjs", "Nextjs", "MongoDB", "cloud", "Vercel"],
    image: {
      LIGHT: "/images/projects/NextFood.png",
      DARK: "/images/projects/NextFood.png",
    },
  },
  {
    index: 2,
    title: "Invoic Collection system",
    href: "/projects",
    tags: ["Reactjs", "Asp.net Core", "SQL Server", "Vercel", "API", "MUI"],
    image: {
      LIGHT: "/images/projects/ICS-list.png",
      DARK: "/images/projects/ICS-list.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Face Recognition",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/facedetection-app.png", // Light
      "/images/projects/facedetection-app.png", // Dark
    ],
    description:
      "Face detection app using external urls, Application is made using Reactjs, Nodejs, Clarifai and Node js.",
    sourceCodeHref: "https://github.com/starba3/next-face-recognition-appnext",
    liveWebsiteHref: "https://next-face-recognition-appnext.vercel.app/",
  },
  {
    name: "Next Food",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/NextFood.png", // Light
      "/images/projects/NextFood.png", // Dark
      "/images/projects/NextFood.png",
    ],
    description:
      "Share you favorite meals and see what other delicacies other enjoy. This app is made using Nextjs, MongoDB, CLoudenary cloud provider.",
    sourceCodeHref: "https://github.com/starba3/NextFoodies-project",
    liveWebsiteHref: "https://next-foodies-project.vercel.app/",
  },
  {
    name: "Invoic Collection system",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/ICS-signin.png",
      "/images/projects/ICS-chart.png",
      "/images/projects/ICS-list.png",
      // "/images/projects/manyGamesPuzzle.webp",
      // "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "Invoice Collection system using Reactjs, MUI and ASP.net core with collaboration with other developers",
    sourceCodeHref: "https://github.com/starba3/cra-js",
    liveWebsiteHref: "https://cra-js-two.vercel.app/dashboard",
  },
  // {
  //   name: "My portfolio",
  //   favicon: "/favicon.ico",
  //   imageUrl: [
  //     "/images/projects/portfolioDark.webp",
  //     "/images/projects/portfolioLight.webp",
  //   ],
  //   description:
  //     "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/amitchauhan-v2",
  //   liveWebsiteHref: siteMetadata.siteUrl,
  // },
  // {
  //   name: "Covid Tracker",
  //   favicon: "/images/projects/logos/covidtracker.ico",
  //   imageUrl: [
  //     "/images/projects/covidTracker.webp",
  //     "/images/projects/covidTrackerMap.webp",
  //     "/images/projects/covidTrackerTable.webp",
  //   ],
  //   description:
  //     "Get latest covid related stats in a table where user can filter using country and cases. It also has a map which show every countries data for quick view. It uses an open source api (disease.sh). Made using Reactjs, Javascript and MUI",
  //   sourceCodeHref: "https://github.com/BUMBAIYA/CovidTracker",
  //   liveWebsiteHref: "https://bumbaiya.github.io/CovidTracker",
  // },
  // {
  //   name: "Stock predictor",
  //   favicon: "/images/projects/logos/stockpredictor.ico",
  //   imageUrl: [
  //     "/images/projects/stockPredictor.webp",
  //     "/images/projects/stockPredictorCandleChart.webp",
  //     "/images/projects/stockPredictorCompareChart.webp",
  //     "/images/projects/stockPredictorLineChart.webp",
  //   ],
  //   description:
  //     "Get prediction of opening and closing price of stocks price. Frontend is made using Reactjs and backend is made using Flask and Machine learning model are trained using Tensorflow",
  //   sourceCodeHref: "https://github.com/Rohrschachh/Stock-Market-Predictor",
  // },
];

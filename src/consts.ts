import type { Site, Metadata } from "@types";

export const SITE: Site = {
  NAME: "Marko Rusić",
  IMAGE: "/me.webp",
  EMAIL: "markorusic98@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Marko Rusić is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const RESUME: Metadata = {
  TITLE: "Resume",
  DESCRIPTION:
    "My personal resume describing my professional experience and skills.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const RESUME_DATA = {
  lang: "en",
  name: "Marko Rusić",
  title:
    "Software Engineer with a deep passion for building practical and creative solutions.",
  email: "markorusic98@gmail.com",
  phoneNumber: "+381 60 4609090",
  location: "Belgrade, Serbia",
  locationGoogleMaps: "https://www.google.com/maps/place/Belgrade",
  timeZone: "CET",
  avatar: "/me-lg.webp",
  about: [
    `For the past ${
      new Date().getFullYear() - 2016
    } years, I've had an opportunity to work on many projects as a frontend engineer in a wide variety of fields. I’m responsible, with a good work ethic. I enjoy taking initiative and ownership over projects and seeing them through to completion.`,
    "During my career, I was also in charge of mentoring other team members, sharing tasks between them, and giving them regular, honest, and constructive feedback about their work. On the other hand, I was also in charge of setting proper time estimates on tasks, and communicating between the team and the product owners.",
    "I’m resourceful and curious. I know where and how to find answers to my questions in order to provide high-quality work. I enjoy working in a team of hardworking and ambitious individuals.",
  ],
  skills: [
    "Problem Solving",
    "Software Architecture",
    "Technical Leadership",
    "Team Leadership",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "React Native/Expo",
    "Node.js",
    "MySQL/PostgreSQL/Redis",
    "Docker",
  ],
  socials: {
    github: "https://github.com/markorusic",
    linkedin: "https://www.linkedin.com/in/markorusic/",
    x: "https://x.com/markorusic_",
  },
  experience: [
  {
      position: "Lead Software Engineer",
      company: "Rivian",
      location: "Belgrade, Serbia",
      dateStart: "05/08/2024",
      dateEnd: null,
      summary:
        "As a Lead Engineer at Rivian, I oversee the development and evolution of web infrastructure while leading a team of talented engineers. My focus is on driving technical excellence through modernization efforts, data-driven decisions, and close collaboration with leadership to achieve strategic objectives.",
      bulletpoints: [
        "Lead a team responsible for managing and developing Rivian's website infrastructure.",
        "Guide the re-architecture of the web development stack.",
        "Drive data-driven decision making through AB testing and analytics tracking.",
        "Collaborate directly with senior leadership to align technical initiatives.",
      ],
    },
    {
      position: "Frontend Engineer → Lead Software Engineer",
      company: "Povio (YC W14)",
      location: "Remote",
      dateStart: "04/01/2022",
      dateEnd: "07/31/2024",
      summary:
        "As a Lead Engineer, I created user experiences and systems for multiple YC startups. I led engineering projects, set coding standards, and managed code reviews. I also helped the team grow and mentored developers through knowledge-sharing and feedback.",
      bulletpoints: [
        "Led software development at a Y Combinator-affiliated outsourcing leader. Delivered high-quality software solutions across various domains and projects.",
        "Directed engineering initiatives as lead, setting coding standards, overseeing code reviews, and fostering team growth.",
        "Mentored and reviewed developers, elevating team skills through knowledge-sharing and targeted feedback.",
      ],
    },
    {
      position: "Full Stack Engineer → Lead Frontend Engineer",
      company: "NetCast",
      location: "Belgrade, Serbia",
      dateStart: "01/09/2017",
      dateEnd: "01/01/2023",
      summary:
        "As a lead engineer I guided my team in the successful development of large-scale applications, ensuring high quality and performance across all projects.",
      bulletpoints: [
        `Developed the photo voting platform "Slike Srbije" using MySQL, Laravel, REST, and Vue.js.`,
        "Developed a TV content management service with complex EPG views and editors using MongoDB, Spring Boot, REST, and Vue.js.",
        "Led the development of a large-scale back-office portal for managing video streaming content, ensuring seamless integration and high performance.",
        "Led the development of a cross-platform video streaming application for end users using React, React Native, and TypeScript.",
      ],
    },
  ],
  education: [
    {
      institution: "ICT College Of Vocational Studies",
      description: "Bachelor's Degree in Informational Technologies.",
      dateStart: "01/08/2017",
      dateEnd: "01/07/2021",
      location: "Belgrade, Serbia",
    },
  ],
} as const;

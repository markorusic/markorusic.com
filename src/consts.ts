import type { Site, Metadata, Socials } from "@types";

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

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "x",
    HREF: "https://x.com/markorusic_",
  },
  {
    NAME: "github",
    HREF: "https://github.com/markorusic",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markorusic/",
  },
];

export const RESUME = {
  lang: "en",
  name: "Marko Rusić",
  title: "Software Engineer",
  bio: [
    `For the past ${
      new Date().getFullYear() - 2017
    } years, I've had an opportunity to work on many projects as a frontend engineer in a wide variety of fields. I’m responsible, with a good work ethic. I enjoy taking initiative and ownership over projects and seeing them through to completion.`,
    "During my career, I was also in charge of mentoring other team members, sharing tasks between them, and giving them regular, honest, and constructive feedback about their work. On the other hand, I was also in charge of setting proper time estimates on tasks, and communicating between the team and the product owners.",
    "I’m resourceful and curious. I know where and how to find answers to my questions in order to provide high-quality work. I enjoy working in a team of hardworking and ambitious individuals.",
  ],
  skills: [
    "TypeScript, React, React Native",
    "Software Architecture",
    "Problem Solving",
    "Technical Leadership",
    "Team Leadership",
  ],
  links: [
    {
      icon: "envelope-o",
      text: "markorusic98@gmail.com",
    },
    {
      icon: "phone",
      text: "+381 60 4609090",
    },
    {
      icon: "map-marker",
      text: "Belgrade, Serbia",
    },
    {
      icon: "linkedin",
      text: "linkedin.com/in/markorusic",
      url: "https://www.linkedin.com/in/markorusic/",
    },
    {
      icon: "github",
      text: "github.com/markorusic",
      url: "https://github.com/markorusic",
    },
    {
      icon: "globe",
      text: "markorusic.com",
      url: "https://markorusic.com",
    },
  ],
  workExperience: [
    {
      position: "Frontend Engineer & Engineering Lead",
      company: "Povio",
      location: "Remote",
      time: "04/2022 – Present",
      achievements: [
        {
          content: `Led React and TypeScript-based frontend development at a Y Combinator-affiliated outsourcing leader. Delivered UX excellence across diverse projects.`,
        },
        {
          content: `Directed engineering initiatives as Lead, setting coding standards, overseeing code reviews, and fostering team growth.`,
        },
        {
          content: `Engineered captivating user interfaces, leveraging React and TypeScript expertise to enhance engagement and meet client requirements.`,
        },
        {
          content: `Mentored and reviewed developers, elevating team skills through knowledge-sharing and targeted feedback.`,
        },
      ],
    },
    {
      position: "Frontend Team Lead",
      company: "NetCast",
      location: "Belgrade, Serbia",
      time: "01/2019 – 01/2023",
      achievements: [
        {
          content:
            "Led the architecture and development of a robust back-office portal to manage a video streaming platform, employing React and TypeScript.",
        },
        {
          content:
            "Led the architecture and development of a cross-platform video streaming application for end users, utilizing React, React Native, and TypeScript.",
        },
        {
          content:
            "Mentored and conducted comprehensive reviews for team members, fostering skill growth and ensuring high code quality.",
        },
        {
          content:
            "Effectively managed communication with product owners, translating their requirements into actionable development tasks.",
        },
        {
          content:
            "Ensured meticulous alignment of software with product and design specifications, maintaining a strong focus on quality and user experience.",
        },
      ],
    },
    {
      position: "Full Stack Engineer",
      company: "NetCast",
      location: "Belgrade, Serbia",
      time: "09/2017 – 01/2019",
      achievements: [
        {
          content: `Engineered the creation of the photo voting platform "Slike Srbije," utilizing technologies such as MySQL, Laravel, REST, and Vue.js.`,
          url: "https://www.slikesrbije.rs/",
        },
        {
          content:
            "Led the architecture and development of a TV content management service, incorporating intricate electronic program guide (EPG) views and editors. Employed MongoDB, Spring Boot, REST, and Vue.js.",
        },
        {
          content:
            "Designed and implemented an engaging end-user TV content portal utilizing Vue.js, optimizing the user experience and interaction.",
          url: "http://volim.tv/",
        },
      ],
    },
  ],
  education: [
    {
      name: "Informational Technologies",
      institution: "ICT College Of Vocational Studies",
      time: "08/2017 – 2021",
      location: "Belgrade, Serbia",
    },
    {
      name: "Informational Technologies",
      institution: `High School Of Electrical Engineering "Nikola Tesla"`,
      time: "09/2012 – 06/2016",
      location: "Belgrade, Serbia",
    },
  ],
  competitions: [
    {
      name: "Saga ML Hackathon",
      time: "11/2018",
      description: "",
    },
    {
      name: "FON Case Study Hackaton",
      time: "06/2018",
      description: "",
    },
    {
      name: "Mathackaton",
      time: "05/2018",
      description: "",
    },
    {
      name: "FON Hackathon",
      time: "04/2018",
      description: "",
    },
  ],
};

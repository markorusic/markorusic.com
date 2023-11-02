import { FC } from 'react';
import Link from 'next/link';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = (props) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">
          {props.title}
        </p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{props.children}</p>
    </li>
  );
};

const StyledLink: FC<{ href: string }> = (props) => {
  return (
    <a
      className="text-blue-500 underline"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
};

export function Timeline() {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Divider />
      <Year>2022</Year>
      <ul>
        <Step title="Released This Website 🎉">
          Finally released my personal website. It looks so nice because it's
          fork of <StyledLink href="https://leerob.io/">Lee Rob's</StyledLink>{' '}
          website, which is{' '}
          <StyledLink href="https://github.com/leerob/leerob.io">
            open sourced
          </StyledLink>
          , so huge shoutout to him. Mine version is a lot simpler and available{' '}
          <StyledLink href="https://github.com/markorusic/markorusic.com">
            here
          </StyledLink>
          .
        </Step>
        <Step title="Started using let instead of const">
          It's shorter really. Only three letters...
        </Step>
      </ul>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Graduated College 🎓">
          After a lot of time and hard work, I finally got my degree. Met some
          great people here and learned a lot of interesting stuff.
        </Step>
        <Step title="Frontend Multitenancy Framework">
          Worked on a internal framework for quick and easy scaffolding of telco
          video streaming cross-platform apps, with unique branding, features,
          deployments, etc...
        </Step>
        <Step title="New React tools">
          <div className="pb-2">
            Finally decided to have a proper look at React SSR/SSG tools. I
            instantly saw Next.js as a simpler, yet more powerful way of
            building React apps, that enables new features, better UX and DX.
            I've been using it since without single regret.
          </div>
          <div className="pb-2">
            Also gave a try to Vite, it turned out it's amazing tool, a lot
            faster than CRA for example. I've started using it by default on
            most of my SPA projects.
          </div>
        </Step>
        <Step title="Expanded Backed/Devops Knowledge">
          This is one of the things I enjoyed the most during the whole 2021. I
          enabled myself to constantly learn new things in fields that I did not
          consider myself an expert. I spent a lot of time reading, watching
          tech talks, even doing some tutorials.
          <div className="my-2 font-semibold">
            Some of the things I feel much more comfortable with thanks to that:
          </div>
          <ul className="list-disc">
            <li>HTTP Protocol</li>
            <li>Databases in General</li>
            <li>Distributed Systems</li>
            <li>Web Servers, specificly Nginx</li>
            <li>Redis</li>
            <li>CI/CD</li>
          </ul>
        </Step>
        <Step title="Slike Srbije v2">
          Decided to revive one of my favourite side projects{' '}
          <StyledLink href="https://www.slikesrbije.rs">
            Slike Srbije
          </StyledLink>
          . And there's just no better way of doing so than rewriting it with
          new shiny tech. Some of the technologies I used: React, TypeScript,
          Next, Sharp.js, Prisma, MySQL, Redis...
        </Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Remote Work">
          Started workring remotely, just as pretty much everyone. It turned out
          I really like it and I don't think I'am going back to office any time
          soon.
        </Step>
        <Step title="Mentoring">
          Started with intensive mentoring work with colleagues of lower
          seniority. Mostly through pair coding sessions, PR reviews, and
          generally being more available for such things. Also, at that time
          I've started holding regular education sessions and workshops with my
          team.
        </Step>
        <Step title="Project/Team Management">
          As a team leader, I was also in charge of reporting to my manager,
          setting proper time estimates on tasks, and communicating between the
          team and the product owners.
        </Step>
        <Step title="Cross-platform Code Sharing">
          At this point, me and my team were actively developing and maintaing a
          lot of client side code, all based on React and TypeScript. We decided
          to extact core/shareble units of code to seperate packages and include
          those in our main product apps. Basically we centralized most of our
          business logic, design system component, configurations, etc... It
          allowed us to seamlessly reuse code between multiple projects and even
          platforms.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Built React Native App">
          This was my first full-featured production ready React Native app. It
          enabled users to consume both live stream and playback video content.
          <div className="my-2 font-semibold">
            Some of the greater challanges that me and my team faced were:
          </div>
          <ul className="list-disc">
            <li>Optimizing component rendering and heavy calculations</li>
            <li>Infinite lists (vertical, horizontal and combined)</li>
            <li>
              Caching server data in-memory and persisting data locally, in
              order to reduce network calls
            </li>
          </ul>
        </Step>
        <Step title="Wrote My First Blog Post">
          <Link passHref href="/blog/write-cleaner-reducers">
            <span className="text-blue-500 underline cursor-pointer">
              Write Cleaner Reducers
            </span>
          </Link>
          , originaly published od Medium. Inspired by the good coding practices
          that I like to follow in general.
        </Step>
        <Step title="Promoted to Team Leader Position">
          Got promoted to the frontend team leader position. As a team we
          managed web and mobile development of our main product.
        </Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Got Into Telco Industry">
          Started working on my company's primary product. Video streaming
          platform for telco operators.
        </Step>
        <Step title="Side Projects">
          Did few side projects, mostly web shops. Based on Laravel, MySQL,
          jQuery or Vue.
        </Step>
        <Step title="Hackathons">
          Attended 5 hackathons with my friends, mostly just for fun. We ended
          up 3rd every time btw 😂... But we met some interesting people and
          learned about different domains.
        </Step>
        <Step title="Experimented With Tech Stacks">
          Built my first backend app with Java/Spring Boot. Built multiple SPAs
          with Vue and React, also got into React Native. Basically did a lot of
          things with different technologies.
        </Step>
        <Step title="Architected a Large Scale Web App">
          Architected React based SPA backoffice portal that manages a huge
          video streaming platform (50+ microservices). To this day, the project
          has 100+ screens, easily onboards new features and maintains existing
          ones.
        </Step>
      </ul>
      <Divider />
      <Year>2017</Year>
      <ul>
        <Step title="Droped Out of Faculty">
          Decided to give up on math, and dedicate myself to something else...
        </Step>
        <Step title="Devoted Myself to Programming">
          This was a huge turing point in my life and career. I started studing
          programming by myself and everything instantly clicked. I relized that
          this is what I wanted to do in my life.
        </Step>
        <Step title="Got Paid to Build Website">
          This was the first time someone paid me to write code, and it felt
          amazing. It was small ecommerce website, writen in vanilla PHP and
          jQuery. It was a huge thing for me, because I learned about relational
          databases, server-side programming, REST APIs, AJAX, CSS animations,
          deploying to production environment, and so many more things. But the
          most important thing I learned was how to think like a programmer, how
          to solve real world problems with tools like programing languages.
        </Step>
        <Step title="Started New Studies in Field of Informational Technologies">
          Decided to give another try to college, only this time I knew what I
          actually like and want. I enrolled in{' '}
          <StyledLink href="https://ict.edu.rs">
            ICT College of Vocational Studies.
          </StyledLink>{' '}
          They have very good practial study programs, that try to emulate real
          world environment for IT industry and that way prepare students for
          their first jobs.
        </Step>
        <Step title="Started First Dev Job">
          After a few unsuccessful interviews, finally got my first dev job at
          NetCast. I was very happy, enthusiastic and ready to grind and learn
          as much as I can.
        </Step>
        <Step title="The First Project That Attracted a Lot of Attention">
          <StyledLink href="https://www.slikesrbije.rs">
            Slike Srbije
          </StyledLink>{' '}
          was my first project and it quickly got a lot of attention. It was
          basically a website where photographers competed for the most
          beautiful picture of Serbia. It got more than 200k unique visits over
          3 months, had around 40k registrated users, and more than 500 active
          participants. It was built with MySQL, Laravel and Vue.
        </Step>
      </ul>
      <Divider />
      <Year>2016</Year>
      <ul>
        <Step title="Graduated High School">
          There I had my first real introduction to programming with C, C#,
          HTML, CSS, JavaScript, SQL, etc...
        </Step>
        <Step title="Started Faculty of Mathematics, University of Belgrade 🤦">
          Basically I got in here because I was always fairly good at math and I
          really tought I liked it, but it turned out that I was very wrong.
        </Step>
        <Step title="Wanted To Dropout of Faculty">
          I am thankful to "Mathematical Analysis", because it made me realized
          that I was not interested in that level math.
        </Step>
      </ul>
      <Divider />
      <Year>2007</Year>
      <ul>
        <Step title="First Computer 🕹">
          Warcraft 3 and Dota were so much fun.
        </Step>
      </ul>
      <Divider />
      <Year>1998</Year>
      <ul>
        <Step title="Born 👶🏼🍼" />
      </ul>
    </>
  );
}

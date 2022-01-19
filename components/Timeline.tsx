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

export default function Timeline() {
  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Divider />
      <Year>2021</Year>
      <ul>
        <Step title="Droped Out of Faculty"></Step>
        <Step title="Devoted Myself to Programming"></Step>
        <Step title="Started New Studies"></Step>
        <Step title="Found First Dev Job"></Step>
      </ul>
      <Divider />
      <Year>2020</Year>
      <ul>
        <Step title="Got Into React Query"></Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Got Into Testing"></Step>
        <Step title="Leared About Clinet Side Caching Techniques"></Step>
        <Step title="Built React Native App"></Step>
        <Step title="Leared About Monorepos"></Step>
        <Step title="Promoted to Team Leader Position"></Step>
      </ul>
      <Divider />
      <Year>2018</Year>
      <ul>
        <Step title="Got Into Telco Industry">
          Started working on my company's primary product, video streaming
          platform for telco operators.
        </Step>
        <Step title="Side Projects">
          Did few side projects, mostly web shops. Based on Laravel, MySQL,
          jQuery or Vue.
        </Step>
        <Step title="Hackathons">
          Attended 5 hackathons with my friends, mostly just for fun. We ended
          up 3rd every time, but we met some interesting people and learned
          about different domains.
        </Step>
        <Step title="Experimented With Tech Stacks">
          Built my first backend app with Java/Spring Boot. Built multiple SPAs
          with Vue and React, also got into React Native. Basically did a lot of
          things with different technologies.
        </Step>
        <Step title="Architected a Large Scale Web App"></Step>
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
          <a
            className="text-blue-500 underline"
            href="https://ict.edu.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            ICT College of Vocational Studies.
          </a>{' '}
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
          <a
            className="text-blue-500 underline"
            href="https://www.slikesrbije.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slike Srbije
          </a>{' '}
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

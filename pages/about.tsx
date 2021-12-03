import Link from 'next/link';

import Timeline from 'components/Timeline';
import Container from 'components/Container';
import { owner } from 'config';
import { intervalToDuration } from 'date-fns';

export default function About() {
  const expirience = intervalToDuration({
    start: new Date(2016, 0, 0),
    end: new Date()
  });
  return (
    <Container title={`About – ${owner.name}`}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Hi, I’m Marko. I am software developer.</p>
          <p>
            I grew up in Belgrade, Serbia 🇷🇸, went to school there, graduated
            with a degree in Informational Technologies. I like to spend my free
            time exploring new exciting tech, playing video games and enjoying
            time with friends and family.
          </p>
          <p>
            For the past {expirience.years} years I've been working in software
            development industry. I've had an opportunity to work on many
            projects as in a wide variety of fields and technologies. I like
            React, TypeScript, Next and everything that comes with those.
          </p>
          <p>
            I write about tech, coding, stuff I find useful and interesting. So
            feel free to subscribe to{' '}
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link>
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}

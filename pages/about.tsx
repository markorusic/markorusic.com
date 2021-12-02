import Link from 'next/link';

import Timeline from 'components/Timeline';
import Container from 'components/Container';
import { owner } from 'config';

export default function About() {
  return (
    <Container title={`About – ${owner.name}`}>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Marko. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Illum rem in minima temporibus, quaerat repudiandae aut
            repellat, voluptatibus quas, dicta et quod dolorum ea eos inventore
            sit tempora itaque quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam
            non facilis porro necessitatibus eum aut voluptatum blanditiis vero
            amet tenetur eius incidunt fuga recusandae possimus, in doloremque
            tempore. Corporis.&nbsp;
            <Link href="/newsletter">
              <a>my newsletter.</a>
            </Link>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            delectus esse eligendi culpa velit et perspiciatis quasi mollitia ea
            dolorem dignissimos sint deleniti asperiores, at tempore voluptatem
            inventore. Est, maxime.
          </p>
        </div>
        <Timeline />
      </div>
    </Container>
  );
}

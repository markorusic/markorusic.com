import Head from 'next/head';
import { clsx } from 'clsx';
import { resume } from '@/config';
import 'font-awesome/css/font-awesome.min.css';

const groupedLinks = ((linksPerGroup = 2) =>
  resume.links
    .slice(0, ((resume.links.length + linksPerGroup - 1) / linksPerGroup) | 0)
    .map((_, i) =>
      resume.links.slice(linksPerGroup * i, linksPerGroup * i + linksPerGroup)
    ))();

const typography = {
  title_l: 'text-2xl font-semibold',
  title_m: 'text-xl font-medium',
  title_s: 'text-base font-medium',
  meta: 'text-xs text-gray-400 italic'
};

const spacing = {
  section: 'py-2'
};

export default function Resume() {
  return (
    <div className="w-full bg-white text-black text-sm min-h-screen">
      <Head>
        <title>Resume - Marko Rusić</title>
      </Head>
      <div className="max-w-[1100px] w-full mx-auto">
        <div className="w-full py-4">
          <h1 className={typography.title_l}>{resume.name}</h1>
          <h2 className="text-lg text-gray-400">{resume.title}</h2>
          <div className="flex py-2 w-full">
            {groupedLinks.map((links, i) => (
              <div key={i} className="w-1/4">
                {links.map((link) => {
                  const content = (
                    <div className="flex items-center">
                      <i className={clsx(`fa fa-${link.icon}`, 'mr-2')} />
                      <span>{link.text}</span>
                    </div>
                  );

                  return (
                    <div key={link.text}>
                      {link.url ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={link.url}
                        >
                          {content}
                        </a>
                      ) : (
                        <span>{content}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="w-5/12">
            <div className={spacing.section}>
              <h4 className={typography.title_m}>About me</h4>
              <div>
                {resume.bio.map((sentance, i) => (
                  <div key={i} className="my-2">
                    {sentance}
                  </div>
                ))}
              </div>
            </div>

            <div className={spacing.section}>
              <h4 className={typography.title_m}>Education</h4>
              <div>
                {resume.education.map((edu, i) => (
                  <div key={i} className={spacing.section}>
                    <h3 className={typography.title_s}>{edu.institution}</h3>
                    <div className="flex justify-between">
                      <span className={typography.meta}>{edu.time}</span>
                      <span className={typography.meta}>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={spacing.section}>
              <h4 className={typography.title_m}>Skills</h4>
              <div
                className={clsx('gap-y-1 grid grid-cols-2', spacing.section)}
              >
                {resume.skills.map((skill, i) => (
                  <div key={i}>- {skill}</div>
                ))}
              </div>
            </div>

            <div className={spacing.section}>
              <h4 className={typography.title_m}>Competitions</h4>
              <div className={clsx(spacing.section, 'grid grid-cols-2 gap-1')}>
                {resume.competitions.map((competition, i) => (
                  <div key={i}>
                    <h3 className={typography.title_s}>{competition.name}</h3>
                    <span className={typography.meta}>{competition.time}</span>
                    {competition.description ? (
                      <p> - {competition.description}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-1/12" />

          <div className="w-6/12">
            <div className={spacing.section}>
              <h4 className={typography.title_m}>Work Experience</h4>
              {resume.workExperience.map((work, i) => (
                <div key={i} className={spacing.section}>
                  <h3 className={typography.title_s}>{work.position}</h3>
                  <h4>{work.company}</h4>
                  <div
                    className={clsx('flex justify-between', typography.meta)}
                  >
                    <span>{work.time}</span>
                    <span>{work.location}</span>
                  </div>
                  <ul className="mt-1">
                    {work.achievements.map((achievement, i) => (
                      <li key={i}> - {achievement.content}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

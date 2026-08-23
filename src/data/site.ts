export const site = {
  name: 'Avery Wagner',
  tagline: 'TODO — one line describing what you do (your LinkedIn headline is a good start)',
  // Public contact address — swap for whatever you want people to actually email.
  email: 'TODO@averywagner.dev',
  github: 'https://github.com/avery-wagner',
  linkedin: 'TODO — paste your LinkedIn profile URL',
  resumeUrl: '/resume.pdf', // drop your real resume PDF into public/resume.pdf
};

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string;
  summary: string;
};

// TODO: fill in from your LinkedIn work history, most recent first.
export const experience: ExperienceEntry[] = [
  // { role: 'Software Engineer', org: 'Company', start: '2024', end: 'Present', summary: 'What you did there.' },
];

// TODO: your skills, as they'd appear on LinkedIn.
export const skills: string[] = [
  // 'TypeScript', 'React', 'Python',
];

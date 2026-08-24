export const site = {
  name: 'Avery Wagner',
  tagline: 'Software Engineer',
  email: 'hi@averywagner.dev',
  github: 'https://github.com/avery-wagner',
  linkedin: 'https://www.linkedin.com/in/avery-wagner/',
  resumeUrl: '/resume.pdf',
  about: ["I recently graduated from CU Boulder with a BA in Computer Science and a minor in Music, and I am currently working at Lunar Outpost as a Robotics Engineering Intern.","During my last academic year, I served as the Vice President of the Women in Computing club at CU, and I also worked on the software sub-team for the CU Rover Team. I gained invaluable experience at Axiom Space working as a Software Engineering Intern on their UI/UX team last summer, and prior to that I had the privilege of interning at Lunar Outpost with their Ground Software team in both 2023 & 2024.","In my spare time, I love skiing and being outdoors. I’m passionate about painting, graphic design, and music, and have been playing the viola for over 10 years."]
};

export type ExperienceEntry = {
  role: string;
  org: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Robotics Engineering Intern',
    org: 'Lunar Outpost',
    start: 'Jun 2026',
    end: 'Present',
    bullets: [],
  },
  {
    role: 'Robotics Software Engineer',
    org: 'CU Rover Team',
    start: 'Aug 2025',
    end: 'May 2026',
    bullets: [
      'Developed foundational software for rover control, autonomous navigation, and simulation.',
    ],
  },
  {
    role: 'Vice President',
    org: 'Women in Computing at CU Boulder',
    start: 'Aug 2025',
    end: 'May 2026',
    bullets: [
      'Oversaw board meetings, delegation of tasks, communications, and organizational restructuring as VP.',
      'Led bi-weekly club meetings, fundraisers, and professional development opportunities.',
      'Organized member attendance and engagement for the TechCrunch Disrupt 2026 & Harvard WeCode 2026 conferences.',
      'Overhauled the official WiC branding with a new logo and various merch designs using Adobe Illustrator & Photoshop.',
      'Revamped the CU WiC Alumni Network to connect current members with CU WiC alumni.',
    ],
  },
  {
    role: 'UI/UX Software Engineering Intern',
    org: 'Axiom Space',
    start: 'Jun 2025',
    end: 'Aug 2025',
    bullets: [
      'Acted as the primary UX researcher, designer, and developer for a new mission-control application.',
      'Created UML user flows, reusable design assets, and high-fidelity wireframe mockups using Figma.',
      'Built the designed application in React and integrated the feature into the company database.',
      'Obtained on-the-job experience shadowing mission controllers during the Ax-4 mission.',
    ],
  },
  {
    role: 'Ground Software Engineering Intern',
    org: 'Lunar Outpost',
    start: 'Jun 2023',
    end: 'Aug 2024',
    bullets: [
      "Supported the development of the company's mission-control solution, Stargate.",
      'Implemented features allowing mission operators to automate dashboard creation, dispatch scheduled commands, and parse logs from spacecrafts.',
      'Integrated features into a Kubernetes microservice infrastructure, collaborating with DevOps to update deployment configurations.',
      'Created several original designs and marketing materials for both digital use and large-scale print using Adobe Illustrator & Photoshop.',
    ],
  },
  {
    role: 'Freelance Graphic Designer',
    org: 'Self-employed',
    start: 'Jan 2018',
    end: 'Jun 2022',
    bullets: [
      'Analyzed internet trends and consumer behavior to design highly marketable graphics in Photoshop & Illustrator.',
      'Became a top-selling independent designer, with 30k+ products sold & 170k+ favorites.',
    ],
  },
  {
    role: 'Server',
    org: 'Wind Crest Retirement Community',
    start: 'Feb 2021',
    end: 'May 2022',
    bullets: ['Worked on the food service staff across various restaurants on the Wind Crest campus.'],
  },
  {
    role: 'Software Development Intern',
    org: 'Shop4D (Auto Profit Masters)',
    start: 'Jun 2021',
    end: 'Jul 2021',
    bullets: [
      'Completed 100 hour internship at Shop4D through the Jefferson County Executive High School Internship Program.',
    ],
  },
];

export const art_skill_areas: string[] = ['Graphic Design', 'Logo Design', 'Plein Air Painting', 'Oil Painting', 'Drawing', 'Digital Illustration', 'Digital Marketing' ];
export const tech_skill_areas: string[] = ['Robotics', 'UI/UX', 'Full-Stack', 'DevOps', 'Cloud'];
// export const growing_areas: string[] = ['AI/ML', 'Computer Vision', 'Embedded', 'Cyber Security'];

export const tech_skills: string[] = ['Docker', 'ROS2', 'YOLO', 'OpenCV', 'Agentic Development', 'CI/CD', 'AWS', 'Kubernetes', 'Linux', 'Git', 'BitBucket', 'Grafana', 'Zed', 'Nvim', 'VSCode'];
export const prog_languages: string[] = ['Python', 'C', 'C++', 'Rust', 'TypeScript', 'JavaScript', 'Prisma', 'Scala', 'Julia', 'Astro', 'Node.js', 'React.js', 'Jest', 'LaTeX', 'PHP', 'HTML', 'CSS'];
export const art_skills: string[] = ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'];
export const profesh_skills: string[] = ['Excel', 'PowerPoint', 'Word', 'Management',  'Leadership'  ];
export const music_skills: string[] = ['Viola', 'Guitar', 'Ableton Live', 'Max'];

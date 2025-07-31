export const personalInfo = {
  name: "Alfredo Gonzalez-Martinez",
  location: "Los Angeles, CA 91335",
  github: "https://github.com/Alzy",
  linkedin: "https://www.linkedin.com/in/alfredo-gonzalez-mar/",
};

export const workExperience = [
  {
    company: "HEAT LLC",
    location: "Los Angeles, CA",
    position: "Senior Developer / Head of 3D Pipeline Development",
    period: "2022 - Present",
    achievements: [
      "Led development of the company's online 3D technical stack and animation pipeline.",
      "Built and led AI-driven research and development of the auto-rigging pipeline including voxel-based rigging and pose inference systems.",
      "Designed a custom humanoid IK system for complex animation retargetting.",
      "Developed a cross-platform plugin manager/portal in C++.",
      "Authored and maintained plugins for Blender, Daz, Unity, and Unreal Engine.",
    ],
    technologies: ["TypeScript", "Three.js", "React", "Bun", "Docker", "Python", "C++", "QT", "Rust", "WGPU", "TypeORM", "Postgres", "Redis", "Blender API", "Unity", "Unreal Engine"],
  },
  {
    company: "Independent",
    location: "Los Angeles, CA",
    position: "Freelance Developer",
    period: "July 2020 - Present",
    achievements: [
      "Developed custom automation tools, web apps, and full-scale CMS integrations across diverse technology stacks.",
      "Built and maintained Shopify and Magento stores, and sites using Kirby, Hugo, Astro, React, and Vue.",
      "Optimized legacy codebases and provided deep technical knowledge across frontend, backend, and DevOps.",
      "Handled SEO tuning, GTM integration, and full custom builds for diverse client requirements.",
    ],
    technologies: ["React", "Vue", "Typescript", "JavaScript", "Sass", "PHP", "Docker", "AWS", "Shopify", "Magento", "Kirby", "Hugo", "Astro", "Tailwind", "Bulma", "SEO", "GTM"],
  },
  {
    company: "Scratch Tools LLC",
    location: "Los Angeles, CA",
    position: "Lead Developer / Co-Founder",
    period: "June 2017 - July 2024",
    achievements: [
      "Founded and led Education Technology company focused on STEM classroom tools for calculation-dense documents.",
      "Designed and built the entire stack using Nuxt, Vue, TypeScript, Laravel, Postgres, and Redis.",
      "Created a smooth, distraction-free writing experience tailored for students and classrooms.",
      "Participated in USC's Viterbi Startup Garage and NSF I-Corps program for startup validation.",
    ],
    technologies: ["Nuxt", "Vue", "TypeScript", "Laravel", "Postgres", "Redis", "JavaScript", "Heroku", "AWS"],
  },
  {
    company: "1646 Ideation Studio",
    location: "Los Angeles, CA",
    position: "Fullstack Developer / Partner",
    period: "September 2015 - July 2020",
    achievements: [
      "Partnered as lead developer with local design firm, collaborating on diverse technology projects.",
      "Developed user interface improvements for software and UX-rich websites and web applications.",
      "Built software for art installations and provided technical and creative consultations.",
      "Created websites across platforms including Squarespace, Shopify, WooCommerce, WordPress, Magento, Laravel, and Django.",
    ],
    technologies: ["Squarespace", "Shopify", "WooCommerce", "WordPress", "Magento", "Laravel", "Django", "JavaScript", "PHP", "Python", "HTML", "CSS"],
  },
  {
    company: "Pro Beauty Online",
    location: "Los Angeles, CA",
    position: "Web Developer and Administrator",
    period: "October 2016 - January 2019",
    achievements: [
      "Built and maintained the company's Magento eCommerce webstore (probeautyonline.com).",
      "Developed custom administrative tools and maintained/customized Shopify webstore.",
      "Provided IT consultation using stack: Magento, PHP, Bootstrap, MySQL, JavaScript, CSS3, Python, PostgreSQL, Django, TKinter.",
    ],
    technologies: ["Magento", "PHP", "Bootstrap", "MySQL", "JavaScript", "CSS3", "Python", "PostgreSQL", "Django", "TKinter", "Shopify"],
  },
  {
    company: "Khoravsky Enterprises",
    location: "Los Angeles, CA",
    position: "Web Administrator / Developer",
    period: "August 2013 - July 2016",
    achievements: [
      "Built and maintained various websites, primarily WHcamera.com and astronomy-focused platforms.",
      "Developed science expo websites (SIA Expo) and astronomy resources (iNova CCD USA, DoctorDReviews, TelescopeS.net).",
      "Handled social media, inventory, data entry, and IT duties for the organization.",
    ],
    technologies: ["Magento", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    company: "Veterans First, Orange County",
    location: "Los Angeles, CA",
    position: "Web  Intern",
    period: "August 2012 - December 2012",
    achievements: [
      "Developed and briefly maintained the joomla based website for the non-profit organization",
      "Provided website administration, updating contents and events listed on the site.",
    ],
    technologies: ["Joomla", "PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
];

export const clients = [
  {
    name: "Honest History",
    description: "Built and maintain the companies bespoke subscription automation tool which automatically renews subscription orders with curated product selections based on customer's purchases.",
    technologies: ["Shopify Admin API", "GraphQL", "Typescript", "Nuxt", "Vue 3", "Google Cloud", "Google Firestore"],
    website: "https://honesthistory.co/"
  },
  {
    name: "Bayflats Lodge",
    description: "I periodically assist with Bayflats with website and custom booking engine troubleshooting as well provide support to the marketing teams technical needs.",
    technologies: ["Woocommerce", "PHP", "Shopify", "Typescript", "Node.js", "MySQL", "Google Tag Manager"],
    website: "https://www.bayflatslodge.com/"
  },
  {
    name: "HEAT",
    description: "Originally brought on as an independent contractor, I built the companies Blender plugin which included debugging tools, retargeting, queue, and animation tools, as well as an updater. The plugin also includes a web portal component which eventually became the basis for the companies bridge system.",
    technologies: ["Python", "Blender API", "React", "Typescript", "Requests", "Pip", "SQLite"],
    website: "https://github.com/HEAT-tech/heat-blender-tools"
  },
  {
    name: "ArtRank",
    description: "Designed and built the entire technical stack for this art installation by Sergio Bromberg. The project included a custom CMS for the artist to remotely update the content onscreen as well as middleware to control the display orientation when rotated. Exhibited at the Art Los Angeles Contemporary, 2017. ",
    technologies: ["Javascript", "Custom CMS", "PHP", "SQLite", "Windows SDK"],
    website: "https://www.sergiobromberg.com/artrank"
  },
  {
    name: "Palacio Palace",
    description: "Built an online live streaming platform/pipeline allowing Palacio to host virtual multimedia musical performances online (https://palacio.tv) during the height of the pandemic. Users were able to anonymously view the performance online and chat with other attendees.",
    technologies: ["Typescript", "Python", "Nuxt", "Vue", "NodeJs", "Nginx", "PostgreSQL", "RTMP", "OSC", "Docker", "AWS"],
    website: "https://youtu.be/gB3HwQiEeKs?si=UHz8D9iTmgz23EsE&t=243"
  },
  {
    name: "Bio-Behavioral Medical Clinics",
    description: "Built the clinics website as well as administration and automation tools to collect client information and inform patients of medical document updates.",
    technologies: ["PHP", "Python", "Javascript", "Wordpress", "Google Tag Manager", "Google Datalayer"],
    website: "https://bbmc-inc.com/"
  },
  {
    name: "MIT - School of Architecture and Planning",
    description: "Inherited and maintained MIT's Future Urban Collectives website, a student research project from the department of architecture and planning. I worked directly with the director and lead researcher on the project to troubleshoot deployment issues, complete the website and provide additional maintenance.",
    technologies: ["Preact", "Javascript", "JQuery", "Css"],
    website: "https://urbancollectives.org/"
  },
  {
    name: "A People’s EPA",
    description: "Built the website and administration tools for the A People’s EPA organization. Tooling includes a PDF parser for quicker uploads of documents and custom search functionality.",
    technologies: ["PHP", "Javascript", "Kirby"],
    website: "https://www.apeoplesepa.org/"
  },
  {
    name: "Hotel Saint Vincent",
    description: "Assisted the marketing teams technical needs.",
    technologies: ["Javascript", "Google Tag Manager", "Google Datalayer"],
    website: "https://saintvincentnola.com/"
  },
  {
    name: "Townschool",
    description: "Assisted this institution with static site development for several programs and landing pages.",
    technologies: ["Nuxt", "Vue", "Javascript", "AWS"],
    website: "https://www.townschool.com/"
  },
  {
    name: "LAD Design",
    description: "Inherited the development of the website part way through development. Brought project to completion.",
    technologies: ["Javascript", "JQuery", "Cargo"],
    website: "https://laddesign.net/"
  },
  {
    name: "Michael W. Folonis Architects",
    description: "I built and support the companies website. This codebase is in the legacy Squarespace API - back when Squarespace had a custom developer ecosystem.",
    technologies: ["Javascript", "HTML", "CSS", "Squarespace"],
    website: "https://folonisarchitects.com"
  },
];

export const education = [
  {
    institution: "California State University-Northridge",
    location: "Northridge, CA",
    degree: "Bachelor's degree in Mechanical Engineering",
    period: "2020 - 2023",
    achievements: [],
  },
  {
    institution: "Pierce College",
    location: "Winnetka, CA",
    degree: "Associate's degree in Engineering and Computer Science",
    period: "2021",
    achievements: [],
  },
];

export const skills = {
  programmingLanguages: [
    "TypeScript",
    "Python",
    "C++",
    "Rust",
    "WGSL",
    "PHP",
    "C#",
    "JavaScript",
    "Bash",
    "SQL",
    "Lua",
  ],
  frontendDevelopment: [
    "React",
    "Vue",
    "Preact",
    "Next.js",
    "Nuxt",
    "Tailwind CSS",
    "Astro",
    "Hugo",
    "HTML",
    "Sass",
    "CSS",
  ],
  backendDevelopment: [
    "Node.js",
    "Laravel",
    "Django",
    "FastAPI",
  ],
  databaseAndStorage: [
    "PostgreSQL",
    "MySQL",
    "Maria",
    "SQLite",
    "Mongo",
    "Redis",
    "TypeORM",
  ],
  cloudAndDevOps: [
    "AWS",
    "Nginx",
    "Apache",
    "LetsEncrypt",
    "Github Actions",
    "Bitbucket Pipelines",
    "Docker",
    "Linode",
    "Google Cloud",
    "Heroku",
    "BlueHost",
    "Siteground",
  ],
  toolsAndServices: [
    "Git",
    "GitHub",
    "SEO",
    "Npm",
    "Bun",
    "Yarn",
    "Pip",
    "Cargo",
    "Composer",
    "REST APIs",
    "Shopify",
    "WooCommerce",
    "Magento",
    "Kirby",
    "WordPress",
    "Three.js",
    "Blender API",
    "WGPU",
    "QT",
    "Unity",
    "Unreal Engine",
    "GTM",
    "Daz",
    "Godot",
    "JUCE",
    "Choc",
    "CMake",
  ],
};

export const projects = [
  {
    title: "Xochi Thumbnailer - Audio Waveform Generator",
    github: "https://github.com/Alzy/Xochi-Thumbnailer",
    description: [
      "Python-based tool that creates visually appealing and informative waveform images from audio files, inspired by Pioneer/AlphaTheta and Denon DJ equipment.",
      "Implements multi-band frequency analysis (low, mid, high) without FFT, using efficient filtering for real-time performance.",
      "Generates multiple waveform styles: rainbow coloring, three-band visualization, and interpolated rendering with custom colors.",
      "Created custom XPKS binary format for compact multi-resolution peak data storage with 1-3 mip levels.",
      "Part of the larger Xochi Performer performance tool ecosystem, designed for modular iteration and extensibility.",
    ],
    technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Pillow", "Pydub", "Audio Processing", "DSP", "Binary File Formats"],
  },
 {
   title: "HEAT 3D Pipeline",
   github: "https://heat.tech/",
   description: [
     "Led development of AI-driven auto-rigging pipeline using TypeScript, Python, Rust, and WGPU.",
     "Implemented voxel-based rigging and pose inference systems for enhanced 3D workflows.",
     "Created custom humanoid IK system for complex animation retargetting across diverse 3D models and armatures.",
     "Wrote a cross-platform plugin manager in C++ and QT.",
     "Developed plugins for Blender, Daz, Unity, and Unreal Engine integration.",
   ],
   technologies: ["TypeScript", "Python", "Rust", "WGPU", "C++", "QT", "Three.js", "React", "NextJS", "Blender API", "Unity", "Unreal Engine", "Daz Studio", "TypeORM", "Postgres", "Redis"],
 },
 {
   title: "STEMLINK (formerly Scratch Tools)",
   github: "https://stemlink.net/",
   description: [
     "Built comprehensive education technology platform for STEM classrooms using modern full-stack architecture.",
     "Designed and implemented entire system using Nuxt, Vue, TypeScript, Laravel, Postgres, and Redis.",
     "Created proprietary calculation editor 'Scratchpad' - an online workspace for producing calculations with word processor efficiency.",
     "Developed dedicated calculation processor for drafting and sharing math-based information in digital format.",
     "Enabled new level of collaboration between educators and students through seamless work creation and sharing.",
   ],
   technologies: ["Nuxt", "Vue", "TypeScript", "Laravel", "Postgres", "Redis", "JavaScript", "PHP", "HTML", "CSS"],
 },
 {
   title: "OBS MIDI",
   github: "https://github.com/Alzy/obs-midi",
   description: [
     "Developed C++ plugin for OBS streaming software enabling MIDI device control integration.",
     "Built bidirectional communication system allowing MIDI devices to trigger OBS events and vice versa.",
     "Solved efficiency challenges in stream source control, replacing traditional mouse/keyboard workflows.",
     "Collaborated with developer Chris through OBS Discord community for ongoing maintenance and updates.",
     "Ongoing project since June 2020 providing enhanced streaming control capabilities.",
   ],
   technologies: ["C++", "MIDI", "OBS Studio", "CMake", "Qt", "JSON"],
 },
 {
   title: "Palacio.tv",
   github: "https://palacio.tv",
   description: [
     "Created virtual venue platform hosting digital and physical audiovisual experiences using Python, Django, Vue.js, and Unreal Engine.",
     "Rapidly pivoted from physical events to virtual platform during COVID-19 pandemic within a single weekend.",
     "Built complete platform infrastructure including self-hosted media server and real-time chat system.",
     "Hosted 2,201 viewers in last 6 months of 2020, continuing weekly virtual events.",
     "Established cultural hub combining traditional event hosting with cutting-edge virtual technology.",
   ],
   technologies: ["Typescript", "Python", "Nuxt", "Vue", "NodeJs", "Nginx", "PostgreSQL", "RTMP", "OSC", "Docker", "AWS"],
 },
 {
   title: "Serious Business Virtual Gallery",
   github: "https://seriousbusiness.la/",
   description: [
     "Developed smartphone app-based virtual art gallery using C#, C++, and Unreal Engine.",
     "Created independent art space free from private investor influence, enabling creative freedom for artists.",
     "Built immersive virtual gallery experience transcending physical space limitations.",
     "Designed alternative to traditional exclusive art spaces, focusing on cultural benefit over profit.",
     "Collaborated with 1646 Ideation Studio to deliver innovative art exhibition platform.",
   ],
   technologies: ["C#", "C++", "Unreal Engine", "Blueprint", "Android", "iOS", "Mobile Development", "3D Graphics"],
 },
 {
   title: "alzyOSC - Ableton Live Remote Control",
   github: "https://github.com/Alzy/alzyOSC",
   description: [
     "Built Ableton Live remote script using Python, Ableton API, Vue.js, and Electron.",
     "Extended LiveOSC2 functionality to expose Ableton functions through OSC interface.",
     "Created seamless integration between digital audio workstation and external control systems.",
     "Enabled remote control and automation capabilities for music production workflows.",
   ],
   technologies: ["Python", "Ableton Live API", "Vue.js", "Electron", "OSC", "JavaScript", "Node.js"],
 },
];

export const awards = [
  {
    name: "TechCrunch Disrupt 2021 – Participant",
    issuer: "TechCrunch",
    date: "September 2021",
    type: "Pitch Competition",
    position: "Competed",
  },
  {
    name: "Bronco Startup Challenge",
    issuer: "Cal Poly Pomona",
    date: "Apr 2021",
    type: "Pitch Competition",
    position: "2nd Place Winner",
  },
  {
    name: "Fast Pitch Competition",
    issuer: "Cal Poly Pomona",
    date: "Feb 2021",
    type: "Pitch Competition",
    position: "Winner",
  },
  {
    name: "NSF I-Corps – Participant",
    issuer: "National Science Foundation",
    date: "Jan 2021",
    type: "National Program",
    position: "Completed Program",
  },
  {
    name: "Viterbi Startup Garage – Resident",
    issuer: "USC",
    date: "2020",
    type: "Accelerator Program",
    position: "Resident",
  },
];

export const publications = [
  {
    title: "Controlling a Below-the-Elbow Prosthetic Arm Using the Infinity Foot Controller",
    journal: "Prosthesis",
    date: "November 2023",
    authors: "Peter L. Bishay, Jack Wilgus, RunRun Chen, Diego Valenzuela, Victor Medina, Calvin Tan, Taylor Ittner, Miguel Caldera, Cristina Rubalcava, Shaghik Safarian, Gerbert Funes Alfaro, Alfredo Gonzalez-Martinez, Matthew Gosparini, Jose Fuentes-Perez, Andy Lima, Jonnathan Villalobos, Abrahan Solis",
    type: "Technical Note",
    doi: "10.3390/prosthesis5040084",
    abstract: "This work presents the 'Infinity Foot Controller' as a new approach to control a five-finger below-the-elbow prosthetic arm...",
    keywords: ["foot controller", "wrist bending and rotation", "haptic feedback"],
    url: "https://www.mdpi.com/2673-1592/5/4/84" // optional
  }
];
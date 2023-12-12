// gitprofile.config.js

const config = {
  github: {
    username: 'ToniColeman', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'toni-t-coleman',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'ltonicolemanl@outlook.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'SQL',
    'Cloud Architecture',
    'AWS',
    'Visual Studio',
    'Packet Tracer',
    'Microsoft Excel',
  ],
  experiences: [
    {
      company: 'Direct Interactions, Inc.',
      position: 'Customer Support Agent',
      from: 'June 2021',
      to: 'September 2021',
      companyLink: 'https://directinteractions.com/',
    },
    {
      company: 'Whole Foods Market IP, Inc.',
      position: 'In-Store Shopper',
      from: 'October 2020',
      to: 'May 2021',
      companyLink: 'https://www.wholefoodsmarket.com/',
    },
  ],
  certifications: [
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      body: 'Earners of this badge have taken the AWS Academy Cloud Foundations course.',
      year: 'December 2023',
      link: 'https://www.credly.com/badges/6fa7bb8b-322f-4d2d-b1db-a3f9b24cf3ee/linked_in_profile'
    },
    {
      name: 'ISC2 Candidate',
      body: 'ISC2 Candidates are individuals pursuing or considering a cybersecurity certification. To become a Candidate, the individual must apply online and provide minimum identifying information, as well as affirm that they will abide by the ISC2 Code of Ethics and Privacy Policy.',
      year: 'September 2023',
      link: 'https://www.credly.com/badges/a1664352-4ea2-4686-87dc-ba042fef3b73/linked_in_profile'
    },
    {
      name: 'Introduction to Packet Tracer',
      body: 'Cisco verifies the earner of this badge has knowledge and skills to create digital models of IP Networks and IoT Systems using Cisco Packet Tracer.',
      year: 'September 2023',
      link: 'https://www.credly.com/badges/a5ad6833-6759-472b-b701-b4efcc051871/linked_in_profile'
    },
  ],
  education: [
    {
      institution: 'East Carolina University',
      degree: 'Bachelor of Science in Business Administration',
      from: '2020',
      to: '2024',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 5, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

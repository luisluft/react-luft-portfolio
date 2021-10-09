import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luis Luft | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is', // Hello, my name is
  name: 'Luis Luft', // John
  subtitle: "I'm a self taught developer", // I'm the Unknown Developer.
  cta: 'Know more', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Developer as a hobby and profession. In love with technology. ',
  paragraphTwo:
    'Experienced with Vue, React, VanillaJS, PHP, Laravel, Git, Heroku, Linux and more...',
  paragraphThree: 'Brazilian jiu-jitsu and video games enthusiast.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bookmark-Keeper.jpg',
    title: '18+ vanillaJS websites',
    info: 'Bookmark keeper app. Contains 18+ webapps developed using vanilla javascript.',
    info2: '',
    url: 'https://luisluft.github.io/luftBookmarkKeeper/',
    repo: 'https://github.com/luisluft/luftBookmarkKeeper', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'my-react-apps.jpg',
    title: '15+ react webapps',
    info: 'Website that contains links to 15+ webapps developed using reactjs.',
    info2: '',
    url: 'https://luft-react-apps.netlify.app',
    repo: 'https://github.com/luisluft/my-react-apps', // if no repo, the button will not show up
  },
];

export const contactData = {
  cta: 'luberluft@gmail.com', // call to action text for the contact section
  btn: '', // text inside the button
  email: 'luberluft@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'credit-card',
      url: 'https://www.upwork.com/freelancers/~01885c2aefe9b42575',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luisluft/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/luisluft',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

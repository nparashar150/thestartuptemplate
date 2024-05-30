import { About, Banner, FeatureCards, Footer, FrequentlyAskedQuestions, Hero, Navbar, Newsletter, Partners } from "./types";

const NAVBAR: Navbar = {
  leftLinks: [
    {
      href: "/",
      icon: "logo",
      target: "_self",
      label: "'The Startup'",
    },
  ],
  centerLinks: [
    {
      href: "/dashboard",
      target: "_self",
      label: "Playground",
    },
    {
      href: "https://docs.side.quik.run",
      target: "_blank",
      label: "Docs",
    },
    {
      href: "/#faq",
      target: "_self",
      label: "FAQ",
    },
    {
      href: "https://github.com/nparashar150/thestartuptemplate/blob/main/CONTRIBUTING.md",
      target: "_blank",
      label: "Contribute",
    },
  ],
  rightLinks: [
    {
      icon: "gitHub",
      label: "Github",
      target: "_blank",
      href: "https://github.com/nparashar150/thestartuptemplate",
    },
  ],
};

const HERO: Hero = {
  pretitle: "Introducing The Startup Template",
  title: "{{Simplify}}  your side {{hustle}}  journey",
  subtitle: "Everything you need to build, launch, and grow your web app effortlessly. Focus on your vision, and start making your first $ faster.",
  primaryButtonText: "npx create-thestartuptemplate@latest",
  primaryButtonShowIcon: true,
  secondaryButtonText: "Playground",
  curlyText: "try now",
  cards: {
    tweetCard: {
      name: "Prabhat Sachdeva",
      username: "@prabhatexit0",
      avatarUrl: "https://avatars.githubusercontent.com/u/91917879?v=4",
      tweet: "This landing page is awesome! #TheStartupTemplate",
    },
    pricingCard: {
      planName: "Free",
      pricePerMonth: "$0",
      curlyText: "get started",
      badgeTitle: "Most Popular",
      primaryButtonText: "Read the Docs",
      description: "All the tools you need to launch fast and efficiently.",
      onPrimaryButtonClick: () => window.open("https://docs.side.quik.run/tutorials/playground-builder"),
      features: [
        {
          title: "Pre-built Authentication",
          icon: "keyRound",
        },
        {
          title: "Email Notifications",
          icon: "atSign",
        },
        {
          title: "Pre-built Components",
          icon: "code2",
        },
        {
          title: "Plug-and-Play Database",
          icon: "databaseZap",
        },
        {
          title: "Live Playground",
          icon: "settings2Icon",
        },
      ],
    },
    serviceCard: {
      title: "Theme Switcher",
      description: "Give your users the choice to switch between themes effortlessly, enhancing the experience.",
    },
    aboutCard: {
      name: "Naman Parashar",
      designation: "Product Developer",
      description: "Passionate about designing & coding great user experiences on the web.",
      socialLinks: {
        twitter: "https://twitter.com/nparashar150",
        linkedIn: "https://www.linkedin.com/in/nparashar150",
        github: "https://github.com/nparashar150",
      },
    },
  },
};

const PARTNERS: Partners = {
  title: "Tools and Technologies",
  subtitle: "List of tools and technologies used in The Startup Template",
  partners: [
    {
      name: "Next.js",
      logoUrl: "/next-js.svg",
    },
    {
      name: "EdgeDB",
      logoUrl: "/edb.png",
    },
    {
      name: "Turborepo",
      logoUrl: "/turborepo.png",
    },
    {
      name: "Next Auth",
      logoUrl: "/next-auth.png",
    },
    {
      name: "ShadcnUI",
      logoUrl: "/shadcn.png",
    },
    {
      name: "Mailgun",
      logoUrl: "/mailgun.svg",
    },
  ],
};

const ABOUT: About = {
  title: "About The Startup Template",
  subtitle:
    "This is a pre-built template using Next.js, EdgeDB, Turborepo, Next Auth, ShadcnUI and Mailgun to help you quickly set up and launch your app. It includes a beautiful landing page, a dashboard, and essential integrations, saving you time and effort.",
  aboutImage: "/pilot.png",
  stats: [
    {
      title: "Downloads",
      count: 290,
    },
    {
      title: "Users",
      count: 10,
    },
    {
      title: "Stars",
      count: 2,
    },
    {
      title: "Products",
      count: 1,
    },
  ],
};

const FEATURE_CARDS: FeatureCards = {
  title: "Accelerate your development and engagement",
  subtitle: "Seamlessly integrate authentication, notifications, data management, and SEO optimization",
  tags: [],
  features: [
    {
      icon: "keyRound",
      title: "Authentication",
      description: "Simplify development by integrating authentication effortlessly.",
    },
    {
      icon: "atSign",
      title: "Email Notifications",
      description: "Enhance user engagement with automated email alerts for important events.",
    },
    {
      icon: "databaseZap",
      title: "Data Management",
      description: "Efficiently manage and store user data with EdgeDB.",
    },
    {
      icon: "code2",
      title: "Playground",
      description: "Experiment with the template and create your custom configurations with ease.",
    },
  ],
};

const BANNER: Banner = {
  title: "Accelerate your project, launch faster, and succeed",
  subtitle: "Effortlessly integrate auth, db, and email communication. Spend more time building your product, less on integrations. Get the tools you need to launch quickly with ease.",
  primaryButtonText: "Playground",
  secondaryButtonText: "Docs",
  onPrimaryButtonClick: () => {
    window.location.href = "/dashboard";
  },
  onSecondaryButtonClick: () => window.open("https://docs.side.quik.run"),
};

const NEWSLETTER_CONFIG: Newsletter = {
  buttonText: "Subscribe",
  title: "Join my newsletter",
  inputPlaceholder: "pro.dev@gmail.com",
  subtitle: "Get occasional updates, tips, and tricks (I promise not to spam you, I'm too lazy for that)",
  curlyText: "subscribe now",
};

const FREQUENTLY_ASKED_QUESTIONS: FrequentlyAskedQuestions = {
  title: "Frequently Asked Questions",
  contactEmail: "nparashar150@gmail.com",
  subtitle: "Find answers to common questions about The Startup Template",
  items: [
    {
      key: "item-1",
      question: "What is The Startup Template?",
      answer:
        "The Startup Template is a template built using EdgeDB, Next.js, ShadcnUI, and NextAuth to help you quickly set up and launch your web app. It includes a beautiful landing page, a dashboard, and essential integrations, saving you time and effort. It significantly reduces development time and effort, allowing you to focus on what truly matters.",
    },
    {
      key: "item-4",
      question: "Where can I find the documentation?",
      answer: "Comprehensive documentation is available at https://docs.side.quik.run. It includes guides on getting started, customization options, and more.",
    },
    {
      key: "item-5",
      question: "Can I use The Startup Template for commercial projects?",
      answer:
        "Yes, you can use The Startup Template for both personal and commercial projects. It's designed to help you launch your web app quickly, whether it's a hobby project or a business venture. Provided you mention the original authors.",
    },
    {
      key: "item-3",
      question: "How can I support the development of The Startup Template?",
      answer: "If you find this project helpful, please consider supporting our work by donating https://github.com/sponsors/nparashar150. Your support helps us continue to improve and maintain the template.",
    },
    {
      key: "item-2",
      question: "Do you offer support if I run into issues?",
      answer: "If you have any questions or need assistance, feel free to reach out to me at nparashar150@gmail.com. We're here to help you get the most out of The Startup Template.",
    },
  ],
};

const FOOTER: Footer = {
  brand: [
    {
      href: "/",
      icon: "logo",
      target: "_self",
      label: "'The Startup'",
    },
  ],
  "Connect with me": [
    {
      href: "mailto:nparashar150@gmail.com",
      target: "_self",
      label: "Email: nparashar150@gmail.com",
    },
    {
      href: "https://github.com/nparashar150",
      target: "_blank",
      label: "GitHub: nparashar150",
    },
    {
      href: "https://twitter.com/nparashar150",
      target: "_blank",
      label: "Twitter: @nparashar150",
    },
  ],
  Resources: [
    {
      href: "https://docs.side.quik.run",
      target: "_blank",
      label: "Docs",
    },
    {
      href: "#faq",
      target: "_self",
      label: "Frequency Asked Questions",
    },
  ],
};

const config = {
  NAVBAR,
  HERO,
  PARTNERS,
  ABOUT,
  FEATURE_CARDS,
  BANNER,
  NEWSLETTER_CONFIG,
  FREQUENTLY_ASKED_QUESTIONS,
  FOOTER,
};

type Config = typeof config;

export default config;
export type { Config };

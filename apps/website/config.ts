import { Icon, Icons } from "@repo/ui/components/icons";
import { About, Banner, FeatureCards, Footer, FrequentlyAskedQuestions, Navbar, Newsletter, Partners } from "./types";

const NAVBAR: Navbar = {
  leftLinks: [
    {
      href: "/",
      target: "_self",
      icon: Icons.logo,
      label: "'The Startup'",
    },
  ],
  centerLinks: [
    {
      href: "/dashboard",
      target: "_self",
      label: "Demo",
    },
    {
      href: "/blogs",
      target: "_blank",
      label: "Blogs",
    },
    {
      href: "/#faq",
      target: "_self",
      label: "FAQ",
    },
  ],
  rightLinks: [
    {
      label: "Github",
      target: "_blank",
      icon: Icons.gitHub as Icon,
      href: "https://github.com/nparashar150/thestartuptemplate",
    },
  ],
};

const HERO = {
  pretitle: "Introducing The Startup Template",
  title: "The Startup Template",
  subtitle: "Everything you need to build, launch, and grow your web app effortlessly. Focus on your vision, and start making your first $ faster.",
  primaryButtonText: "npx create-thestartuptemplate my-app",
  secondaryButtonText: "Demo",
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
  aboutImage: "https://raw.githubusercontent.com/leoMirandaa/shadcn-landing-page/main/src/assets/pilot.png",
  stats: [
    {
      title: "Downloads",
      count: 90,
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
      icon: Icons.keyRound,
      title: "Authentication",
      description: "Simplify development by integrating customizable user authentication features effortlessly.",
    },
    {
      icon: Icons.atSign,
      title: "Email Notifications",
      description: "ImpEnhance user engagement with automated email alerts for important events.",
    },
    {
      icon: Icons.databaseZap,
      title: "Data Management",
      description: "Efficiently manage and store user data with robust database solutions.",
    },
    {
      icon: Icons.trendingUp,
      title: "SEO Optimization",
      description: "Improve visibility and rankings in search engine results with built-in SEO optimization tools.",
    },
  ],
};

const BANNER: Banner = {
  title: "Accelerate your project, launch faster, and succeed",
  subtitle: "Effortlessly integrate auth, db, and email communication. Spend more time building your product, less on integrations. Get the tools you need to launch quickly with ease.",
  primaryButtonText: "Request a Demo",
  secondaryButtonText: "View all features",
  onPrimaryButtonClick: () => {
    window.location.href = "/dashboard";
  },
  onSecondaryButtonClick: () => {
    window.location.href = "/#features";
  },
};

const NEWSLETTER_CONFIG: Newsletter = {
  buttonText: "Subscribe",
  title: "Join my newsletter",
  inputPlaceholder: "pro.dev@gmail.com",
  subtitle: "Get occasional updates, tips, and tricks (I promise not to spam you, I'm too lazy for that)",
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
        "The Startup Template is a pre-built template using EdgeDB, Next.js, ShadcnUI, and NextAuth to help you quickly set up and launch your web app. It includes a beautiful landing page, a dashboard, and essential integrations, saving you time and effort.",
    },
    {
      key: "item-2",
      question: "Do you offer support if I run into issues?",
      answer: "If you have any questions or need assistance, feel free to reach out to me at nparashar150@gmail.com. We're here to help you get the most out of The Startup Template.",
    },
    {
      key: "item-3",
      question: "How can I support the development of The Startup Template?",
      answer: "If you find this project helpful, please consider supporting our work by donating https://github.com/sponsors/nparashar150. Your support helps us continue to improve and maintain the template.",
    },
    {
      key: "item-4",
      question: "Where can I find the documentation?",
      answer: "Comprehensive documentation is available here. It includes guides on getting started, customization options, and more.",
    },
    {
      key: "item-5",
      question: "Can I use The Startup Template for commercial projects?",
      answer:
        "Yes, you can use The Startup Template for both personal and commercial projects. It's designed to help you launch your web app quickly, whether it's a hobby project or a business venture. Provided you mention the original authors.",
    },
  ],
};

const FOOTER: Footer = {
  brand: [
    {
      href: "/",
      target: "_self",
      icon: Icons.logo,
      label: "'The Startup'",
    },
  ],
  Resources: [
    {
      href: "/",
      target: "_self",
      label: "Documentation",
    },
    {
      href: "/",
      target: "_self",
      label: "Frequency Asked Questions",
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
};

export { ABOUT, BANNER, FEATURE_CARDS, FOOTER, FREQUENTLY_ASKED_QUESTIONS, HERO, NAVBAR, NEWSLETTER_CONFIG, PARTNERS };


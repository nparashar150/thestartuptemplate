import { FrequentlyAskedQuestions } from "./types";

const FREQUENTLY_ASKED_QUESTIONS: FrequentlyAskedQuestions = {
  title: "Frequently Asked Questions",
  contactEmail: "nparashar150@gmail.com",
  subtitle: "Find answers to common questions about The Startup Template",
  items: [
    {
      key: "item-1",
      question: "What is The Startup Template?",
      answer: "The Startup Template is a pre-built template using EdgeDB, Next.js, ShadcnUI, and NextAuth to help you quickly set up and launch your web app. It includes a beautiful landing page, a dashboard, and essential integrations, saving you time and effort."
    },
    {
      key: "item-2",
      question: "Do you offer support if I run into issues?",
      answer: "If you have any questions or need assistance, feel free to reach out to me at nparashar150@gmail.com. We're here to help you get the most out of The Startup Template."
    },
    {
      key: "item-3",
      question: "How can I support the development of The Startup Template?",
      answer: "If you find this project helpful, please consider supporting our work by donating https://github.com/sponsors/nparashar150. Your support helps us continue to improve and maintain the template."
    },
    {
      key: "item-4",
      question: "Where can I find the documentation?",
      answer: "Comprehensive documentation is available here. It includes guides on getting started, customization options, and more."
    },
    {
      key: "item-5",
      question: "Can I use The Startup Template for commercial projects?",
      answer: "Yes, you can use The Startup Template for both personal and commercial projects. It's designed to help you launch your web app quickly, whether it's a hobby project or a business venture. Provided you mention the original authors."
    },
  ]
}

export { FREQUENTLY_ASKED_QUESTIONS };

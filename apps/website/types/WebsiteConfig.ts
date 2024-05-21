import { Icon } from "@repo/ui/components/icons";
import { HTMLAttributeAnchorTarget } from "react";

export type {
  About,
  Banner,
  Feature,
  FeatureCards,
  FeatureList,
  Footer,
  FooterItem,
  FrequentlyAskedQuestionItem,
  FrequentlyAskedQuestions,
  Highlights,
  Member,
  Navbar,
  NavbarItem,
  Newsletter,
  Partner,
  Partners,
  Pricing,
  PricingCard,
  Social,
  Stat,
  Team,
  Testimonial,
  Testimonials
};

type Partners = Section<{ partners: Partner[] }>;
type About = Section<{ stats: Stat[]; aboutImage: string }>;
type Highlights = Section<{ features: Feature[] }>;
type FeatureCards = Section<{ tags: string[]; features: Feature[] }>;
type FeatureList = Section<{ features: Feature[]; featureImage: string }>;
type Banner = Section<{ primaryButtonText: string; onPrimaryButtonClick: () => void; secondaryButtonText: string; onSecondaryButtonClick: () => void }>;
type Testimonials = Section<{ testimonials: Testimonial[] }>;
type Team = Section<{ members: Member[] }>;
type Pricing = Section<{ plans: PricingCard[] }>;
type Newsletter = Section<{ buttonText: string; inputPlaceholder: string }>;
type FrequentlyAskedQuestions = Section<{ contactEmail: string; items: FrequentlyAskedQuestionItem[] }>;

interface Navbar {
  leftLinks: NavbarItem[];
  centerLinks: NavbarItem[];
  rightLinks: NavbarItem[];
}

interface Footer {
  brand: [FooterItem];
  [key: string]: FooterItem[];
}

interface NavbarItem {
  icon?: Icon;
  label?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
}

interface Partner {
  name: string;
  logoUrl: string;
}

interface Stat {
  title: string;
  count: number;
}

interface Feature {
  title: string;
  description: string;
  icon: Icon | string;
}

interface Testimonial {
  name: string;
  userName: string;
  avatarUrl: string;
  description: string;
}

interface Member {
  name: string;
  position: string;
  description: string;
  socials: Social[];
}

interface Social {
  icon: Icon;
  href: string;
}

interface PricingCard {
  planName: string;
  buttonText: string;
  pricePerMonth: string;
  planDescription: string;
  features: React.ReactNode[];
}

interface FrequentlyAskedQuestionItem {
  key: string;
  question: string;
  answer: React.ReactNode;
}

type Section<T extends object> = {
  title: string;
  subtitle: string;
} & T;

interface FooterItem extends NavbarItem {}

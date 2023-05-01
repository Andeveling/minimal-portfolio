import { LinkedIn, Twitter } from "@/components/shared/icons";
import Github2 from "@/components/shared/icons/github-2";

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const NAME = 'ANDRES PARRA'
export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const DEPLOY_URL =
  "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent&project-name=precedent&repository-name=precedent&demo-title=Precedent&demo-description=An%20opinionated%20collection%20of%20components%2C%20hooks%2C%20and%20utilities%20for%20your%20Next%20project.&demo-url=https%3A%2F%2Fprecedent.dev&demo-image=https%3A%2F%2Fprecedent.dev%2Fapi%2Fog&env=DATABASE_URL,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=How%20to%20get%20these%20env%20variables%3A&envLink=https%3A%2F%2Fgithub.com%2Fsteven-tey%2Fprecedent%2Fblob%2Fmain%2F.env.example";

export const MAIL_TO = "mailto:andeveling@gmail.com";

export const SOCIAL_LINKS = [
  {
    id: "1",
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andrespsanchez/",
    icon: <LinkedIn />,
  },
  {
    id: "2",
    title: "Github",
    href: "https://github.com/Andeveling",
    icon: <Github2 />,
  },
  {
    id: "3",
    title: "Twitter",
    href: "https://twitter.com/Andeveling",
    icon: <Twitter />,
  },
];

import IconX from "@/assets/icons/IconX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGithub from "@/assets/icons/IconGithub.svg";

import { SITE_CONFIG } from "./config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/lukisans",
    linkTitle: ` ${SITE_CONFIG.title} on Github`,
    icon: IconGithub,
  },
  {
    name: "X",
    href: "https://x.com/lukisanksatriya",
    linkTitle: `${SITE_CONFIG.title} on X`,
    icon: IconX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fahmi-lukistriya/",
    linkTitle: `${SITE_CONFIG.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:fahmilukis04@gmail.com",
    linkTitle: `Send an email to ${SITE_CONFIG.title}`,
    icon: IconMail,
  },
] as const;

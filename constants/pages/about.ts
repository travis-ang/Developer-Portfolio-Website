import { SITE_IMAGES } from "../media";
import type { PageImage, Picture } from "./types";

/*
  The About copy, lifted out of components/about-me.tsx so it is data rather
  than JSX. The world reads it for the portrait's dialogue beats and /about
  renders the whole thing; both come from here, so they cannot drift apart.
*/
export interface AboutSection {
  label: string;
  paragraphs: string[];
  /**
   * Pictures for this part of the story, in the order its paragraphs mention
   * them. A narrow reader sets them between the paragraphs, earlier ones
   * taking any spare; a wide one gathers them into a gallery after the section.
   */
  photos?: Picture[];
}

export interface AboutData {
  /** What the About panel opens on. */
  greeting: string;
  /** What the typed line cycles through after "I'm ". Each carries its own a/an. */
  roles: string[];
  /** The photo on the card beside the greeting. */
  portrait: PageImage;
  /** The one line to read if you read nothing else. */
  lead: string;
  sections: AboutSection[];
  pullQuote: { text: string; caption: string };
  disciplines: string[];
}

export const ABOUT: AboutData = {
  greeting: "Hi, I'm Travis.",
  roles: [
    "a Data Science & AI student at NTU",
    "a machine learning engineer",
    "an agentic AI builder",
    "a full-stack engineer",
  ],
  portrait: SITE_IMAGES.portraitCard,

  lead: "Every system I build starts with the problem and the people who have it.",

  sections: [
    {
      label: "Background",
      paragraphs: [
        "Second year at Nanyang Technological University reading Data Science and Artificial Intelligence, looking for my next internship. So far I have built automation systems at LaLaGreen, shipped a desktop Git client with installers, and reached the finals of BrainHack Code EXP 2026.",
        "I'm interested in AI applied to real operational problems. Claude Code and MCP are part of my daily workflow, and I look for repetitive work worth automating.",
      ],
      photos: [SITE_IMAGES.brainhack],
    },
    {
      label: "How I work",
      paragraphs: [
        "Before building, I want to know who it is for and what they actually need. That habit came from leading a platoon of twenty and from pitching automation to stakeholders who do not work in English.",
        "I present my work carefully, whether that is pitching to a business owner or a case competition panel. Good work nobody understands does not go anywhere.",
      ],
      photos: [SITE_IMAGES.maritime, SITE_IMAGES.youthForum],
    },
    {
      label: "Outside work",
      paragraphs: ["Away from a keyboard, I scuba dive."],
      photos: [SITE_IMAGES.diving],
    },
  ],

  pullQuote: {
    text: "Automation only counts when someone depends on it.",
    caption: "How I judge what I build",
  },

  disciplines: [
    "Machine Learning",
    "Agentic AI",
    "Full-Stack Engineering",
    "Data Analysis",
    "Automation & Deployment",
  ],
};

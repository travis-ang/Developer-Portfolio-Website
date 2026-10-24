import type { PageImage } from "./pages/types";

/** Solid tile shown while a photo streams in. */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTgxODFCIi8+PC9zdmc+";

/** Deeper tile for lightbox images, which sit against a darker scrim. */
export const LIGHTBOX_BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMEQxMTE3Ii8+PC9zdmc+";

/**
 * Every standalone photo on the site — swap one by editing its line here.
 * Project and hackathon imagery is not listed: it belongs to its own entry in
 * constants/pages/. `portrait` is the profile image in the structured data that
 * search engines read; the About panel no longer shows it.
 */
export const SITE_IMAGES = {
  portrait: {
    src: "/about/portrait.jpg",
    alt: "Travis Ang posing in front of a white wall",
  },
  /** portrait.jpg cut down to the subject, for the small card on About. */
  portraitCard: {
    src: "/about/portrait-card.jpg",
    alt: "Travis sitting on a striped bench in front of palm trees",
  },
  maritime: {
    src: "/about/presentation.jpg",
    alt: "Travis presenting at the Maritime Youth Forum ",
  },
  brainhack: {
    src: "/about/brainhack.jpg",
    alt: "Travis and teammates beside their demo at the BrainHack Code EXP 2026 finals",
  },
  youthForum: {
    src: "/about/youth-forum.jpg",
    alt: "Travis and two teammates on stage at the Marine and Offshore Energy Youth Forum 2026",
  },
  diving: {
    src: "/about/diving.jpg",
    alt: "Travis and a dive buddy taking an underwater selfie on a scuba dive",
  },
} satisfies Record<string, PageImage>;

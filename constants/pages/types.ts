export interface PageImage {
  src: string;
  alt: string;
}

/**
 * A photo still to come: a captioned box holding its place in the layout.
 * Swap it for a `PageImage`, and a line in imageSizes.ts, once the photo exists.
 */
export interface ImagePlaceholder {
  /** What belongs here, shown in the box until it does. */
  placeholder: string;
}

export type Picture = PageImage | ImagePlaceholder;

export function isPlaceholder(picture: Picture): picture is ImagePlaceholder {
  return "placeholder" in picture;
}

export type LinkIcon = "github" | "presentation" | "globe" | "download";

export interface PageLink {
  label: string;
  href: string;
  icon: LinkIcon;
  download?: boolean;
}

export interface PageData {
  slug: string;
  /** Full title shown on the detail page header */
  title: string;
  /** Shorter title shown on the home section card */
  cardTitle: string;
  /**
   * Small line above the card title, for context the title shouldn't carry.
   * Hackathons put the competition here so the card leads with what was built.
   */
  cardKicker?: string;
  /** Result worth badging, e.g. "Finalist". A trophy badge on every row that lists the entry. */
  award?: string;
  /** The field the award was won against, shown beside the badge, e.g. "Top 28 of 160 teams". */
  awardDetail?: string;
  date: string;
  collaborators: string[];
  /** Full tech list shown on the detail page header */
  techs: string[];
  /** Subset shown on the home card — defaults to techs if omitted */
  cardTechs?: string[];
  links: PageLink[];
  overview: string;
  images: PageImage[];
  /**
   * Cover shot for the entry. Defaults to the last image, which is usually the
   * most finished one. Set this to any `src` to override, including a shot that
   * is not in `images` at all.
   */
  cardImage?: string;
  impacts: string[];
  whatIDid: string[];
  reflection: string;
}

/**
 * The one place that decides which image fronts an entry, so every surface that
 * depicts a project agrees on its cover.
 */
export function cardImageOf(data: PageData): string | undefined {
  return data.cardImage ?? data.images[data.images.length - 1]?.src;
}

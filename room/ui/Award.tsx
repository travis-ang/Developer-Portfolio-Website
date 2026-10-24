import { Trophy } from "lucide-react";

/*
  A result worth seeing before anyone opens the entry.

  It used to be grey text after the date, inside the panel, so a first place
  was only visible to someone who had already chosen that one hackathon out of
  five. Gold, with a trophy, and on the rows you choose from: the result is a
  reason to open the entry, so it has to be there before the click.

  `detail` is the field it was won against - "Top 28 of 160 teams" - which is
  what makes "Finalist" mean something to a reader who was not there.

  Small on purpose: a tag on the line, not a second button. Gold already makes
  it the brightest thing in the row, so it does not need size as well.
*/
export function Award({
  award,
  detail,
  className,
}: {
  award: string;
  detail?: string;
  className?: string;
}) {
  return (
    <span className={["flex flex-wrap items-center gap-x-1.5 gap-y-1", className].filter(Boolean).join(" ")}>
      <span className="inline-flex items-center gap-0.5 rounded-full border border-amber-300/60 bg-amber-300/15 px-1.5 text-[9px] font-semibold uppercase leading-4 tracking-wide text-amber-200">
        <Trophy aria-hidden className="size-2.5" />
        {award}
      </span>
      {detail && <span className="text-[11px] text-amber-100/70">{detail}</span>}
    </span>
  );
}

/** The award as words, for accessible names that replace the visible text. */
export function awardLabel(award?: string, detail?: string): string {
  if (!award) return "";
  return detail ? `, ${award}, ${detail}` : `, ${award}`;
}

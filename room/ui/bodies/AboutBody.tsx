import { FileDown, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import { CONTACT_CHANNELS } from "@/constants/contact";
import { sizeOf } from "@/constants/imageSizes";
import type { AboutData } from "@/constants/pages/about";
import { RESUME_HREF } from "@/room/data/bindings";
import { Gallery, Interlude } from "./Shot";
import { weave } from "./weave";
import { Cue } from "../Cue";
import { Typewriter } from "../Typewriter";

/** An icon per channel in CONTACT_CHANNELS, keyed by its label. */
const CHANNEL_ICONS: Record<string, LucideIcon> = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
};

export function AboutBody({
  data,
  leadsTo,
  onPick,
}: {
  data: AboutData;
  /* Where this panel goes on to - the toolkit and the credits, neither of
     which has an object in the room any more. Passed in rather than hard-coded
     so bindings.ts stays the one place that says where anything leads. */
  leadsTo: { id: string; title: string }[];
  onPick: (id: string) => void;
}) {
  return (
    <article className="space-y-6">
      {/*
        An introduction rather than a banner: who, then a line that types out
        what, with the photo as a card beside it. The full-width portrait this
        replaced put a picture ahead of a single word about the person in it.
      */}
      <header className="flex items-center gap-4">
        <div className="w-28 shrink-0 overflow-hidden rounded-xl border border-amber-200/25 bg-amber-200/5 shadow-lg shadow-black/40">
          <Image
            src={data.portrait.src}
            alt={data.portrait.alt}
            {...sizeOf(data.portrait.src)}
            sizes="112px"
            className="block h-auto w-full"
          />
        </div>
        <div className="min-w-0 space-y-1">
          <h2 className="text-2xl font-semibold text-amber-50">{data.greeting}</h2>
          <p className="text-base leading-relaxed text-amber-100/80">
            <Typewriter prefix="I'm " phrases={data.roles} />
          </p>
        </div>
      </header>
      <p className="text-base leading-relaxed text-amber-50">{data.lead}</p>

      {/*
        The resume and every way to reach me, before the long read rather than
        after it. Someone who opened About to find these should not have to
        scroll past three sections first.
      */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={RESUME_HREF}
          download
          aria-label="Download resume — saves a PDF"
          className="group inline-flex items-center gap-2.5 rounded-lg border border-amber-300/60 bg-amber-300/15 px-5 py-3 text-base font-semibold text-amber-100 hover:bg-amber-300/25"
        >
          <FileDown aria-hidden className="size-5" />
          Download resume
          <Cue kind="download">Saves a PDF</Cue>
        </a>
        <ul className="flex items-center gap-2">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = CHANNEL_ICONS[channel.label] ?? Mail;
            const external = !channel.href.startsWith("mailto:");
            return (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  aria-label={external ? `${channel.label} — opens in a new tab` : `Email ${channel.value}`}
                  title={channel.label}
                  className="flex size-12 items-center justify-center rounded-lg border border-amber-200/30 text-amber-100 hover:bg-amber-200/10"
                >
                  <Icon aria-hidden className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {data.sections.map((section) => {
        const photos = section.photos ?? [];
        // One gap after each paragraph, so a picture sits by what it shows.
        const interludes = weave(photos, section.paragraphs.length);
        return (
          <section key={section.label} className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-amber-200/70">{section.label}</h3>
            {section.paragraphs.map((paragraph, i) => (
              <Fragment key={paragraph}>
                <p className="text-sm leading-relaxed text-amber-50/80">{paragraph}</p>
                <Interlude pictures={interludes[i]} />
              </Fragment>
            ))}
            <Gallery pictures={photos} />
          </section>
        );
      })}

      <blockquote className="border-l-2 border-amber-200/40 pl-4">
        <p className="text-sm italic text-amber-50/90">{data.pullQuote.text}</p>
        <footer className="pt-1 text-xs text-amber-100/45">{data.pullQuote.caption}</footer>
      </blockquote>

      <ul className="flex flex-wrap gap-1.5">
        {data.disciplines.map((discipline) => (
          <li
            key={discipline}
            className="rounded-full border border-amber-200/20 px-2 py-0.5 text-xs text-amber-100/70"
          >
            {discipline}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {leadsTo.map((link) => (
          <button
            key={link.id}
            onClick={() => onPick(link.id)}
            aria-label={`${link.title} — open`}
            className="group flex items-center gap-2 rounded-md border border-amber-200/30 px-3 py-1.5 text-xs text-amber-100 hover:bg-amber-200/10"
          >
            {link.title}
            <Cue>Click to open</Cue>
          </button>
        ))}
      </div>
    </article>
  );
}

import { Fragment } from "react";
import type { PageData } from "@/constants/pages/types";
import { Gallery, Interlude } from "./Shot";
import { weave } from "./weave";
import { Award } from "../Award";
import { Cue } from "../Cue";

export function ProjectBody({ data }: { data: PageData }) {
  /*
    The gaps a narrow reader sets pictures in: after the intro, after each
    list, after the reflection. Lists with nothing in them are left out first,
    so an entry without an Impact does not get two runs of pictures meeting
    where it would have been.
  */
  const lists = [
    { title: "Impact", items: data.impacts },
    { title: "What I did", items: data.whatIDid },
  ].filter((list) => list.items.length > 0);
  const interludes = weave(data.images, lists.length + 2);

  return (
    <article className="space-y-6">
      {data.cardKicker && (
        <p className="text-xs uppercase tracking-widest text-amber-200/70">{data.cardKicker}</p>
      )}
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-amber-50">{data.title}</h2>
        <p className="text-sm text-amber-100/50">{data.date}</p>
        {data.award && <Award award={data.award} detail={data.awardDetail} />}
      </header>

      <ul className="flex flex-wrap gap-1.5">
        {data.techs.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-amber-200/20 px-2 py-0.5 text-xs text-amber-100/70"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="text-sm leading-relaxed text-amber-50/85">{data.overview}</p>

      {data.links.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {data.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} — opens in a new tab`}
                className="group flex items-center gap-2 rounded-md border border-amber-200/30 px-3 py-1.5 text-xs text-amber-100 hover:bg-amber-200/10"
              >
                {link.label}
                <Cue kind="external">Opens in a new tab</Cue>
              </a>
            </li>
          ))}
        </ul>
      )}

      {/* Runs to the panel's edges; the prose around it keeps its gutter. */}
      <Gallery pictures={data.images} />
      <Interlude pictures={interludes[0]} />

      {lists.map((list, i) => (
        <Fragment key={list.title}>
          <Section title={list.title} items={list.items} />
          <Interlude pictures={interludes[i + 1]} />
        </Fragment>
      ))}

      <section className="space-y-2">
        <h3 className="text-xs uppercase tracking-widest text-amber-200/70">Reflection</h3>
        <p className="text-sm leading-relaxed text-amber-50/75">{data.reflection}</p>
      </section>
      <Interlude pictures={interludes[lists.length + 1]} />
    </article>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="space-y-2">
      <h3 className="text-xs uppercase tracking-widest text-amber-200/70">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-amber-50/80">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

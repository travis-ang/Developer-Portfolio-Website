"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { sizeOf } from "@/constants/imageSizes";
import type { PageImage } from "@/constants/pages/types";

/*
  A picture, full size.

  The reader gives a photo at most 45% of a desktop window, and a gallery
  splits that again into a 290px column - which is enough to see that there IS
  a chart and not enough to read its axis labels. Every shot in the set is at
  least 850px wide on disk and several are 2880, so the pixels to read them
  with are already downloaded; all that was missing was a way to ask for them.

  One dialog for the whole reader rather than one per picture. The gallery runs
  six deep, and six dialogs - each holding a full-size <Image> - would mean the
  panel fetched six 2880px sources to show six thumbnails. This holds one, and
  renders nothing inside it until something is actually open.

  A real <dialog> opened with showModal(), for the same reason Welcome uses
  one: the top layer beats the z-index in the millions that drei puts on the
  room's signs, the document behind goes inert so Tab cannot walk out into the
  page under the photo, and Escape closes it by the browser's own rules.
*/

/** `null` outside a provider, which is how `Zoom` knows to stay a picture. */
const LightboxContext = createContext<((image: PageImage) => void) | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [shown, setShown] = useState<PageImage | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  /*
    Opened from the click rather than from an effect watching `shown`, so the
    picture is only recorded as open once the dialog actually is. The page
    behind a modal is inert: a showModal() that threw after the state was set
    would leave the reader untouchable with nothing on top of it to say why,
    where this way the worst case is a thumbnail that did not open.

    The dialog is empty for the instant between the call and the commit that
    fills it, which is also what puts focus on the ✕ - it is the only focusable
    thing in there when showModal() runs.
  */
  const open = useCallback((image: PageImage) => {
    const el = dialog.current;
    if (!el || el.open) return;
    try {
      el.showModal();
    } catch {
      return;
    }
    setShown(image);
  }, []);

  const close = useCallback(() => dialog.current?.close(), []);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {/*
        Any click closes it, the photo included - that is what the zoom-out
        cursor over it promises, and it is the gesture people try first. The ✕
        is there for the people who look for a button instead, and it closes by
        the same path. onClose covers Escape and dialog.close() together, so
        clearing the picture is written once.
      */}
      <dialog
        ref={dialog}
        className="room-lightbox"
        aria-label={shown ? `${shown.alt} — full size` : undefined}
        onClose={() => setShown(null)}
        onClick={close}
      >
        {shown && (
          <figure className="room-lightbox__frame">
            <Image
              src={shown.src}
              alt={shown.alt}
              {...sizeOf(shown.src)}
              /*
                The whole window, since that is what it is about to fill. The
                thumbnail's own `sizes` asked for a column-width source; asking
                again at this size is what makes opening one worth doing.
              */
              sizes="100vw"
              className="room-lightbox__img"
            />
            {/* The alt text, shown. It already says what the picture is for a
                screen reader, and on a chart pulled out of its paragraph that
                is exactly the caption a sighted reader wants too. */}
            <figcaption className="room-lightbox__caption">{shown.alt}</figcaption>
          </figure>
        )}
        <button type="button" className="room-lightbox__close" aria-label="Close picture">
          ✕
        </button>
      </dialog>
    </LightboxContext.Provider>
  );
}

/**
 * Makes whatever it wraps open `image` full size when clicked.
 *
 * A button, not a click handler on the picture: this is a control, so it needs
 * to be one thing in the tab ring with one accessible name, and Enter and Space
 * have to work on it. `aria-label` names the consequence rather than repeating
 * the alt text, which the dialog itself then carries.
 */
export function Zoom({
  image,
  className,
  style,
  children,
}: {
  image: PageImage;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const open = useContext(LightboxContext);

  /*
    No provider above, no dialog to open - so the picture stays a picture
    rather than becoming a button that does nothing. Keeps Shot usable from
    anywhere, including outside the room.
  */
  if (!open) return <>{children}</>;

  return (
    <button
      type="button"
      onClick={() => open(image)}
      aria-label={`${image.alt} — view full size`}
      className={["reader-zoom", className].filter(Boolean).join(" ")}
      style={style}
    >
      {children}
      {/*
        The affordance, and it has to be visible rather than on hover: half the
        people reading this are on a phone, where there is no hover to reveal
        it, and a photo that silently does something when tapped is the thing
        Cue exists to prevent. Dim until pointed at, like the cues elsewhere.
      */}
      <span aria-hidden className="reader-zoom__cue">
        ⤢
      </span>
    </button>
  );
}

/*
  Sharing pictures out between the gaps in a run of text.

  A reader too narrow for the gallery to sit two-up would otherwise show every
  picture in one stack and every paragraph in another. Spread across the gaps
  instead, it reads a beat of text and then a beat of picture, which is how a
  magazine column handles the same problem.
*/

/**
 * Shares `items` across `gaps` places as evenly as they go, the earlier gaps
 * taking any remainder: seven pictures into four gaps is 2, 2, 2, 1. Always
 * returns `gaps` groups, empty ones included, so callers can index by gap.
 */
export function weave<T>(items: readonly T[], gaps: number): T[][] {
  const base = Math.floor(items.length / gaps);
  const spare = items.length % gaps;
  const groups: T[][] = [];
  let at = 0;
  for (let gap = 0; gap < gaps; gap++) {
    const take = base + (gap < spare ? 1 : 0);
    groups.push(items.slice(at, at + take));
    at += take;
  }
  return groups;
}

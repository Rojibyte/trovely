export default function slugify(url: string): string {
  const removePunctuations = url.replace(/[',()]/g, "");
  const hyphenated = removePunctuations.toLowerCase().replace(/\s/g, "-");
  return hyphenated;
}

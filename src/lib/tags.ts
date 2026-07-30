export function tagToSlug(tag: string) {
  return tag.toLowerCase().replace(/\s+/g, '-');
}
export function getRandomItem(array) {
  if (!array || array.length === 0) {
    throw new Error("Array is empty!");
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export async function getAlbumImages(id: string) {
  const imageImports = import.meta.glob<{ default: ImageMetadata }>(
    "/public/assets/photos/**/*.{jpeg,jpg}",
    { eager: true }
  );
  const sortedEntries = Object.entries(imageImports)
    .filter(([key]) => key.includes(id))
    .sort(([aPath], [bPath]) => aPath.localeCompare(bPath));
    const sortedImages = sortedEntries.map(
      ([, mod]) => (mod as { default: ImageMetadata }).default
    );
  return sortedImages;
}

export async function getIntroImages() {
  const imageImports = import.meta.glob<{ default: ImageMetadata }>(
    "/public/assets/images/intro/*.{jpeg,jpg}",
    { eager: true }
  );
  return Object.values(imageImports).map(
    (mod) => (mod as { default: ImageMetadata }).default
  );
}
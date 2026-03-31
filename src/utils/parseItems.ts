// Function to choose a random item from an array of items
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
export function reverseChronological<T>(items: T[], timeField: keyof T | string = 'timestamp'): T[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[timeField as keyof T] as any).getTime();
    const dateB = new Date(b[timeField as keyof T] as any).getTime();
    return dateB - dateA;
  });
}

export function chronological<T>(items: T[], timeField: keyof T | string = 'timestamp'): T[] {
  return [...items].sort((a, b) => {
    const dateA = new Date(a[timeField as keyof T] as any).getTime();
    const dateB = new Date(b[timeField as keyof T] as any).getTime();
    return dateA - dateB;
  });
}

export function alphabetical<T>(items: T[], textField: keyof T | string = 'title'): T[] {
  return [...items].sort((a, b) => {
    const textA = String(a[textField as keyof T] ?? '').toLowerCase();
    const textB = String(b[textField as keyof T] ?? '').toLowerCase();
    return textA.localeCompare(textB);
  });
}

export function reverseAlphabetical<T>(items: T[], textField: keyof T | string = 'title'): T[] {
  return [...items].sort((a, b) => {
    const textA = String(a[textField as keyof T] ?? '').toLowerCase();
    const textB = String(b[textField as keyof T] ?? '').toLowerCase();
    return textB.localeCompare(textA);
  });
}

// Accessor-based, for nested fields like `data.date` on collection entries.
export function reverseChronologicalBy<T>(items: T[], accessor: (item: T) => Date | string | number): T[] {
  return [...items].sort((a, b) => new Date(accessor(b)).getTime() - new Date(accessor(a)).getTime());
}

export function chronologicalBy<T>(items: T[], accessor: (item: T) => Date | string | number): T[] {
  return [...items].sort((a, b) => new Date(accessor(a)).getTime() - new Date(accessor(b)).getTime());
}
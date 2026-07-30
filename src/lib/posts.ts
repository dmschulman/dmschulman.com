import { getCollection, type CollectionEntry } from 'astro:content';
import { reverseChronologicalBy } from './sortItems';
import { tagToSlug } from './tags';

export type Post = CollectionEntry<'words'>;

export interface PostFilter {
  includeArchived?: boolean;
  includeUnpublished?: boolean;
}

// Get the post date
export function getPostDate(post: Post): Date {
  return post.data.timestamp ?? post.data.date;
}

// Get the post content from the collection
// Check if published and not marked archived
export async function getAllPosts(opts: PostFilter = {}): Promise<Post[]> {
  const { includeArchived = false, includeUnpublished = false } = opts;
  const posts = await getCollection('words');
  const filtered = posts
    .filter(p => includeUnpublished || p.data.published)
    .filter(p => includeArchived || !p.data.archived);
  return reverseChronologicalBy(filtered, getPostDate);
}

// Get the URL of the post
export function getPostUrl(post: Post): string {
  const year = getPostDate(post).getFullYear();
  const slug = post.id.split('_').slice(1).join('_');
  return `/words/${year}/${slug}`;
}

export function getTagUrl(tag: string): string {
  return `/words/tag/${tagToSlug(tag)}`;
}

// If I want to display featured posts
export async function getFeaturedPosts(posts?: Post[]): Promise<Post[]> {
  return (posts ?? await getAllPosts()).filter(p => p.data.featured);
}

export async function getArchivedPosts(posts?: Post[]): Promise<Post[]> {
  return (posts ?? await getAllPosts({ includeArchived: true }))
    .filter(p => p.data.archived);
}

export async function getPostsByTag(tag: string, posts?: Post[]): Promise<Post[]> {
  return (posts ?? await getAllPosts()).filter(p => p.data.tags.includes(tag));
}

export async function getPostsByYear(year: number, posts?: Post[]): Promise<Post[]> {
  return (posts ?? await getAllPosts()).filter(p => getPostDate(p).getFullYear() === year);
}

export function filterByYear(posts: Post[], year: number): Post[] {
  return posts.filter(p => getPostDate(p).getFullYear() === year);
}

// Get tags associated with the post or posts
export async function getAllTags(posts?: Post[]): Promise<Map<string, Post[]>> {
  const src = posts ?? await getAllPosts();
  const map = new Map<string, Post[]>();
  for (const post of src) {
    for (const tag of post.data.tags) {
      if (!map.has(tag)) map.set(tag, []);
      map.get(tag)!.push(post);
    }
  }
  return map;
}

export async function getAllYears(posts?: Post[]): Promise<number[]> {
  const src = posts ?? await getAllPosts();
  return [...new Set(src.map(p => getPostDate(p).getFullYear()))].sort((a, b) => b - a);
}

// Find which post comes next/prev in the sequence (exclude archived posts)
export async function getAdjacentPosts(post: Post) {
  if (post.data.archived) return { prev: null, next: null };
  const posts = await getAllPosts();  // already excludes archived by default
  const i = posts.findIndex(p => p.id === post.id);
  return {
    prev: i < posts.length - 1 ? posts[i + 1] : null,  // prev
    next: i > 0 ? posts[i - 1] : null,                 // next
  };
}

// Get related posts
export async function getRelatedPosts(post: Post, opts: { limit?: number } = {}): Promise<Post[]> {
  const { limit = 3 } = opts;
  const all = await getAllPosts();
  return all
    .filter(p => p.id !== post.id)
    .map(p => ({
      post: p,
      score: p.data.tags.filter(t => post.data.tags.includes(t)).length,
    }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.post);
}
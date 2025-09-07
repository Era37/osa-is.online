export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: Date;
  readTime: string;
  tags: string[];
}

export async function getBlog(
  slug: string,
  fetchSvelte: typeof globalThis.fetch
): Promise<string | undefined> {
  const response = await fetchSvelte(`/blogs/${slug}.md`);
  if (!response.ok) {
    return undefined;
  }
  return response.text();
}

export const blogs: BlogPost[] = [
  {
    id: "writing-my-compiler",
    title: "Why I Decided to Design My Own Language",
    description:
      "A reflection on why I designed n, a compact language for building REST APIs that borrows from functional programming without sacrificing pragmatism.",
    slug: "writing-my-compiler",
    date: new Date(2025, 8, 6),
    readTime: "5 min read",
    tags: [],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
  return blogs
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, limit);
}

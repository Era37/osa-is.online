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

export const blogs: BlogPost[] = [];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getRecentBlogs(limit: number = 3): BlogPost[] {
  return blogs
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, limit);
}

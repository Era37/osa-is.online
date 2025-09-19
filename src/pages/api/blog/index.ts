import type { APIRoute } from 'astro';
import { blogs, getBlogContent } from '../../../lib/blogs';

interface SerializedBlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  tags: string[];
  html: string;
}

export const GET: APIRoute = async () => {
  const payload: SerializedBlogPost[] = blogs.map((post) => {
    const html = getBlogContent(post.slug) ?? '';
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      slug: post.slug,
      date: post.date.toISOString(),
      readTime: post.readTime,
      tags: post.tags,
      html,
    };
  });

  return new Response(JSON.stringify(payload), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};

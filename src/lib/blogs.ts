import type { MarkdownInstance } from 'astro';
import hljs from 'highlight.js';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug: string;
  date: Date;
  readTime: string;
  tags: string[];
}

interface BlogFrontmatter {
  id?: string;
  title: string;
  description: string;
  slug?: string;
  date: string;
  readTime?: string;
  tags?: string[];
}

interface InternalBlogEntry {
  post: BlogPost;
  module: MarkdownInstance<BlogFrontmatter>;
}

const markedRenderer = new Marked();
markedRenderer.use(
  markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    },
  })
);

const blogModules = import.meta.glob<MarkdownInstance<BlogFrontmatter>>(
  "../content/blog/**/*.md",
  { eager: true }
);

const blogEntries: InternalBlogEntry[] = Object.entries(blogModules)
  .map(([path, module]) => {
    const {
      frontmatter: { title, description, date, tags = [], readTime, id, slug: fmSlug },
    } = module;

    const derivedSlug = fmSlug ?? deriveSlugFromPath(path);
    const parsedDate = parseDate(date, derivedSlug);

    const post: BlogPost = {
      id: id ?? derivedSlug,
      title,
      description,
      slug: derivedSlug,
      date: parsedDate,
      readTime: readTime ?? estimateReadTime(module),
      tags,
    };

    return { post, module };
  })
  .sort((a, b) => b.post.date.getTime() - a.post.date.getTime());

const blogIndex = new Map(blogEntries.map((entry) => [entry.post.slug, entry]));

export const blogs: BlogPost[] = blogEntries.map((entry) => entry.post);

export function getRecentBlogs(limit: number = 3): BlogPost[] {
  return blogs.slice(0, limit);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogIndex.get(slug)?.post;
}

export function getBlogContent(slug: string): string | undefined {
  const entry = blogIndex.get(slug);
  if (!entry) {
    return undefined;
  }

  const markdown = entry.module.rawContent();
  return renderMarkdown(markdown);
}

export function getBlogWithContent(slug: string):
  | (BlogPost & { html: string; markdown: string })
  | undefined {
  const entry = blogIndex.get(slug);
  if (!entry) {
    return undefined;
  }

  const markdown = entry.module.rawContent();
  const html = renderMarkdown(markdown);
  return {
    ...entry.post,
    html,
    markdown,
  };
}

function renderMarkdown(markdown: string): string {
  return (markedRenderer.parse(markdown) as string) ?? '';
}

function deriveSlugFromPath(path: string): string {
  const filename = path.split("/").pop() ?? "";
  return filename.replace(/\.md$/, "");
}

function parseDate(value: string, slug: string): Date {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    console.warn(`Invalid date in blog frontmatter for slug "${slug}": ${value}`);
    return new Date(0);
  }
  return parsed;
}

function estimateReadTime(module: MarkdownInstance<BlogFrontmatter>): string {
  const raw = module.rawContent();
  const words = raw.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

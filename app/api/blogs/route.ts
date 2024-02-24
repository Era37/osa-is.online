import prisma from "@/lib/prisma";

export async function GET() {
  const blogs = await prisma.blogs.findMany();
  return Response.json(blogs);
}

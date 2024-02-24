import prisma from "@/lib/prisma";
import { blogs } from "@prisma/client";

async function IdExists(id: string): Promise<boolean> {
  const resp = await prisma.blogs.findMany({
    select: { id: true },
    where: { id },
  });
  return !!resp.length;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

async function RandomIdGenerator(len: number): Promise<string> {
  let idVerified = "";
  while (!idVerified.length) {
    let id = "";
    const localAlphabet = `${numbers}${alphabet}${alphabet.toUpperCase()}`;
    for (let i = 0; i < len; i++) {
      id += localAlphabet[getRandomInt(localAlphabet.length)];
    }
    if (!(await IdExists(id))) idVerified = id;
  }
  return idVerified;
}

export async function POST(request: Request) {
  const data: blogs = await request.json();
  data.id = await RandomIdGenerator(6);
  data.created = new Date(Date.now());
  await prisma.blogs.create({ data });
  return new Response("Blog created");
}

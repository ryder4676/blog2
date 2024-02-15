import prisma from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
  const user = await getCurrentUser(req, res);

  try {
    if (!user) {
      return NextResponse.json(
        { messgage: "Not Authenticated" },
        { status: 401 }
      );
    }
    const { title, content } = await req.json();
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return NextResponse.json({ user, title, content });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

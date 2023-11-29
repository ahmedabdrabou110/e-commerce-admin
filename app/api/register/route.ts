import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb"
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;
  const hashpassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashpassword,
    },
  });
  return NextResponse.json(user);
}

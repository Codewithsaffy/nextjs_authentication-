// app/api/register/route.ts

import { User } from "@/models/User.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming request body
    const { username, email, password } = await req.json();

    // Validate input
    if (!username || !email || !password) {
      return new NextResponse("All fields are required", { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already in use", { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("User created:", user);

    return new NextResponse("Registration successful", { status: 201 });
  } catch (err) {
    console.error("Registration error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

"use server";

import { signIn, signOut } from "@/auth";
import { dbConnet } from "@/lib/dbConnectoin";
import { User } from "@/models/User.model";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  const res = await signIn(action as string, {
    redirectTo: "/dashboard",
  });
  console.log(res);

  console.log(formData);
  console.log(action);
}

export async function doLogout() {
  await signOut();
}

export async function getUserByEmail(email: string) {
  await dbConnet();
  const user = await User.findOne({
    email: email,
  });
  if (user) {
    return user;
  }
  return null;
}

export async function credentialsLogin(formData: FormData) {
  const response = await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirectTo: "/dashboard",
  });
  return response
}

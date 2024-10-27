import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "./actions/socialLogin";
import { authConfig } from "./auth.config";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials === null) {
          return null;
        } else {
          try {
            const user = await getUserByEmail(credentials.email as string);
            if (user) {
              const isMatch = bcrypt.compareSync(
                credentials.password as string,
                user.password
              );
              if (isMatch) {
                return user;
              } else {
                throw new Error("Password is not correct");
              }
            } else {
              throw new Error("User not found");
            }
          } catch (error) {
            throw new Error(error as string);
          }
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,

      authorization: {
        params: {
          prompt: "consent", // ask google continue or not
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      clientId: process.env.GIT_CLIENT_ID,
      clientSecret: process.env.GIT_SECRET_ID,

      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});

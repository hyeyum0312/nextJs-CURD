import { connectDB } from "@/app/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '9a74462ca3c4725db4e5',
      clientSecret: '2a202214c22adf75d3527cc4a784aa8bf41b6f3e',
    }),
  ],
  secret : 'qwerqwer1234',
  adapter: MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);
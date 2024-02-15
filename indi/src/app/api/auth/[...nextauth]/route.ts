import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

// For demonstration purposes, you might want to log authOptions
// console.log("Auth Options:", authOptions);

export { handler as GET, handler as POST };

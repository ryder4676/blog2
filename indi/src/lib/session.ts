import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@prisma/client";

export async function getCurrentUser(req: any, res: any) {
  const session = (await getServerSession({ req, res, ...authOptions })) as {
    user?: User;
  };
  return session?.user;
}

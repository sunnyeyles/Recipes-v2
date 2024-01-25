// import { authMiddleware } from '@clerk/nextjs'

// export default authMiddleware({
//   publicRoutes: ['/'],
// })

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }
import { authMiddleware } from "@clerk/nextjs";
import { debug } from "console";

export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

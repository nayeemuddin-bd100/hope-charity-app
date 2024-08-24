import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CustomJwtPayload } from "./app/types";
import { authKey } from "./constant/authKey";
import { USER_ROLES } from "./constant/role";

const authRoute = ["/login", "/register"];
const privateRoute = ["/change-password", "/profile", "/donate"];
const roleBasedRoute = {
  ADMIN: ["/dashboard"],
  SUPER_ADMIN: ["/dashboard"],
  VOLUNTEER: ["/dashboard/post", "/dashboard/event"],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request?.nextUrl;
  const accessToken = cookies().get(authKey)?.value;

  //protect auth and private route
  if (!accessToken) {
    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else if (privateRoute.includes(pathname)) {
      return NextResponse.redirect(new URL("/login", request.url));
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  //protect private route

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken);
  }

  const { role } = decodedData as CustomJwtPayload;

  //check user is login and and access auth route
  if (accessToken && privateRoute.includes(pathname)) {
    return NextResponse.next();
  }

  // allow login user to dynamic donation route
  if (accessToken && pathname.startsWith("/donate")) {
    return NextResponse.next();
  }

  // Allow admin and super admin access to all dashboard routes
  if (role === USER_ROLES.ADMIN || role === USER_ROLES.SUPER_ADMIN) {
    if (pathname.startsWith("/dashboard")) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/dashboard/:page*",
    "/change-password",
    "/profile",
    "/donate/:id*",
  ],
};

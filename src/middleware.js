import Cookies from "js-cookie";
import { NextResponse } from "next/server";
import { getCookie } from "./components/utils/cookies";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  const path = request.nextUrl.pathname;
  const publicPath = path === "/";
  const token = request.cookies.get("token"); // Replace 'your_cookie_name' with the actual cookie name
  console.log(token);

  if (publicPath && token) {
    return NextResponse.redirect(new URL(path, request.nextUrl));
  }
  if (!publicPath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/home", "/profile"],
};

import Cookies from "js-cookie";

export function getCookie(cookieName) {
  return Cookies.get(cookieName);
}

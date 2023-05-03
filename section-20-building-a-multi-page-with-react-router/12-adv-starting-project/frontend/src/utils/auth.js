import { redirect } from "react-router-dom";

export function getAuthToken() {
  var token = localStorage.getItem("token");
  if (!token) return null;
  const tokenDuratioon = getTokenDuration();
  if (tokenDuratioon < 0) return "EXPIRED";
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/auth");
  }
  return null;
}

export function getTokenDuration() {
  const expirationString = localStorage.getItem("expiration");
  const expiration = new Date(expirationString);
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}

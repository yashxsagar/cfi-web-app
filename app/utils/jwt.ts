// utils/jwt.ts
import * as jwtDecode from "jwt-decode";

export interface UserPayload {
  username: string;
  sub: string;
  email: string;
  image: string;
  accessToken: string;
  databaseId: string;
}

export function decodeJwt(token: string): UserPayload {
  return jwtDecode.jwtDecode<UserPayload>(token);
}

"use server";
import { signIn } from "@/auth.mjs"

export async function handleKakaoSignIn() {
  await signIn("kakao")
}
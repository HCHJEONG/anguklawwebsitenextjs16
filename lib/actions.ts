"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { queries } from "./db";

export async function createNote(formData: FormData): Promise<void> {
  const title = String(formData.get("title") ?? "").trim() || "Untitled";
  const content = String(formData.get("content") ?? "");
  const result = queries.insert.run(title, content);
  const id = Number(result.lastInsertRowid);
  revalidatePath("/");
  redirect(`/articles/${id}`);
}

export async function updateNote(id: number, formData: FormData): Promise<void> {
  const title = String(formData.get("title") ?? "").trim() || "Untitled";
  const content = String(formData.get("content") ?? "");
  queries.update.run(title, content, Date.now(), id);
  revalidatePath("/");
  revalidatePath(`/articles/${id}`);
  redirect(`/articles/${id}`);
}

export async function deleteNote(id: number): Promise<void> {
  queries.remove.run(id);
  revalidatePath("/");
  redirect("/");
}
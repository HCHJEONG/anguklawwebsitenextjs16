import Link from "next/link";
import { notFound } from "next/navigation";
import { queries } from "@/lib/db";
import { deleteNote } from "@/lib/actions";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { DeleteButton } from "@/components/DeleteButton";

export const dynamic = "force-dynamic";

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const noteId = Number(id);
  if (!Number.isInteger(noteId)) notFound();

  const note = queries.get.get(noteId);
  if (!note) notFound();

  const boundDelete = deleteNote.bind(null, note.id);

  return (
    <>
      <div className="page-header">
        <Link href="/" className="btn">← All notes</Link>
        <div style={{ display: "flex", gap: 8 }}>
          <Link href={`/notes/${note.id}/edit`} className="btn primary">Edit</Link>
          <DeleteButton action={boundDelete} />
        </div>
      </div>

      <h1 className="viewer-title">{note.title || "Untitled"}</h1>
      <div className="viewer-meta">
        Created {formatDate(note.created_at)} · Updated {formatDate(note.updated_at)}
      </div>

      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          background: "var(--panel)",
          padding: "24px 28px",
          marginTop: 8,
        }}
      >
        <MarkdownPreview source={note.content} />
      </div>
    </>
  );
}
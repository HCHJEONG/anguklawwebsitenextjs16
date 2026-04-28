import Link from "next/link";
import { queries } from "@/lib/db";

export const dynamic = "force-dynamic";

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function previewText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*`_~\[\]()!-]/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

export default function Articles () {
  const notes = queries.list.all();

  return (
    <>
      <div className="page-header">
        <h1>Insights from Anguk Law Offices</h1>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>
          {notes.length} {notes.length === 1 ? "article" : "articles"}
        </span>
      </div>

      {notes.length === 0 ? (
        <div className="empty">
          <p style={{ marginTop: 0 }}>You don&apos;t have any article yet.</p>
          <Link href="/articles/new" className="btn primary">
            Create your first article
          </Link>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <Link key={note.id} href={`/articles/${note.id}`} className="note-card">
              <h3 className="title">{note.title || "Untitled"}</h3>
              <p className="preview">
                {previewText(note.content) || "No content yet"}
              </p>
              <div className="meta">Updated {formatDate(note.updated_at)}</div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
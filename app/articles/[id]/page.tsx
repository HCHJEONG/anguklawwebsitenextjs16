import Link from "next/link";
import { notFound } from "next/navigation";
import { queries } from "@/lib/db";
import { deleteNote } from "@/lib/actions";
import { MarkdownPreview } from "@/components/MarkdownPreview";
import { Metadata } from 'next';

export const dynamic = "force-dynamic";

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export async function generateMetadata({ params }:{
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const noteId = Number(id);
  if (!Number.isInteger(noteId)) notFound();

  const note = queries.get.get(noteId);
  if (!note) return {
    openGraph: {
      title: 'Anguk Law Offices',
      description: 'Welcome to Anguk Law Offices',
      url: 'https://anguklaw.com',
      siteName: 'Anguk Law Offices',
      images: [
        {
          url: '/assets/img/myofficelobby.jpg', // public 폴더 기준 이미지 경로
          width: 800,
          height: 400,
        },
      ],
      locale: 'ko_KR',
      type: 'website',
    }
  };

  return {
    openGraph: {
      title: note.title,
      description: note.content.substring(0, 100),
      images: [
        {
          url: '/assets/img/logo.jpg', // public 폴더 기준 이미지 경로
          width: 400,
          height: 400,
        },
      ],
    },
  }
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

  return (
    <>
      <div className="page-header">
        <Link href="/articles" className="btn">← All articles</Link>
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
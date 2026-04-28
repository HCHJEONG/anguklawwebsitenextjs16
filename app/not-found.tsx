import Link from "next/link";

export default function NotFound() {
  return (
    <div className="empty">
      <h2 style={{ marginTop: 0 }}>Article not found</h2>
      <p>The article you&apos;re looking for doesn&apos;t exist or was deleted.</p>
      <Link href="/" className="btn primary">
        Back to all articles
      </Link>
    </div>
  );
}
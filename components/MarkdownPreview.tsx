import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export function MarkdownPreview({ source }: { source: string }) {
  if (!source.trim()) {
    return (
      <p style={{ color: "var(--muted)", fontStyle: "italic" }}>
        Nothing to preview yet — start typing on the left.
      </p>
    );
  }
  return (
    <div className="markdown-body">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {source}
      </ReactMarkdown>
    </div>
  );
}
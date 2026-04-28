"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

type EditorProps = {
  initialTitle?: string;
  initialContent?: string;
  submitLabel: string;
  cancelHref: string;
  action: (formData: FormData) => Promise<void>;
};

const STARTER_TEMPLATE = `# Heading

Write your note in **markdown**. You can use:

- Lists
- \`inline code\`
- [Links](https://example.com)

\`\`\`js
console.log("hello world");
\`\`\`

> Tip: the preview on the right updates as you type.
`;

export function Editor({
  initialTitle = "",
  initialContent = "",
  submitLabel,
  cancelHref,
  action,
}: EditorProps) {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent || STARTER_TEMPLATE);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    formData.set("title", title);
    formData.set("content", content);
    startTransition(() => {
      void action(formData);
    });
  }

  return (
    <form action={handleSubmit}>
      <input
        className="title-input"
        name="title"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />
      <div className="toolbar">
        <span style={{ color: "var(--muted)", fontSize: 13 }}>
          Edit on the left — preview on the right
        </span>
        <span className="spacer" />
        <Link href={cancelHref} className="btn">Cancel</Link>
        <button type="submit" className="btn primary" disabled={isPending}>
          {isPending ? "Saving..." : submitLabel}
        </button>
      </div>

      <div className="editor-grid">
        <div className="editor-pane">
          <div className="pane-header">Markdown</div>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="preview-pane">
          <div className="pane-header">Preview</div>
          <div className="preview-body">
            {content.trim() ? (
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                >
                  {content}
                </ReactMarkdown>
              </div>
            ) : (
              <p style={{ color: "var(--muted)", fontStyle: "italic" }}>
                Nothing to preview yet — start typing on the left.
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}
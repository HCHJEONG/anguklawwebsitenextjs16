import { Editor } from "@/components/Editor";
import { createNote } from "@/lib/actions";
export default function NewNotePage() {
  return (
    <>
      <div className="page-header">
        <h1>New article</h1>
      </div>
      <Editor
        submitLabel="Create article"
        cancelHref="/articles"
        action={createNote}
      />
    </>
  );
}
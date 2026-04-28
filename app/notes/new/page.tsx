import { Editor } from "@/components/Editor";
import { createNote } from "@/lib/actions";
export default function NewNotePage() {
  return (
    <>
      <div className="page-header">
        <h1>New note</h1>
      </div>
      <Editor
        submitLabel="Create note"
        cancelHref="/"
        action={createNote}
      />
    </>
  );
}
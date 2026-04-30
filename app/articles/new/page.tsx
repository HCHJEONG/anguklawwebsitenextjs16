import { Editor } from "@/components/Editor";
import { createNote } from "@/lib/actions";
// import { auth } from "@/auth.mjs";

export default async function NewNotePage() {

  return (
    <>
      <div className="page-header">
        <h1>New article</h1>
      </div>
      <Editor
        submitLabel="Create article"
        cancelHref="/articles"
        action={createNote}
        noteId={0}
      />
    </>
  );
}
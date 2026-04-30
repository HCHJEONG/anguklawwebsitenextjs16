import { notFound } from "next/navigation";
import { queries } from "@/lib/db";
import { updateNote} from "@/lib/actions";
import { Editor } from "@/components/Editor";

export const dynamic = "force-dynamic";

export default async function EditArticlePage ({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = await params;
  const noteId = Number(id);
  if (!Number.isInteger(noteId)) notFound();

  const note = queries.get.get(noteId);
  if (!note) notFound();

  const boundUpdate = updateNote.bind(null, note.id);  
  

  return (
    <>
      <div className="page-header">
        <h1>Edit article</h1>
      </div>
      <Editor
        initialTitle={note.title}
        initialContent={note.content}
        submitLabel="Save changes"
        cancelHref={`/articles/${note.id}`}
        action={boundUpdate}
        noteId={note.id}
      />
    </>
  );
}
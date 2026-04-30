"use client";

import { useTransition } from "react";

export function DeleteButton ({
  action,
}: {
  action: () => Promise<void>;
}) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      className="btn danger"
      disabled={isPending}
      onClick={() => {
        if (!confirm("Delete this article? This cannot be undone.")) return;
        startTransition(() => {
          void action();
        });
      }}
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "notes.db");

declare global {
  // eslint-disable-next-line no-var
  var __sqliteDb: Database.Database | undefined;
}

function createDb(): Database.Database {
  const db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL DEFAULT 'Untitled',
      content TEXT NOT NULL DEFAULT '',
      created_at INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),
      updated_at INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000)
    );
    CREATE INDEX IF NOT EXISTS idx_notes_updated_at ON notes(updated_at DESC);
  `);
  return db;
}

export const db: Database.Database = global.__sqliteDb ?? createDb();
if (process.env.NODE_ENV !== "production") {
  global.__sqliteDb = db;
}

export type Note = {
  id: number;
  title: string;
  content: string;
  created_at: number;
  updated_at: number;
};

export const queries = {
  list: db.prepare<[], Note>(
    `SELECT id, title, content, created_at, updated_at FROM notes ORDER BY updated_at DESC`
  ),
  get: db.prepare<[number], Note>(
    `SELECT id, title, content, created_at, updated_at FROM notes WHERE id = ?`
  ),
  insert: db.prepare<[string, string]>(
    `INSERT INTO notes (title, content) VALUES (?, ?)`
  ),
  update: db.prepare<[string, string, number, number]>(
    `UPDATE notes SET title = ?, content = ?, updated_at = ? WHERE id = ?`
  ),
  remove: db.prepare<[number]>(`DELETE FROM notes WHERE id = ?`),
  search: db.prepare<{ term: string }, Note>(
  `SELECT id, title, content, created_at, updated_at 
   FROM notes 
   WHERE title LIKE '%' || :term || '%' OR content LIKE '%' || :term || '%'
   ORDER BY updated_at DESC`
),
};
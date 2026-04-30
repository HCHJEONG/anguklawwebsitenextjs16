import Database from "better-sqlite3";
import path from "node:path";
import fs from "node:fs";

const dataDir = path.join(process.cwd(), "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, "users.db");

declare global {
  // eslint-disable-next-line no-var
  var __sqliteUsersDb: Database.Database | undefined;
}

function createDb(): Database.Database {
  const db = new Database(dbPath, { timeout: 5000 });
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nickname TEXT NOT NULL DEFAULT 'ANOM',
      email TEXT NOT NULL DEFAULT '',
      created_at INTEGER NOT NULL DEFAULT (strftime('%s','now') * 1000),
      meta TEXT NOT NULL DEFAULT ''
    );
    CREATE INDEX IF NOT EXISTS idx_users_updated_at ON users(updated_at DESC);
  `);
  return db;
}

export const usersdb: Database.Database = global.__sqliteDb ?? createDb();
if (process.env.NODE_ENV !== "production") {
  global.__sqliteUsersDb = usersdb;
}

export type User = {
  id: number;
  nickname: string;
  email: string;
  created_at: number;
  meta: string;
};

export const queries = {
  list: usersdb.prepare<[], User>(
    `SELECT id, nickname, email, created_at, meta FROM users ORDER BY created_at DESC`
  ),
  get: usersdb.prepare<[number], User>(
    `SELECT id, nickname, email, created_at, meta FROM users WHERE id = ?`
  ),
  insert: usersdb.prepare<[string, string]>(
    `INSERT INTO notes (nickname, email) VALUES (?, ?)`
  ),
  update: usersdb.prepare<[string, string, string, number]>(
    `UPDATE notes SET nickname = ?, email = ?, meta = ? WHERE id = ?`
  ),
  remove: usersdb.prepare<[number]>(`DELETE FROM users WHERE id = ?`),
  search: usersdb.prepare<{ term: string }, User>(
    `SELECT id, nickname, email, created_at, meta 
    FROM users 
    WHERE nickname LIKE '%' || :term || '%' OR email LIKE '%' || :term || '%'
    ORDER BY created_at DESC`
  ),
};
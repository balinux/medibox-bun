import { Database } from "bun:sqlite";

export const db = new Database("medicine.db");

db.prepare(`
CREATE TABLE IF NOT EXISTS schedules (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    medicine_name TEXT NOT NULL,
    schedule_time TEXT NOT NULL
);
`);

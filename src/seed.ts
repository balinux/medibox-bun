import { db } from "./db";
import { initDb } from "./db/schema";

initDb();

db.exec(`DELETE FROM schedules;`);

const stmt = db.prepare(`
INSERT INTO schedules (
    medicine_name,
    schedule_time
) VALUES (?, ?)
`);

stmt.run("Paracetamol", "13:00");
stmt.run("Vitamin C", "13:15");
stmt.run("Amoxicillin", "13:45");
stmt.run("Omeprazole", "15:00");

console.log("Seed berhasil");

import { initDb } from "./db/schema";
import { printUpcomingMedicines } from "./services/reminder";

// Inisialisasi Database jika belum ada
initDb();

console.log("Medibox Bun is running...");
printUpcomingMedicines();

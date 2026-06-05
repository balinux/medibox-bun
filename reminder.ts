import { db } from "./db";

type Schedule = {
  id: number;
  medicine_name: string;
  schedule_time: string;
};

function timeToMinutes(time: string): number {
  const [hour, minute] = time.split(":").map(Number) as [number, number];

  return hour * 60 + minute;
}

function getUpcomingMedicines() {
  const now = new Date();

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const nextHourMinutes = currentMinutes + 60;

  const schedules = db
    .query(
      `
      SELECT *
      FROM schedules
    `,
    )
    .all() as Schedule[];

  const upcoming = schedules.filter((item) => {
    const scheduleMinutes = timeToMinutes(item.schedule_time);

    return (
      scheduleMinutes >= currentMinutes && scheduleMinutes <= nextHourMinutes
    );
  });

  return upcoming;
}

const medicines = getUpcomingMedicines();

console.log("Obat yang harus diminum 1 jam ke depan:");

console.table(medicines);

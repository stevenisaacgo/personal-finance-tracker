import Dexie from "dexie";

const db = new Dexie("FinanceTrackerDB");
db.version(1).stores({
  transactions: "++id, description, amount, type, category",
});

export default db;
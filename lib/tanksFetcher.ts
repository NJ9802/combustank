import { db } from "./db";

export const fetchTanks = async () => {
    const tanks = await db.tanks.toArray();
    return tanks;
  };

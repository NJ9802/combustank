// db.ts
import Dexie, { Table } from "dexie";

export interface Tank {
  id?: number;
  name: string;
  averageLength: number;
  averageHeight: number;
  capacity: number;
  stock: number;
  measurement: number;
}

export class MySubClassedDexie extends Dexie {
  // 'tanks' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  tanks!: Table<Tank>;

  constructor() {
    super("combusTankDatabase");
    this.version(1).stores({
      tanks: `
      ++id, 
      name, 
      averageLength, 
      averageHeight, 
      capacity, 
      stock, 
      measurement
    `,
    });
  }
}

export const db = new MySubClassedDexie();

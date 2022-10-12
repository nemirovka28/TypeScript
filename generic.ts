const check: Record<string, boolean> = {
  drive: true,
  kpp: false,
};

function logMiddleware<T>(date: T): T {
  console.log(date);
  return date;
}

const rest = logMiddleware(10);

function getSplitplitHouse<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, 1);
}
getSplitplitHouse<number>([1, 2, 3]);

const split: <T>(data: Array<T>) => Array<T> = getSplitplitHouse;
const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitplitHouse;

interface ILogline<T> {
  timeStamp: Date;
  data: T;
}

type Logline<T> = {
  timeStamp: Date;
  data: T;
};

const logLine: ILogline<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 1,
  },
};

/*-------------------------------------------------------- */

function toString<T>(data: T): string | undefined {
  if (Array.isArray(data)) {
    return data.toString();
  }
  switch (typeof data) {
    case 'string':
      return data;
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'boolean':
    case 'function':
      return data.toString();
    default:
      return undefined;
  }
}

/*-------------------------------------------------------- */

class Vehicle {
  run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
  vehicle.run = vehicle.run / 0.62;
  return vehicle;
}

class LCV extends Vehicle {
  copacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());

/*-------------------------------------------------------- */

function logId<T extends string | number, Y>(id: T, addititonalData: Y): { id: T; data: Y } {
  console.log(id);
  console.log(addititonalData);
  return { id, data: addititonalData };
}

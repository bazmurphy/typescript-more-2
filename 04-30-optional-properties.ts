// We can make OPTIONAL properties

// adding a ? directly after the property name tells TypeScript this is OPTIONAL

type Point3 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint1: Point3 = { x: 1, y: 3, z: 9 };

// in this way if we don't provide "z" it is still valid.
const myPoint2: Point3 = { x: 1, y: 3 };

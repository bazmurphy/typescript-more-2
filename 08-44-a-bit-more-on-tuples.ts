// We can have mixed TYPES in a TUPLE and the ORDER DOES MATTER

type HTTPResponse = [number, string];

const goodResponse: HTTPResponse = [200, "OK"];
const badResponse: HTTPResponse = [404, "Not Found"];

// the order matters! a number first and then a string (its a pattern)
const example: HTTPResponse = ["OK", 200];

// (!) TUPLES DO NOT PREVENT YOU FROM PUSHING ON EXTRA ELEMENTS AFTER CREATION
goodResponse.push(123);
// ITS A LIMITATION OF TUPLES
goodResponse.pop();
goodResponse.pop();
goodResponse.pop();
// its now an EMPTY ARRAY

// this is an ARRAY of HTTPResponse TUPLES
const responses: HTTPResponse[] = [
  [200, "OK"],
  [404, "Not Found"],
];

// Perhaps its better to use an Object....
type HTTPResponse2 = {
  code: number;
  message: string;
};

const example2: HTTPResponse2 = { code: 200, message: "OK" };

// We can extend an interface with the extends keyword

interface Dog2 {
  name: string;
  age: number;
  breed: string;
  bark(): string;
}

const scooby: Dog2 = {
  name: "Scooby-Doo",
  age: 10,
  breed: "Great Dane",
  bark() {
    return `ScoobyDoobyDoo!`;
  },
};

interface ServiceDog extends Dog2 {
  job: "guide dog" | "police dog" | "drug sniffer" | "bomb detection";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 5,
  breed: "Labrador",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

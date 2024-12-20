const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

const profile = {
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'painting'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructutring

const { age }: { age: number } = profile;

const {
  address: { street, city, state, postalCode },
}: {
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
} = profile;

const { hobbies }: { hobbies: string[] } = profile;

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi = ['orange', true, 40];
const sprite: [string, boolean, number] = ['clear', true, 40];

//type alias
type Drink = [string, Boolean, number];
const cocacola: Drink = ['black', true, 50];

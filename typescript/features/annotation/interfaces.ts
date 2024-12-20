interface Resportable {
  summary(): string;
}
const oldCivic = {
  name: 'Civic',
  year: 2008,
  broken: true,
  summary(): string {
    return `This is a ${this.name}`;
  },
};

const Drink = {
  name: 'Wine',
  carbonated: false,
  summary(): string {
    return `This is a ${this.name}`;
  },
};

const printSummary = (item: Resportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(Drink);

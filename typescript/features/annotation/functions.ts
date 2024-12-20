const add = (x: number, y: number): number => {
  return x + y;
};

const subtract: (x: number, y: number) => number = (x: number, y: number) => {
  return x - y;
};
function divide(x: number, y: number): number {
  return x / y;
}
const multiply = function (x: number, y: number): number {
  return x * y;
};
const todayWeather = {
  date: new Date(),
  temp: 'sunny',
};
// const forecast = (weather: { date: Date; temp: string }): void => {
//   console.log(
//     `Today's date is ${weather.date.toDateString()} and the weather is ${
//       weather.temp
//     }`
//   );
// };
// console.log(forecast(todayWeather));
//other way
const forecast = ({ date, temp }: { date: Date; temp: string }): void => {
  console.log(
    `Today's date is ${date.toDateString()} and the weather is ${temp}`
  );
};
console.log(forecast(todayWeather));

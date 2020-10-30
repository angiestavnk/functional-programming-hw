const find = (array, condition) =>
  array.reduce((accumulator, current) => {
    if (condition(current)) {
      return accumulator || current;
    } else return accumulator;
  }, undefined);

const filter = (array, condition) =>
  array.reduce((accumulator, current) => {
    if (condition(current)) {
      return [...accumulator, current];
    } else return accumulator;
  }, []);

const some = (array, condition) =>
  array.reduce((accumulator, current) => {
    return accumulator || condition(current);
  }, false);

const every = (array, condition) =>
  array.reduce((accumulator, current) => {
    return accumulator && condition(current);
  }, true);

const map = (array, condition) =>
  array.reduce((accumulator, current) => {
    return [...accumulator, condition(current)];
  }, []);

//Check results

let arr = [1, 2, 2];
function isBiggerThanTwo(x) {
  return x > 2;
}
function multiplyByTwo(x) {
  return x * 2;
}
console.log(find(arr, isBiggerThanTwo));
console.log(filter(arr, isBiggerThanTwo));
console.log(some(arr, isBiggerThanTwo));
console.log(every(arr, isBiggerThanTwo));
console.log(map(arr, multiplyByTwo));

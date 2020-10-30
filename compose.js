const compose = (value, ...functions) =>
  functions.reduceRight((arr, func) => {
    return func(arr);
  }, value);

//Check results
const multiplyByTwo = (x) => {
  return x.map((el) => el * 2);
};
const addTwo = (x) => {
  return x.map((el) => el + 2);
};
const deleteEven = (x) => {
  return x.filter((el) => el % 2 === 0);
};

console.log(compose([1, 2, 4, 5], multiplyByTwo, addTwo, deleteEven));

const fib = (serialNumber) => {
  if (serialNumber === 0) {
    return 0;
  }
  if (serialNumber === 1) {
    return 1;
  }
  return fib(serialNumber - 2) + fib(serialNumber - 1);
};

console.log(fib(5));

const fibonacciSequence = (myFunc) => {
  for (let i = 0; i < 20; i++) {
    console.log(myFunc(i));
  }
};
fibonacciSequence(fib);

function fibonacci(n, array = [], counter = 0) {
  if (n === counter) {
    return array;
  } else if (counter <= n) {
    if (counter === 0) {
      array.push(0);
    } else if (counter === 1) {
      array.push(1);
    } else {
      array.push(array[array.length - 2] + array[array.length - 1]);
    }
  }

  fibonacci(n, array, counter + 1);
  return array;
}

console.log(fibonacci(7));

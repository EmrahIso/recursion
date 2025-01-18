function fibonacci(n) {
  let arr = [];

  for (i = 0; i < n; i++) {
    if (i === 0) {
      arr.push(0);
    } else if (i === 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }

  return arr;
}

function fibonacciRec(n, array = [], counter = 0) {
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

  fibonacciRec(n, array, counter + 1);
  return array;
}

console.log(fibonacci(8));
console.log(fibonacciRec(8));

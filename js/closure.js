function sum (numOne = 3) {
  console.log(`sum(3) = ${numOne}`);
  return function (numTwo = 5) {
      const result = numOne + numTwo
      console.log(`sum(5) = ${result}`);
      return function (numThree = 20) {
          const resultTwo = result + numThree;
          console.log(`sum(20) = ${resultTwo}`)
      }
  }
}

sum(3)(5)(20);
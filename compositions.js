'use strict'

// 1. simple function composition
const addByTwo = num => num + 2;
const multByThree = num => num * 3;

const composedFunctionResult = addByTwo(multByThree(5));
console.log(composedFunctionResult); // 17

// 2. creating a compose function to compose two or more functions

function compose() {
  const fns = arguments;

  return function (result) {
    // iterate the arguments from the last function
    for (var i = fns.length - 1; i >= 0; i--) {
      result = fns[i].call(this, result);
    }

    return result;
  };
};

const composedFunc = compose(addByTwo, multByThree);

console.log(composedFunc(5));
function getTomato() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" 🍅 Got tomato");
      // reject(" ⛔️ Unable to get ingredients");
    }, Math.random() * 1000);
  });
}

function getBread() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" 🍞 Got Bread");
      // reject(" ⛔️ Unable to get ingredients");
    }, Math.random() * 1000);
  });
}

function getCheese() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(" 🧀 Got Cheese");
      // reject(" ⛔️ Unable to get ingredients");
    }, Math.random() * 1000);
  });
}

/**
 * Let's create a makeGrilledCheese() function that will let us get all of
 * these ingredients in parallel. Let's console.log the outputs and then a
 * message saying we can now make our sandwich.
 *
 * If any of the promises are rejected, the function should catch them.
 */
// Check this page if you need help, especially under "Composition"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Promise.all([func1(), func2(), func3()])
// .then(([result1, result2, result3]) => { /* use result1, result2 and result3 */ });

function makeGrilledCheese() {
  Promise.all([getTomato(), getBread(), getCheese()]).then(
    ([tomato, bread, cheese]) => {
      console.log(tomato, bread, cheese);
      console.log("🥪 We can make our sandwich!");
    }
  );
}

makeGrilledCheese();

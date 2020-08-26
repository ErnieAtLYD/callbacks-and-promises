function getIngredients() {
  // By using setTimeOut, we're making this asynchronous.
  setTimeout(function () {
    console.log(" 🐷 Getting ingredients");
  }, Math.random() * 1000);
}

function makeSandwich() {
  setTimeout(function () {
    console.log(" 🥪 Making sandwich");
  }, Math.random() * 1000);
}

function getSandwich() {
  getIngredients();
  makeSandwich();
  console.log(" 🍽  Sandwich complete!");
}

getSandwich();

/**
 * Before JavaScript had promises are async/await, they
 * used callbacks. Set it up so that in line 15, the
 * makeSandwich function is passed as a callback function
 * to getIngredients and change the getIngredients function
 * to invoke the callback.
 */

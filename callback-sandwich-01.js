function getIngredients() {
  console.log(" 🐷 Getting ingredients");
}

function makeSandwich() {
  console.log(" 🥪 Making sandwich");
}

function getSandwich() {
  getIngredients();
  makeSandwich();
  console.log(" 🍽  Sandwich complete!");
}

getSandwich();

/**
 * TASK: make the functions getIngredients
 * and makeSandwich asynchronous by
 * wrapping the console.log in a setTimeout
 * function. Time the statement out for a
 * random time between 0 and 1000 seconds.
 */

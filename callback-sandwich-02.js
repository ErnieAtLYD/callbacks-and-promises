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

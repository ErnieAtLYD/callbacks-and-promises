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

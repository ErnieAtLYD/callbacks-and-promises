function getIngredients() {
  // By using setTimeOut, we're making this asynchornous.
  setTimeout(function () {
    return " 🐷🍞";
  }, Math.random() * 1000);
}

function makeSandwich(ingredients) {
  setTimeout(function () {
    return " 🥪 Sandwich - Ingredients: " + ingredients;
  }, Math.random() * 1000);
}

/**
 * Right now ingredients returns undefined. This makes me sad.
 * Why does it return undefined?
 */
function getSandwich() {
  let ingredients, sandwich;

  ingredients = getIngredients();
  console.log("My ingredients: " + ingredients);

  if (ingredients) {
    console.log("Gonna make my sandwich!");
    sandwich = makeSandwich(ingredients);
  }

  if (sandwich) {
    console.log(" 🍽  Time to eat my sandwich!");
  }
}

getSandwich();

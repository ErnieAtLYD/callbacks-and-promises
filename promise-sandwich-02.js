function getIngredients() {
  // 1: Turn this to return a new promise, but I'll need #2 to work.
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(" 🐷🍞");
      return;
    }, Math.random() * 1000);
  });
}

function makeSandwich(ingredients) {
  setTimeout(function () {
    return " 🥪 Sandwich - Ingredients: " + ingredients;
  }, Math.random() * 1000);
}

function getSandwich() {
  let ingredients, sandwich;

  //   ingredients = getIngredients();
  //   console.log("My ingredients: " + ingredients);

  getIngredients().then((ingredients) => {
    console.log("My ingredients: " + ingredients);
  });

  /**
   * If I console.log(ingredients) before line 32 it STILL says
   * undefined, even if ingredients in line 24 works! So I'll
   * move the code below to inside that .then() clause.
   */

  if (ingredients) {
    console.log("Gonna make my sandwich!");
    sandwich = makeSandwich(ingredients);
  }

  if (sandwich) {
    console.log(" 🍽  Time to eat my sandwich!");
  }
}

getSandwich();

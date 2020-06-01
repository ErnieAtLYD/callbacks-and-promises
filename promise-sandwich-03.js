function getIngredients() {
  // 1: Turn this to return a new promise, but I'll need #2 to work.
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(" 🐷🍞");
      return;
    }, Math.random() * 1000);
  });
}

// function makeSandwich(ingredients) {
//   setTimeout(function () {
//     return " 🥪 Sandwich - Ingredients: " + ingredients;
//   }, Math.random() * 1000);
// }

function makeSandwich(ingredients) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(" 🥪 Sandwich - Ingredients: " + ingredients);
      return;
    }, Math.random() * 1000);
  });
}

function getSandwich() {
  let ingredients, sandwich;

  getIngredients().then((ingredients) => {
    console.log("My ingredients: " + ingredients);
    if (ingredients) {
      // It shows line 24, which is great, but not 25. Let's try to have makeSandwich() return a Promise now as well.
      console.log("Gonna make my sandwich!");
      sandwich = makeSandwich(ingredients);
    }
  });

  if (sandwich) {
    console.log(" 🍽  Time to eat my sandwich!");
  }
}

getSandwich();

// This is taken from promise-sandwich-05.js.

function getIngredients() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(" 🐷🍞");
      return;
    }, Math.random() * 1000);
  });
}

function makeSandwich(ingredients) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(" 🥪 Sandwich - Ingredients: " + ingredients);
      return;
    }, Math.random() * 1000);
  });
}

async function getSandwich() {
  try {
    let ingredients = await getIngredients();
    console.log("My ingredients: " + ingredients);

    console.log("Gonna make my sandwich!");
    let sandwich = await makeSandwich(ingredients);

    console.log(sandwich);
    console.log(" 🍽  Time to eat my sandwich!");
  } catch (e) {
    console.error(e);
  }
}

getSandwich();

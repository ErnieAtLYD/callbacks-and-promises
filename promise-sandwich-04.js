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

function getSandwich() {
  let sandwich;

  getIngredients()
    .then((ingredients) => {
      console.log("My ingredients: " + ingredients);
      if (ingredients) {
        console.log("Gonna make my sandwich!");
        // sandwich = makeSandwich(ingredients);
        // By the way, this return keyword below is important.
        // Remove it and sandwich passes undefined in the next chain.
        return makeSandwich(ingredients);
      }
    })
    .then((sandwich) => console.log(sandwich));

  if (sandwich) {
    console.log(" 🍽  Time to eat my sandwich!");
  }
}

getSandwich();

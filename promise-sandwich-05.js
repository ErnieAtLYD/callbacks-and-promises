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

// Almost done, but what happens if something doesn't work or we reject the promise?
function getSandwich() {
  // let sandwich;

  getIngredients()
    .then((ingredients) => {
      console.log("My ingredients: " + ingredients);
      if (ingredients) {
        console.log("Gonna make my sandwich!");
        return makeSandwich(ingredients);
      }
    })
    .then((sandwich) => {
      console.log(sandwich);
      console.log(" 🍽  Time to eat my sandwich!");
    });
}

getSandwich();

function getIngredients() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.8) {
        resolve(" 🐷🍞");
      } else {
        reject(" ⛔️ Unable to get ingredients");
      }
      return;
    }, Math.random() * 1000);
  });
}

function makeSandwich(ingredients) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() < 0.8) {
        resolve(" 🥪 Sandwich - Ingredients: " + ingredients);
      } else {
        reject(" ⛔️ Unable to make sandwich");
      }
      return;
    }, Math.random() * 1000);
  });
}

function getSandwich() {
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
    })
    .catch((error) => console.error(error));
}

getSandwich();

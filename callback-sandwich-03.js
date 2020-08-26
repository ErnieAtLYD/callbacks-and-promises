function getIngredients(callback) {
  // By using setTimeOut, we're making this asynchornous.
  setTimeout(function () {
    console.log(" 🐷 Getting ingredients");
    callback();
  }, Math.random() * 1000);
}

function makeSandwich() {
  setTimeout(function () {
    console.log(" 🥪 Making sandwich");
  }, Math.random() * 1000);
}

function getSandwich() {
  getIngredients(makeSandwich);
  console.log(" 🍽  Sandwich complete!");
}

getSandwich();

/**
 * Now pass a callback function to makeSandwich as well, so
 * getSandwich looks like this:
 * function getSandwich() {
  getIngredients(() => {
    makeSandwich(() => {
      console.log(" 🍽  Sandwich complete!");
    });
  });
}
  Note though that any time we call callback() this time
  we have to explicitly check if (typeof callback === "function")
  first.
 */

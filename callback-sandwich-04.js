function getIngredients(callback) {
  // By using setTimeOut, we're making this asynchornous.
  setTimeout(function () {
    console.log(" 🐷 Getting ingredients");
    // We do have to explicitly check the type; otherwise, it could return undefined.
    if (typeof callback === "function") {
      callback();
    }
  }, Math.random() * 1000);
}

function makeSandwich(callback) {
  setTimeout(function () {
    console.log(" 🥪 Making sandwich");
    if (typeof callback === "function") {
      callback();
    }
    // I could have also done this instead. Why?
    // callback && callback();
  }, Math.random() * 1000);
}

function getSandwich() {
  getIngredients(() => {
    makeSandwich(() => {
      console.log(" 🍽  Sandwich complete!");
    });
  });
}

getSandwich();

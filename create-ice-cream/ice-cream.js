let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

async function kitchen() {
  try {
    await time(1000);
    console.log(`${stocks.Fruits[0]} was selected.`);

    await time(2000);
    console.log("fruit has been chopped.");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`);

    await time(1000);
    console.log("start the machine.");

    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[1]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} as toppings.`);

    await time(2000);
    console.log("Serve the Ice Cream");
  } catch (error) {
    console.log("Customer left", error);
  } finally {
    console.log("Day ended, shop closed.");
  }
}

kitchen();

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("Shop is closed"));
    }
  });
}

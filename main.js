// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.

  // Answer:

let sum = 0;
function question1 () {
for(i = 0 ; i < data.length; i++) {
  // i = 0 is starting at the beginning, i < data.length is stopping until
  // the end of the length, and i++ is 'reading' line by line (one at a time)
    sum += data[i].price;
  }

let avg = (sum / data.length).toFixed(2);
  //  avg = sum/data.length is calculating the average and .toFixed(2)
  // is rounding that number two places (to make cents)
  console.log(avg);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {

// square brackets create an empty array
let midPrice = [];
for (i = 0; i < data.length; i++) {
    let item = data[i];
    // Check this item's price
    if (item.price >= 14.00 && item.price <= 18.00) {
      // If the item price is in our range, add it to our holding array
      midPrice.push(item);
    }
  }
console.log(midPrice);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
// function question3 () {
//   if "currency_code" === "GBP"
//   console.log (answer)

  function question3 () {


  for (i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title, data[i].price);
      // included both title and price to print both things to console
    }
  }
}

// 4: Display a list of all items who are made of wood.
function question4 () {


for (i = 0; i < data.length; i++) {
  if (data[i].materials.includes("wood")) {
    // includes is a nifty tool as long as you remember to put paranthesis
    // around the following word...
    console.log(data[i].title);
    }
  }
}
// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  for (i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      // adding length here does the same thing it did for
      // but read the key instead of the whole array
      console.log(data[i].title, data[i].quantity, data[i].materials)
    }
  }
}


// 6: How many items were made by their sellers?

function question6 () {
let handmade = [ ];
// don't forget the equals sign here or it won't work!
  for (i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      handmade.push(handmade)
    }
  }
  console.log (handmade.length);
// also won't work unless nested properly...
}

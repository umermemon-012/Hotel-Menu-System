alert('Welcome to LUXE Hotel!');

let order = prompt(
  "What do you want to eat?\n" +
  "Pizza = 126$\n" +
  "Burger = 132$\n" +
  "Pasta = 35$\n" +
  "Salad = 124$"
);

// FIX 1: Add a check for null/empty order if the user cancels or submits nothing
if (!order) {
  alert("Order cancelled or invalid selection. Thank you!");
} else {

  let quantity = prompt("How many " + order + " do you want to order?");
  // FIX 2: Check if quantity is valid before converting to number
  if (quantity === null || quantity.trim() === "" || isNaN(Number(quantity))) {
      alert("Invalid quantity entered. Please try again.");
  } else {
      quantity = Number(quantity);
  
      let price = 0;
      
      // FIX 3: Use the toLowerCase() method for simpler comparison
      const standardizedOrder = order.trim().toLowerCase();

      if (standardizedOrder === "pizza") {
        price = 126;
      // FIX 4: Changed comma (,) to logical OR (||) - the main fix
      } else if (standardizedOrder === "burger") {
        price = 132;
      // FIX 4: Changed comma (,) to logical OR (||) - the main fix
      } else if (standardizedOrder === "pasta") {
        price = 35;
      // FIX 4: Changed comma (,) to logical OR (||) - the main fix
      } else if (standardizedOrder === "salad") {
        price = 124;
      } else {
        alert("Invalid item! Please try again.");
      }
      
      if (price > 0 && quantity > 0) { // Check for valid quantity as well
        let total = price * quantity;
        let tax = total * 0.10; 
        let finalBill = total + tax;
      
        alert("You ordered " + quantity + " " + order + "(s)\n" +
              "Your total bill (with tax) is: $" + finalBill.toFixed(2)); // FIX 5: Use toFixed(2) for better currency display
      }
  }
          }

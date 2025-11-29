alert('Welcome to LUXE Hotel!');

let order = prompt(
  "What do you want to eat?\n" +
  "Pizza = 126$\n" +
  "Burger = 132$\n" +
  "Pasta = 35$\n" +
  "Salad = 124$"
);

let quantity = prompt("How many " + order + " do you want to order?");
quantity = Number(quantity);

let price = 0;

if (order === "Pizza" || order === "pizza") {
  price = 126;
}else if (order === "Burger" , order === "burger") {
  price = 132;
}else if (order === "Pasta" , order === "pasta") {
  price = 35;
}else if (order === "Salad" , order === "salad") {
  price = 124;
}else {
  alert("Invalid item! Please try again.");
}
if (price > 0) {
  let total = price * quantity;
  let tax = total * 0.10; 
  let finalBill = total + tax;

  alert("You ordered " + quantity + " " + order + "(s)\n" +
        "Your total bill (with tax) is: $" + finalBill);
}

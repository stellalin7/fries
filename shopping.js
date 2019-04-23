//1
console.log("​Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.");
var shopping_list = ['pop tarts','ramen noodles','chips','salsa','coffee'];
console.log("Shopping list: " + shopping_list);

//2
console.log("Add 'fruit loops' to the list.");
shopping_list.push('fruit loops');
console.log("Shopping list: " + shopping_list);

//3
console.log("Update 'coffee' to 'fair trade coffee'");
shopping_list[4]='fair trade coffee';
console.log("Shopping list: " + shopping_list);

//4
console.log("Replace 'chips' and 'salsa' with 'rice' and 'beans'");
shopping_list.splice(2,2,'rice','beans');
console.log("Shopping list: " + shopping_list);

//5
console.log("Create an empty array to represent your shopping cart");
var shopping_cart = [];
console.log("Shopping cart: " + shopping_cart);

//6
console.log("Remove the last item from your shopping list and add it to your cart");
shopping_cart.push(shopping_list.pop());
console.log("Shopping list: " + shopping_list);
console.log("Shopping cart: " + shopping_cart);

//7
console.log("Remove the first item from your shopping list and add it to the cart");
shopping_cart.push(shopping_list.shift());
console.log("Shopping list: " + shopping_list);
console.log("Shopping cart: " + shopping_cart);

//8
console.log("Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.");
while (shopping_list.length > 0){
	shopping_cart.push(shopping_list.pop());
	console.log("Shopping list: " + shopping_list);
	console.log("Shopping cart: " + shopping_cart);
}

//9
console.log("Sort the items in your cart alphabetically... backwards");
shopping_cart.reverse();
console.log("Shopping cart: " + shopping_cart);

//10
console.log("Shopping cart: " + shopping_cart.toString());







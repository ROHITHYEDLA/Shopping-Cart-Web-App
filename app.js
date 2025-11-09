let cart = [];
let total = 0;
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  displayCart();
}
function displayCart() {
  const list = document.getElementById("cart");
  list.innerHTML = "";
  cart.forEach((item, i) => {
    list.innerHTML += `<li>${item.name} - ₹${item.price} <button onclick="removeItem(${i})">Remove</button></li>`;
  });
  document.getElementById("total").textContent = total;
}
function removeItem(i) {
  total -= cart[i].price;
  cart.splice(i, 1);
  displayCart(); }

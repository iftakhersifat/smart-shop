let cart = [];
// id from navbar
const navCartBtn = document.getElementById("navCartBtn");
// id from navbar cart button
const cartCount = document.getElementById("cartCount");

// id from cart section
const cartSection = document.getElementById("cartSection");


// id form cart items
const cartItems = document.getElementById("cartItems");
// id from subtotal (cart details)
const cartSubtotal = document.getElementById("cartSubtotal");
// id from delivery (cart details)
const deliveryCharge = document.getElementById("deliveryCharge");
// id from shipping (cart details)
const shippingCost = document.getElementById("shippingCost");
// id from discount (cart details)
const discountAmount = document.getElementById("discountAmount");
// id from total (cart details)
const cartTotal = document.getElementById("cartTotal");
// id from coupon (cart details)
const couponInput = document.getElementById("couponCode");
// id from coupon btn (cart details)
const applyCouponBtn = document.getElementById("applyCoupon");

// id from balance section
let balance = parseFloat(document.getElementById("balanceAmount").textContent);

let discount = 0;


navCartBtn.addEventListener("click", function() {
  cartSection.classList.toggle("hidden");
});

document.addEventListener("click", function(e) {
  if (!e.target.classList.contains("add-to-cart")) return;

  const { id, title, image, price } = e.target.dataset;
  const productPrice = parseFloat(price);


  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.price;
  }
  const shipping = 5;
  const tax = 2.5;
  let newTotal = subtotal + productPrice + shipping + tax;
  
  if (newTotal > balance) {
    return alert("Not enough balance!");
  }
  const existing = cart.find(item => item.id === id);
  if (existing) existing.quantity++;
  else cart.push({ id, title, price: productPrice, image, quantity: 1 });

  updateCart();
  cartSection.classList.remove("hidden");
});



function removeFromCart(id) {
    let newCart = [];
    for (let item of cart) {
        if (item.id !== id) {
            newCart.push(item);
        }
    }
    cart = newCart;
    updateCart();
}


function updateCart() {
  cartItems.innerHTML = "";
  let subtotal = 0;

  for (let item of cart) {
    subtotal += item.price;
    cartItems.innerHTML += `
      <div class="flex items-center justify-between border p-2 rounded">
        <div class="flex items-center gap-3">
          <img src="${item.image}" class="h-12 w-12 object-contain" alt="">
          <div>
            <p class="font-semibold">${item.title}</p>
            <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
          </div>
        </div>
        <button onclick="removeFromCart('${item.id}')" class="text-red-500 font-bold">Remove</button>
      </div>
    `;
  }

  let delivery = 5;
  let shipping = 2.5;
  let total = subtotal + delivery + shipping - discount;

  cartSubtotal.textContent = subtotal.toFixed(2);
  deliveryCharge.textContent = delivery.toFixed(2);
  shippingCost.textContent = shipping.toFixed(2);
  discountAmount.textContent = discount.toFixed(2);
  cartTotal.textContent = total.toFixed(2);

  let count = 0;
  for (let item of cart) {
    count += item.quantity;
  }
  cartCount.textContent = count;
}

applyCouponBtn.addEventListener("click", function() {
  let code = couponInput.value.trim();
  let subtotal = parseFloat(cartSubtotal.textContent);

  if (code === "SMART10") {
    discount = subtotal * 0.10;
    alert("Coupon applied successfully!");
  } else {
    discount = 0;
    alert("Invalid coupon code!");
  }
  updateCart();
});

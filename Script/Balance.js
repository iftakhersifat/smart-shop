const balanceAmount = document.getElementById("balanceAmount");
const addMoneyBtn = document.getElementById("addMoneyBtn");
const navBalance = document.getElementById("navBalance");
let currentBalance = parseFloat(balanceAmount.textContent);

addMoneyBtn.addEventListener("click", () => {
  currentBalance += 1000;
  balanceAmount.textContent = currentBalance;
  navBalance.textContent = currentBalance;
  alert("Money added successfully!");
});

const userBalanceSection = document.getElementById("userBalance");
const navBalanceContainer = document.getElementById("navBalanceContainer");
  
navBalanceContainer.addEventListener("click", () => {
userBalanceSection.classList.toggle("hidden");
});
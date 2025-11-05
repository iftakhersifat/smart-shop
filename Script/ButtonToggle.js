document.getElementById("backToTop").addEventListener("click", function () {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" })
})
document.getElementById("navBalanceContainer").addEventListener("click", function () {
    document.getElementById("userBalance").scrollIntoView({ behavior: "smooth" })
})
document.getElementById("navCartBtn").addEventListener("click", function () {
    document.getElementById("cartSection").scrollIntoView({ behavior: "smooth" })
})
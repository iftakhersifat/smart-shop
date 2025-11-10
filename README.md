# 🛍️ SmartShop

SmartShop is a simple e-commerce web project made using **HTML**, **CSS (Tailwind + DaisyUI)**, and **JavaScript**.  
This project shows how a shopping website works — with product display, add to cart, user balance, coupon system, and more.  
Everything is done using JavaScript DOM without any page reload.

---

## 🌟 Main Features

### 🏠 Home Page
- Sticky navbar for easy navigation between sections.
- “Back to Top” button to go quickly to the top.
- Clean and responsive design for all devices.

### 🛒 Product Section
- Products are loaded dynamically from the **Fake Store API**.
- Each product card shows:
  - Product image  
  - Name / Title  
  - Price  
  - Rating using Font Awesome stars  
  - **Add to Cart** button  
- When a product is added, the cart count updates automatically in the navbar.

### 💳 Shopping Cart System
- Add or remove products from the cart.
- Auto calculate:
  - Subtotal
  - Delivery charge
  - Shipping cost
  - Discount (using coupon)
  - Final total
- Coupon example: **SMART10 = 10% OFF**
- All calculations happen live using JavaScript (no reload).

### 💰 User Balance System
- Every user starts with **1000 BDT**.
- If a product price is higher than the balance, user can’t add it to the cart.
- Shows a warning if the balance is not enough.
- Has an **“Add Money”** button (+1000 BDT each time).

### 🧾 Review Section
- Loads reviews from a local JSON file.
- Each review shows:
  - Reviewer image  
  - Name  
  - Comment  
  - Rating  
  - Date  
- Has a carousel (made with DaisyUI) that slides manually.

### 📞 Contact Section
- Contact form with:
  - Name
  - Email
  - Message  
- Simple JavaScript validation before submitting.
- Shows a thank-you message after successful submit.

### 👥 About Us Section
- Short intro about SmartShop and the idea behind it.
- Shows team members with their names and roles.
- Optionally includes group photo or mission statement.

### 💌 Newsletter & FAQ
- Newsletter subscription form with email validation.
- FAQ accordion section with expandable answers.

---

## 🧠 Technologies Used

| Category | Used |
|-----------|------|
| Frontend | HTML5, Tailwind CSS, DaisyUI |
| Logic | JavaScript (DOM) |
| API | FakeStore API |
| Icons | Font Awesome |

---

## 👨‍💻 Developer Info

**Project Name:** SmartShop  
**Course Project:** [Tools and Technologies For Internet Programming / Web Technologies]  
**Developed by:** [Iftakher Hossen & Mehedi Hasan]  
**Student ID:** [C231205 & C231204]  

---

## 📜 Note

This project was made for educational purpose only to practice **DOM manipulation** and **responsive web design** using **Tailwind CSS** and **JavaScript**.

---

⭐ *Thank you for checking my project!*


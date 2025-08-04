# 🛒 GrabIt Ecommerce Website

![GrabIt Banner](./screenshots/banner.png) <!-- Replace with your actual image path -->

**GrabIt** is a fully responsive, modern e-commerce web application built using **React + Vite**. It offers a smooth shopping experience with dynamic product categories, real-time cart/wishlist updates, and user authentication. From animated transitions to search suggestions and a live order tracking interface, GrabIt provides everything a user expects from a polished online shopping platform.

---

## 🚀 Live Demo

🔗 [View the live website](https://your-netlify-site.netlify.app)

---

## 🧰 Tech Stack

| Tool            | Usage                        |
|-----------------|------------------------------|
| ⚛️ React + Vite | Frontend Framework            |
| 🎨 Tailwind CSS | Styling + Responsive UI       |
| 🧠 React Hooks / Context API | Local state management |
| 🗃️ Redux Toolkit | Global state (Cart, Wishlist) |
| 💫 Framer Motion | Scroll-triggered animations  |
| 🎯 Lucide & React Icons | Iconography           |
| 📩 EmailJS       | Contact form mail delivery   |
| ☁️ Netlify       | Deployment                   |

---

## ✨ Features

### 🖥️ Frontend
- 👋 Landing section with project intro and illustration
- 📦 Dynamic product listing from API
- 🗂️ Category-based filtering (dynamic route)
- 🔍 Search bar with real-time suggestions
- 🔍 Product Info Page with:
  - Title, description, price, brand
  - Discount, rating, category
  - Related products

### 🛒 Shopping Functionality
- ❤️ Add to Wishlist
- 🛒 Add to Cart (with quantity controls)
- 💰 Purchase Page with order summary
- 🧾 Your Orders (purchase history)

### 👤 User System
- 🔐 Sign Up / Sign In with validation
- 🙍‍♂️ Profile page showing order history
- 🔄 Data persistence using Redux & Context

### 🌐 Utility
- 🧾 About Us and 📩 Contact Us (via EmailJS)
- 📱 Fully mobile responsive
- 🎉 Animated transitions with Framer Motion
- 🔔 Toast alerts on major user actions (cart, wishlist, etc.)
- 🔗 Developer social links in footer (GitHub, LinkedIn, Email)

---

## 📁 Folder Structure (Simplified)

src/
├── assets/ # Images & static assets
├── components/ # UI components (Header, Footer, ShopByCategory etc.)
├── pages/ # Route pages (Home, Category, InfoPage, Cart etc.)
├── context/ # Context API (Search, Auth, etc.)
├── redux/ # Redux store and slices (cartSlice, wishListSlice, etc.)
├── User-components/ # Auth (SignIn , Sign Up)
├── App.jsx
├── main.jsx

ecommerce-app/
├──public / # data.json (Api file)
├──src



---

## 📚 What I Learned

- Building dynamic routes in React using `react-router-dom`
- State management with Context API and Redux Toolkit
- Animating components with Framer Motion
- Integrating external services like EmailJS
- Creating responsive layouts using Tailwind CSS
- Working with real API data to render and manipulate product info
- Structuring large-scale React projects efficiently

---

## 🔮 Future Plans

- 🧠 Add backend with a connected database (likely Firebase or MongoDB)
- 🛠️ Admin portal for product management (CRUD features)
- 🧾 Implement real checkout with payment gateway (like Razorpay/Stripe)
- 📦 User wishlist/cart syncing with backend

---

## 👨‍💻 Developer Contact

📧 Email: your-email@example.com 
🔗 [LinkedIn - Ashish Thakur](https://www.linkedin.com/in/ashish-thakur)  
🐙 [GitHub - AshishTomar](https://github.com/AshishTomar)

---

> ⭐ **Feel free to fork this repo, give a star, or contribute!**  
> Happy shopping with **GrabIt** 🛍️

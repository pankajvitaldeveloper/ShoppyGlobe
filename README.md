
# 🛍️ ShoppyGlobe – E-commerce React Application

**ShoppyGlobe** is a fully functional, single-page e-commerce application built using React, Redux Toolkit, and React Router. It demonstrates core frontend concepts like component structuring, state management, data fetching, routing, and performance optimization.

---


## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── ProductList.jsx
│   ├── ProductItem.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   ├── NotFound.jsx
│   └── GitHubButton.jsx
├── redux/
│   ├── cartSlice.js
│   └── store.js
├── hooks/
│   └── useFetchProducts.js
├── App.jsx
├── main.jsx
└── routes/
    └── Routes.jsx
```

---

## 🧠 Features

### ✅ Component-Based Architecture
- `App`: Main wrapper
- `Header`: Navigation and cart
- `ProductList` & `ProductItem`: Displays and handles adding products
- `ProductDetail`: Single product view
- `Cart` & `CartItem`: View and modify cart
- `Checkout`: Simulates order confirmation
- `NotFound`: 404 route fallback
- `GitHubButton`: Floating external GitHub button using `react-icons`

### 📦 State Management – Redux Toolkit
- Global state for cart items
- `addToCart`, `removeFromCart`, `decreaseQuantity` actions
- Handles quantity increase if product is already in cart

### 🔍 Search & Filter
- Live search functionality to filter products by title

### ⚛️ Data Fetching with useEffect
- Product listing fetched from:
  ```
  https://dummyjson.com/products
  ```
- Product details fetched via route param (`/product/:id`)
- Custom `useFetchProducts` hook
- Error handling for failed API requests

### 🌐 React Router
- Routes:
  - `/`: Product list
  - `/product/:id`: Product details
  - `/cart`: View cart
  - `/checkout`: Simulated checkout
  - `*`: 404 Not Found

### 🚀 Performance Optimization
- Code-splitting with `React.lazy()` and `Suspense`

### 🎨 Styling
- Clean, responsive UI using Tailwind CSS or basic CSS
- Works well on desktop and mobile

---

## 🧪 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/pankajvitaldeveloper/ShoppyGlobe.git

# 2. Navigate to the project directory
cd ShoppyGlobe

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```


## 📦 Tech Stack

- React 
- Redux Toolkit
- React Router v6
- React Icons
- Tailwind CSS (or custom)
- Vite
- DummyJSON API

---

## 👨‍💻 Author

**Pankaj Vital**  
📧 [Email](mailto:pankajvitaldeveloper@gmail.com)  
🌐 [GitHub](https://github.com/pankajvitaldeveloper)

---


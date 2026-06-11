
# E-Commerce Website

[Live demo](https://e-commerce-website-abdulrahman-alsayed.vercel.app/)

A production-style e‑commerce Single-Page Application built with React and Vite. Features client-side routing, global state via Redux, lazy-loaded product pages, Bootstrap-based responsive UI, and UX utilities (toasts, loading states).

---

## Table of contents

- Key features  
- Tech stack  
- Quickstart  
- Project structure  
- Routing & pages  
- Notable libraries & rationale  

---

## Key features

- Product listing and product detail pages (detail is lazy-loaded).  
- Shopping cart backed by Redux global state.  
- Checkout flow and auth pages (Login / Register).  
- Responsive UI using Bootstrap + custom styles.  
- Toast notifications for user feedback (`react-hot-toast`).  
- Loading spinners and graceful empty/error states.

---

## Tech stack

- React (functional components + hooks)  
- Vite (dev server & build)  
- Redux / @reduxjs/toolkit + react-redux  
- React Router DOM  
- Bootstrap 5 (CSS + JS bundle)  
- react-hot-toast, react-fast-marquee, Font Awesome  
- ESLint (linting)

See package.json for exact dependency versions.

---

## Project structure (high level)

```
.
├─ index.html
├─ package.json
├─ vite.config.js
├─ vercel.json
└─ src/
   ├─ main.jsx        # app bootstrap (Provider + store)
   ├─ App.jsx         # routes + global layout
   ├─ index.css
   ├─ Components/     # shared UI components (Navbar, Footer, etc.)
   ├─ Pages/          # route pages (Home, Products, Product, Cart, Checkout, Login, Register, About, Contact, 404)
   └─ Redux/          # store and slices
```

---

## Routing & pages

Routes implemented in App.jsx include:
- `/` — Home  
- `/products` — Product list  
- `/products/:id` — Product detail (lazy-loaded with `React.lazy` + `Suspense`)  
- `/cart` — Cart  
- `/checkout` — Checkout  
- `/login` — Login  
- `/register` — Register  
- `/about`, `/contact`, and `/*` (404)

This structure keeps initial bundle sizes smaller by loading heavy views on demand.

---

## Notable libraries & rationale

- `react-router-dom` — declarative client-side routing.  
- `@reduxjs/toolkit` + `react-redux` — predictable global state for cart and user data.  
- `bootstrap` — rapid responsive layout and UI primitives.  
- `react-hot-toast` — lightweight, accessible toasts for immediate feedback.  
- `Font Awesome` — iconography.  
- `react-fast-marquee` — optional hero/banner animations.

---



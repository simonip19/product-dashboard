# React Product Dashboard

A simple product dashboard built using **React + Vite**.  
This project demonstrates component-based architecture, routing, and global state management using the Context API and useReducer.

## Features

- Product listing page
- Add to cart functionality
- Remove items from cart
- Global cart state management
- Client-side routing
- Simulated async data fetching


## Tech Stack

- React (Functional Components + Hooks)
- Vite
- React Router DOM
- Context API
- useReducer
- CSS

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
```

### 2. Navigate into the project

```bash
cd project-name
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

The app will run at:

```
http://localhost:5173
```

## Application Flow

1. Dashboard loads product data.
2. Clicking **Add to Cart** dispatches an action.
3. `useReducer` updates global cart state.
4. Navbar cart count updates automatically.
5. Cart page displays selected products.

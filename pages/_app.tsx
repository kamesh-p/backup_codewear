// import '@/styles/globals.css'
import { useEffect, useState } from "react";

import "../app/globals.css";
import Header from "./componenets/header";
import { Provider } from "react-redux";
import store from "@/redux/store";
export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const increaseQuantity = (itemcode) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemcode]) {
        newCart[itemcode].qty += 1;
      }
      return newCart;
    });
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (itemcode) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemcode] && newCart[itemcode].qty > 1) {
        newCart[itemcode].qty -= 1;
      } else if (newCart[itemcode] && newCart[itemcode].qty === 1) {
        delete newCart[itemcode];
      }
      return newCart;
    });
  };

  // Load cart data from localStorage on component mount
  useEffect(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
      localStorage.clear();
    }
  }, []);

  // Function to add an item to the cart
  // Function to add an item to the cart with consideration for variants
  // Function to add an item to the cart with consideration for variants and size
  const addToCart = (itemcode, qty, price, name, size, variant, img) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      // Create a unique key combining itemcode, variant, and size
      const cartKey = `${itemcode}-${variant}-${size}`;
      if (cartKey in newCart) {
        // If the item is already in the cart, increase the quantity
        newCart[cartKey].qty += qty;
      } else {
        // If it's a new item or a different variant/size, create a new entry
        newCart[cartKey] = { qty, price, name, size, variant, img };
      }
      return newCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemcode) => {
    const newCart = { ...cart };
    if (itemcode in newCart) {
      newCart[itemcode].qty -= 1;
      if (newCart[itemcode].qty <= 0) {
        delete newCart[itemcode];
      }
    }
    setCart(newCart);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart({});
  };

  // Update the subtotal whenever cart changes
  useEffect(() => {
    let newSubtotal = 0;
    for (const itemcode in cart) {
      const item = cart[itemcode];
      newSubtotal += item.price * item.qty;
    }
    setSubtotal(newSubtotal);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Header
        cart={cart}
        addcart={addToCart}
        removecart={removeFromCart}
        clearCart={clearCart}
        subtotal={subtotal}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />

      <Component
        cart={cart}
        addcart={addToCart}
        removecart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
    </>
  );
}

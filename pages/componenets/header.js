import Link from "next/link";
import React, { useRef } from "react";

const Header = ({
  cart,
  addcart,
  removecart,
  clearCart,

  decreaseQuantity,
  increaseQuantity,
}) => {
  // console.log(cart, addcart, removecart, clearCart, subtotal);
  const cartRef = useRef();
  const cs = cart.slug;
  console.log("slug", cart);
  const length = Object.entries(cart).length;
  console.log("slug", length);
  const calculateTotalPrice = () => {
    let total = 0;
    for (const item in cart) {
      const product = cart[item];
      total += parseFloat(product.price.slice(1)) * product.qty; // Assuming price is formatted like "$20.00"
    }
    return total.toFixed(2); // Format total to 2 decimal places
  };

  const total = calculateTotalPrice();

  const toggleCart = () => {
    if (cartRef.current.classList.contains("translate-x-full")) {
      cartRef.current.classList.remove("translate-x-full");
      cartRef.current.classList.add("translate-x-0");
    } else {
      cartRef.current.classList.remove("translate-x-0");
      cartRef.current.classList.add("translate-x-full");
    }
  };

  const closeCart = () => {
    cartRef.current.classList.remove("translate-x-0");
    cartRef.current.classList.add("translate-x-full");
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">
            <Link href="/">Coders</Link>
          </span>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link href="/hoddies">
            <p className="mr-5 hover:text-gray-900">Hoodies</p>
          </Link>

          <Link href="/cups">
            <p className="mr-5 hover:text-gray-900">Mugs</p>
          </Link>
          <Link href="/t-shirt">
            <p className="mr-5 hover:text-gray-900">T-shirts</p>
          </Link>
          <Link href="/contact">
            <p className="mr-5 hover:text-gray-900">Contacts</p>
          </Link>
        </nav>
        <button
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          onClick={toggleCart}
        >
          Cart
          <sup className="ml-1 text-red-500">{length}</sup>
        </button>

        <div
          ref={cartRef}
          className="w-72 sidebar absolute top-0 right-0 bg-white p-10 transform transition-transform translate-x-full z-10 shadow-lg"
        >
          <h2 className="font-bold text-xl mb-6">Shopping Cart</h2>
          <span
            onClick={closeCart}
            className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            &#x2716;
          </span>
          <ol className="list-decimal pl-4 space-y-4">
            {Object.keys(cart).length === 0 && (
              <p className="text-sm font-normal">No items in the cart.</p>
            )}
            {Object.keys(cart).map((k) => (
              <li key={k} className="border-b pb-3">
                <div className="flex items-center justify-between">
                  <div className="w-2/3">
                    <p className="text-base font-medium">{cart[k].name}</p>
                    <p className="text-sm text-gray-500">
                      {cart[k].variant} - {cart[k].size}
                    </p>
                  </div>
                  <div className="w-1/3 flex items-center justify-end space-x-2">
                    <button
                      className="text-sm text-gray-500 hover:text-blue-500"
                      onClick={() => decreaseQuantity(k)}
                    >
                      -
                    </button>
                    <p className="text-base font-semibold">{cart[k].qty}</p>
                    <button
                      className="text-sm text-gray-500 hover:text-blue-500"
                      onClick={() => increaseQuantity(k)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ol>
          <div className="flex justify-between mt-6">
            <p className="text-base font-semibold">Subtotal</p>
            <p className="text-base font-semibold">${total}</p>
          </div>
          <div className="mt-4">
            <Link href="/checkout">
              <p className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
                Checkout
              </p>
            </Link>
          </div>
          <div className="mt-4">
            <button
              onClick={clearCart}
              className="block text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

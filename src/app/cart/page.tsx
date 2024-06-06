"use client";
import useCart from "@/hooks/useCart";
import { CartItem } from "@/types/type";

import SectionContainer from "@/utils/SectionContainer";

const Cart = () => {
  const { cart, getCartQuantity, removeFromCart, clearCart, updateQuantity } =
    useCart();

  return (
    <SectionContainer>
      <div className="cart-container">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        <p>Total Items in Cart: {getCartQuantity()}</p>

        <ul>
          {cart.map((item: CartItem) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-20 h-20 mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>Price: ৳{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        {cart.length > 0 && (
          <button
            onClick={() => clearCart()}
            className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
          >
            Clear Cart
          </button>
        )}
      </div>
    </SectionContainer>
  );
};

export default Cart;

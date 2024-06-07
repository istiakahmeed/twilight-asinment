"use client";
import useCart from "@/hooks/useCart";

import SectionContainer from "@/utils/SectionContainer";

const Cart = () => {
  const { cart, getCartQuantity, removeFromCart, clearCart, updateQuantity } =
    useCart();

  return (
    <SectionContainer>
      <h1 className="text-center text-4xl font-bold pt-20">
        I Think i could create this😊
      </h1>
    </SectionContainer>
  );
};

export default Cart;

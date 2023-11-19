"use client";
import CartClient from "@/components/cart/CartClient";
import Container from "@/components/ui/Container";
const Cart = () => {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
};

export default Cart;

import { useSelector } from "react-redux";
import { OrderSummary, ShoppingList } from "../Components";

function Cart() {

  const cartItems = useSelector((state) => state.cartItems);
  const orderSummary = useSelector((state)=> state.orderSummary)

  return (
    <div className="container mt-5">
      <h3 className="text-center display-6 fw-bold">Cart</h3>
      <hr/>
      <div className="row mt-5 pt-5">
        <ShoppingList cartItems={cartItems} />
        <OrderSummary
          //  handling the possibility of unexpected behavior
          //  resulting in a negative value,
          //  as well as rounding to the nearest two decimal places.
          totalQuantity={orderSummary.totalQuantity}
          totalPrice={Math.abs(orderSummary.totalPrice).toFixed(2)}
          shipping={Math.abs(orderSummary.shipping).toFixed(2)}
          totalAmount={Math.abs(orderSummary.totalAmount).toFixed(2)}
          tfoot={true}
        />
      </div>
    </div>
  );
}
export default Cart;

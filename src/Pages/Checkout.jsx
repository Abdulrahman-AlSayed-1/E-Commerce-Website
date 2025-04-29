import { useSelector } from "react-redux";
import { OrderSummary } from "../Components";
import { BillingAddress } from "../Components";
function Checkout() {
    const orderSummary=useSelector(state=>state.orderSummary)
    return ( 
        <>
         <div className="container mt-5">
           <h2 className="display-6 fw-bold text-center">Checkout</h2>
           <hr/>
           <div className="row flex-wrap-reverse mt-5 pt-5">
             <BillingAddress/>
             <OrderSummary
              //  handling the possibility of unexpected behavior
              //  resulting in a negative value,
              //  also rounding to the nearest two decimal places.
              totalQuantity={orderSummary.totalQuantity}
              totalPrice={Math.abs(orderSummary.totalPrice).toFixed(2)} 
              shipping={Math.abs(orderSummary.shipping).toFixed(2)}
              totalAmount={Math.abs(orderSummary.totalAmount).toFixed(2)}
              tfoot={false}
             />
           </div>
         </div>
        </>
     );
}

export default Checkout;
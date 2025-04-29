import { Link } from "react-router-dom";

 const OrderSummary = ({
    totalQuantity,
    totalPrice,
    shipping,
    totalAmount,
    tfoot
  }) => {
    return (
      <div className="col-10 col-lg-4 mx-auto">
        <table className="table table-striped" border={1}>
          <thead className="table-secondary">
            <tr>
              <th className="lead">Order Summary</th>
            </tr>
          </thead>
          { tfoot &&
          <tfoot>
            <tr>
              <td>
                <Link to="/checkout" className="btn btn-primary btn-outline-dark rounded-3 py-2 w-100">
                  <span className="lead text-light">Checkout</span>
                </Link>
              </td>
            </tr>
          </tfoot>
          }
          <tbody>
            <tr>
              <td>
                <div className="d-flex justify-content-between p-2">
                  <span className="lead">Purchases ({totalQuantity})</span>
                  <span className="lead">{totalPrice}$</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex justify-content-between p-2">
                  <span className="lead">Shipping</span>
                  <span className="lead">{shipping}$</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex justify-content-between p-2">
                  <span className="lead fw-bold">Total Amount</span>
                  <span className="lead fw-bold">{totalAmount}$</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
export default OrderSummary;
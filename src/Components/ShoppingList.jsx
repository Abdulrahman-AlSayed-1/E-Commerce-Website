import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addItem, subQuantity } from "../Redux/Slices/cartSlice";

const ShoppingList = ({ cartItems }) => {
  
    const dispatch = useDispatch();

    const handleMinusAndPlus = (e, payload) => {
      switch (e.target.dataset.icon) {
        case "minus":
          dispatch(subQuantity(payload));
          break;
        case "plus":
          dispatch(addItem(payload));
      }
    };
    return (
      <div className="col-10 col-lg-8 mx-auto">
        <table className="table" border={1}>
          <thead className="table-secondary">
            <tr>
              <th className="lead">Shopping List</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length ? (
              cartItems.map(({ payload, quantity }) => {
                return (
                  <tr key={payload.id}>
                    <td className="row">
                        <div
                          className="col-md-3 p-3 d-flex align-items-center justify-content-center"
                          style={{ height: "150px" }}>  
                          <img
                            className="mh-100 img-fluid"
                            src={payload.image}
                            alt={payload.id}
                          />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center fs-5">
                          <span className="text-center">{payload.title}</span>
                        </div>
                        <div className="col-md-3 fs-5 my-auto px-3">
                          <div className="d-flex justify-content-between align-items-center mt-3">
                            <button className="border-0 bg-transparent">
                              <FontAwesomeIcon
                                icon={faMinus}
                                className="text-danger"
                                onClick={(e) => handleMinusAndPlus(e, payload)}
                              />
                            </button>
                            <span className="fw-bold">{quantity}</span>
                            <button className="border-0 bg-transparent">
                              <FontAwesomeIcon
                                icon={faAdd}
                                className="text-success"
                                onClick={(e) => handleMinusAndPlus(e, payload)}
                              />
                            </button>
                          </div>
                          <p className="mt-3 text-center">
                            {quantity}x{payload.price}$
                          </p>
                        </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="text-center py-3 lead fs-6 text-secondary">
                  Cart is Empty
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  export default ShoppingList
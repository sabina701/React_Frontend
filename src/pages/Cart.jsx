import React, { useContext } from "react";
import "../css/table.css";
import { BtnContext } from "../components/context/BtnContext";

const Cart = () => {
  const { state, dispatch } = useContext(BtnContext);

  console.log(state.cart);

  return (
    <>
      <h2>Products in Cart</h2>

      <div className="container">
        {state.cart.length === 0 ? (
          <p className="text-black">Nothing in the cart</p>
        ) : (
          <div>
            <table className="table table-striped">
              <tbody>
                {state.cart.map((product) => (
                  <tr key={product.id}>
                    <td className="align-middle">
                      <img
                        src={product.images?.[0] || product.images?.[1]}
                        className="image"
                        alt={product.title}
                      />
                    </td>

                    <td className="align-middle">
                      {product.title}
                      <br />

                      <p
                        className="text-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product.id,
                          })
                        }
                        style={{ cursor: "pointer" }}
                      >
                        Remove
                      </p>
                    </td>

                    <td className="align-middle">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch({
                            type: "DECREASE_QUANTITY",
                            payload: product.id,
                          })
                        }
                      >
                        -
                      </button>

                      <span className="ms-1 me-2">{product.quantity}</span>

                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QUANTITY",
                            payload: product.id,
                          })
                        }
                      >
                        +
                      </button>
                    </td>

                    <td className="align-middle">
                      Rs. {product.price * product.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

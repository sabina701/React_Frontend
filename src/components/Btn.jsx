import { useContext } from "react";
import { BtnContext } from "./context/BtnContext";
const Btn = ({ children, className, product, type }) => {
  const { dispatch } = useContext(BtnContext);

  function handleClick(event) {
    event.stopPropagation();

    if (type === "ADD_TO_CART") {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }

    if (type === "ADD_TO_WISHLIST") {
      dispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
    }
  }

  return (
    <>
      <button className={className} onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Btn;

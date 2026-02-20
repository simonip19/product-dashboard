import { useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  // Check if product is already in cart
  const isAdded = cart.some((item) => item.id === product.id);

  const handleAdd = useCallback(() => {
    if (!isAdded) {
      dispatch({ type: "ADD", payload: product });
    }
  }, [dispatch, product, isAdded]);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button
        className={`add-btn ${isAdded ? "added" : ""}`}
        onClick={handleAdd}
        disabled={isAdded}
      >
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;

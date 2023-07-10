import classes from "./CartButton.module.css";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const visibleCart = () => {
    dispatch(uiActions.toggle());
  };

  const cartHeader = useSelector((state) => state.cartSlice.totalQuantity);

  return (
    <button className={classes.button} onClick={visibleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartHeader}</span>
    </button>
  );
};

export default CartButton;

import classes from "./CartItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { controlItemAction } from "../../store/index";
import { cartAction } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const controlNumberOfItem = useSelector(
    (state) => state.controlItemNumber.numberOfItems
  );
  const controlitem = useSelector((state) => state.addTocart);

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemFromCart({ id, title, price }));
    console.log(id);
  };

  return (
    <>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2) * controlNumberOfItem}{" "}
            <span className={classes.itemprice}>
              (${price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;

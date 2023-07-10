import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const ProductItem = (props) => {
  //이걸로 redux에 아이템 목록을 넣게 되면 자동으로 채워지게 된다.
  const dispatch = useDispatch();

  //이 props은 부모인 products.js에서 오게 되는것이다
  const { title, price, description, id } = props;

  const addToCartHandler = () => {
    dispatch(cartAction.addItemToCart({ id, title, price }));
  };

  return (
    <>
      <li className={classes.item}>
        <Card>
          <header>
            <h3>{title}</h3>
            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>
          <p>{description}</p>
          <div className={classes.actions}>
            <button onClick={addToCartHandler}>Add to Cart</button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default ProductItem;

import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cartSlice.items);

  //나는 여기다가 했지만 선생님은 더 상위 componenet인 App.js에서 같은 방식으로 해놈
  // const visibleCart = useSelector((state) => state.ui.cartIsVisible);
  // console.log(cartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id} //각 item이 unique하게 하기 위해서 key를 추가
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          ></CartItem>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;

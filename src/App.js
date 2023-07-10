import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    const sendRequest = async () => {
      dispatch(
        uiActions.Notification({
          status: "Pending",
          title: "Pending",
          message: "Sending Data...",
        })
      );
      try {
        const sendData = await fetch(
          "https://react-project-a3fb8-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
      } catch (error) {}
    };
  }, [cart]);
  //이럴때는 언제 sendRequest 함수를 호출해야 하는지 잘 모르겠음

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

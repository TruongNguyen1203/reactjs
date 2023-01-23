import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import React from "react";
import Notification from "./components/UI/Notification";
import { senCartData, fetchCart } from "./store/cart-slice";

let initialStartApp = true;
function App() {
  const dispatch = useDispatch();
  const isShowCart = useSelector((state) => state.ui.isShowCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);
  
  useEffect(() => {
    if (initialStartApp) {
      initialStartApp = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(senCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;

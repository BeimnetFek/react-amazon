import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Four04 from "./Four04";
import "./bootstrap.css";

const promise = loadStripe(
  "pk_test_51N0KOcFNbZIqj0DrabmATxOEAStmBmvucHcJ6rkFRKExRBPfbpyaXIoMIWwyPZcn3ulMmRTWFjI4STxSmCRlLgYt00PzfhmHYv"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Checkout /> */}
      <Routes>
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="*" element={<Four04 />} />
      </Routes>
    </div>
  );
}

export default App;

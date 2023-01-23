import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/shared/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Authenticate from "./pages/Authenticate/Authenticate.jsx";
import Activate from "./pages/Activate/Activate.jsx";
import Rooms from "./pages/Rooms/Rooms.jsx";
import { useSelector } from "react-redux";
import { useLogingwithrefresh } from "./Hooks/useLoadingwithrefresh.js";
import Loder from "./components/shared/loder.js";
import Room from "./components/Room.js";

const App = () => {
  const { loading } = useLogingwithrefresh();
  return loading ? (
    <Loder message="Loading, please Wait!" />
  ) : (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route
          path="/activated"
          element={
            <Semiprotect>
              <Activate />
            </Semiprotect>
          }
        />

        <Route
          path="/rooms"
          element={
            <Protected>
              <Rooms />
            </Protected>
          }
        />
        <Route
          path="/room/:id"
          element={
            <Protected>
              <Room />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

const GuestRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.AuthSclice);
  if (isAuth) {
    return <Navigate to="/rooms" />;
  }
  return children;
};

const Semiprotect = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.AuthSclice);

  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return children;
  } else {
    return <Navigate to="/rooms" />;
  }
};

const Protected = ({ children }) => {
  const { isAuth, user } = useSelector((state) => state.AuthSclice);

  if (!isAuth) {
    return <Navigate to="/" />;
  } else if (isAuth && !user.activated) {
    return <Navigate to="/activated" />;
  } else {
    return children;
  }
};

export default App;

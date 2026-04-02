import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Category from "./pages/Category.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Register from "./pages/Register.jsx";
import Profile from "./pages/Profile.jsx";
import EditBillingAddress from "./pages/EditBillingAddress.jsx";
import EditShippingAddress from "./pages/EditShippingAddress.jsx";
import EditProfileDetails from "./pages/EditProfileDetails.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import OrderSummary from "./pages/OrderSummary.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import SpecialOffers from "./pages/SpecialOffers.jsx";
import Customers from "./pages/Customers.jsx";
import NotFound from "./pages/NotFound.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit-details" element={<EditProfileDetails />} />
          <Route path="profile/edit-billing" element={<EditBillingAddress />} />
          <Route path="profile/edit-shipping" element={<EditShippingAddress />} />
          <Route path="order/details" element={<OrderDetails />} />
          <Route path="order/summary" element={<OrderSummary />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="terms" element={<TermsAndConditions />} />
          <Route path="special-offers" element={<SpecialOffers />} />
          <Route path="customers" element={<Customers />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

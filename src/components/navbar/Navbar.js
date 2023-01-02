import { CartIcon, StyledNavbar } from "../StyledComponents";
import { NavLink, Route, Routes } from "react-router-dom";
import { MenClothingPage } from "../../pages/menClothingPage/MenClothingPage";
import { WomenCLothingPage } from "../../pages/womenClothingPage/WomenClothingPage";
import { JeweleryPage } from "../../pages/jeweleryPage/JeweleryPage";
import { ElectronicsPage } from "../../pages/electronicsPage/ElectronicsPage";
import { CartPage } from "../../pages/cartPage/CartPage";
import { CheckoutPage } from "../../pages/checkoutPage/CheckoutPage";
import { PurchaseCompletePage } from "../../pages/purchaseCompletePage/PurchaseCompletePage";

export const Navbar = () => {
  return (
    <>
      <StyledNavbar>
        <NavLink
          to="/men-clothing-page"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Men's clothing
        </NavLink>

        <NavLink
          to="/women-clothing-page"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Women's clothing
        </NavLink>

        <NavLink
          to="/jewelery-page"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Jewelery
        </NavLink>

        <NavLink
          to="/electronics-page"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          Electronics
        </NavLink>

        <NavLink
          to="/cart-page"
          style={({ isActive }) => (isActive ? activeStyle : styles)}
        >
          <CartIcon />
        </NavLink>
      </StyledNavbar>

      <Routes>
        <Route path="*" element={<MenClothingPage />} />
        <Route path="/women-clothing-page" element={<WomenCLothingPage />} />
        <Route path="/jewelery-page" element={<JeweleryPage />} />
        <Route path="/electronics-page" element={<ElectronicsPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route
          path="/purchase-complete-page"
          element={<PurchaseCompletePage />}
        />
      </Routes>
    </>
  );
};

// Styles for navbar
let styles = {
  color: "red",
  textDecoration: "none",
};

let activeStyle = {
  textDecoration: "underline",
  fontWeight: "bold",
  fontSize: "20px",
  color: "red",
};

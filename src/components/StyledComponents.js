import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

// Utility div for all pages to prevent the Footer position absolute to cover content.
export const ContentWrap = styled.div`
  padding-bottom: 6em;
`;

// Navbar
export const StyledNavbar = styled.div`
  background-color: #ffb703;
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Product images
export const StyledImage = styled.img`
  width: 30%;

  transition: transform 0.5s;

  &:hover {
    transform: scale(4);
  }
`;

// Outer container containing all products
export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  flex-wrap: wrap;
`;

// Inner container for each product
export const Card = styled.div`
  margin: 20px;
  padding: 20px;
  height: auto;
  width: 400px;
`;

// Buttons
export const StyledButton = styled.button`
  width: ${(props) => (props.wide ? "12em" : null)};

  background-color: ${(props) => (props.red ? "#f02d3a" : "lightgreen")};
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    filter: brightness(105%);
  }

  &:active {
    color: yellow;
  }
`;

// Inner container for each product in the shopping cart
export const CartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

// Product images for shopping cart
export const CartImg = styled.img`
  width: 5em;
`;

// Outer container containing all products in the shopping cart
export const CartSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 3em;
  width: 50%;
  margin: 0 auto;
`;

// Container for product title in the shopping cart
export const ProductTitleDiv = styled.div`
  width: 12em;
`;

// Buttons for selecting product quantity
export const QuantityButton = styled.button`
  background-color: lightgray;
  width: 2em;
  height: 2em;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

// Div for displaying the quantity
export const ShowQuantity = styled.div`
  margin: 0 1em;
`;

// Outer container for quantity
export const QuantityDiv = styled.div`
  display: flex;
  padding: em;
`;

// Shopping cart icon
export const CartIcon = styled(AiOutlineShoppingCart)`
  height: 32px;
  width: 32px;
`;

// Footer
export const StyledFooter = styled.div`
  background-color: #ffb703;
  width: 100%;
  height: 5em;

  // Footer fix
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: ${(props) => (props.small ? "12em" : "25em")};

  height: 2em;
  border-radius: 4px;
  border: solid 1px grey;
  margin: 0 0.25em;

  // Removes arrows from input number
  -webkit-appearance: none;
  -moz-appearance: textfield;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  display: block;
  margin: 1em 0;
`;

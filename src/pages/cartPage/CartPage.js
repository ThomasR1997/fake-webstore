import { useContext /* useState */ } from "react";
import { NavLink } from "react-router-dom";
import {
  CartDiv,
  CartImg,
  CartSection,
  ContentWrap,
  ProductTitleDiv,
  // QuantityButton,
  // QuantityDiv,
  // ShowQuantity,
  StyledButton,
} from "../../components/StyledComponents";

import { CartContext } from "../../contextState/CartContext";

export const CartPage = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  // const [quantity, setQuantity] = useState(1);

  // Adds up the total price for all products in the shopping cart
  const initialValue = 0;
  const total = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    initialValue
  );

  // Wip, trying to make a quantity selector for products

  // const decrease = () => {
  //   setQuantity((quantity) => quantity - 1);
  // };

  // const increase = () => {
  //   setQuantity((quantity) => quantity + 1);
  // };

  // Removes selected item from shopping cart
  const removeItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(newCartItems);
  };

  if (cartItems < 1) {
    return (
      <ContentWrap>
        <h1>Shopping cart</h1>
        <h3>Cart is empty</h3>
      </ContentWrap>
    );
  } else {
    return (
      <ContentWrap>
        <h1>Shopping cart</h1>

        <CartSection>
          {cartItems.map((item, index) => {
            return (
              <CartDiv key={index} id={item.id}>
                <CartImg src={item.image} alt="yeyeye" />
                <ProductTitleDiv>
                  <h4>{item.title}</h4>
                </ProductTitleDiv>

                {/* <QuantityDiv>
                  <QuantityButton onClick={() => decrease()}>-</QuantityButton>
                  <ShowQuantity>{quantity}</ShowQuantity>
                  <QuantityButton onClick={() => increase()}>+</QuantityButton>
                </QuantityDiv> */}
                <p>${item.price}</p>
                <StyledButton red onClick={() => removeItem(item.id)}>
                  x
                </StyledButton>
              </CartDiv>
            );
          })}
          <CartDiv>
            <NavLink to="/checkout-page">
              <StyledButton wide>To checkout</StyledButton>
            </NavLink>

            <h4>${total}</h4>
          </CartDiv>
        </CartSection>
      </ContentWrap>
    );
  }
};

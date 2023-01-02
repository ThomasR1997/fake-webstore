import { useContext } from "react";
import { ApiContext } from "../../contextState/ApiContext";
import {
  Card,
  ContentWrap,
  StyledButton,
  StyledDiv,
  StyledImage,
} from "../../components/StyledComponents";
import { CartContext } from "../../contextState/CartContext";

export const MenClothingPage = () => {
  const { apiData } = useContext(ApiContext);
  const { cartItems, setCartItems } = useContext(CartContext);

  // Filtering api to only show men's clothing
  const filteredProducts =
    apiData && apiData.filter((item) => item.category === "men's clothing");

  return (
    <ContentWrap>
      <h1>Men's clothing</h1>
      <StyledDiv>
        {filteredProducts &&
          filteredProducts.map((item, index) => {
            // Adding product to cart
            const handleClick = () => {
              setCartItems([
                ...cartItems,
                {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  desc: item.description,
                  rate: item.rating.rate,
                  count: item.rating.count,
                },
              ]);
            };

            return (
              <Card key={index} id={item.id}>
                <h4>{item.title}</h4>
                <StyledImage src={item.image} alt="yeyeyeyeye" />
                <p>{item.description}</p>
                <p>{item.rating.rate} / 5 ⭐</p>
                <p>👥 {item.rating.count} Reviews</p>
                <p>${item.price}</p>

                <StyledButton
                  onClick={() =>
                    handleClick(item.title, item.image, item.price)
                  }
                >
                  ADD TO CART
                </StyledButton>
              </Card>
            );
          })}
      </StyledDiv>
    </ContentWrap>
  );
};

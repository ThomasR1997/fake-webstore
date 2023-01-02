import { useContext } from "react";
import { Button } from "../../components/button/Button";
import { ApiContext } from "../../contextState/ApiContext";

import {
  Card,
  StyledDiv,
  StyledImage,
} from "../../components/StyledComponents";

// Wip, trying to make a reuseable product component for all of my pages

export const Products = (prop) => {
  const { apiData } = useContext(ApiContext);

  return (
    <div>
      <StyledDiv>
        if (prop === "men")
        {apiData &&
          apiData.filter((item) => item.category === "men's clothing")}
        else if (prop === "women"){" "}
        {apiData &&
          apiData.filter((item) => item.category === "women's clothing")}
        else if (prop === "jewelery")
        {apiData && apiData.filter((item) => item.category === "jewelery")}
        else if (prop === "electronics")
        {apiData && apiData.filter((item) => item.category === "electronics")}
        {apiData &&
          apiData.map((element, index) => {
            return (
              <Card key={index}>
                <h4>{element.title}</h4>
                <StyledImage src={element.image} alt="yeyeyeyeye" />
                <p>${element.price}</p>
                <p>{element.description}</p>
                <p>{element.rating.rate} / 5 ⭐</p>
                <p>{element.rating.count} 👤 reviews</p>
                <Button />
              </Card>
            );
          })}
      </StyledDiv>
    </div>
  );
};

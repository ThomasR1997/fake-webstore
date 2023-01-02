import {
  ContentWrap,
  StyledButton,
  StyledInput,
  StyledLabel,
} from "../../components/StyledComponents";

import { useNavigate } from "react-router-dom";

export const CheckoutPage = () => {
  let navigate = useNavigate();

  const transaction = () => {
    let path = "/purchase-complete-page";
    navigate(path);
  };

  return (
    <ContentWrap>
      <form action="" method="" id="form1" onSubmit={() => transaction()}>
        <StyledLabel for="email">Email</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          placeholder="name@example.com"
          required
        />

        <h3>Shipping address</h3>
        <StyledInput type="text" placeholder="Name" required />
        <br />
        <br />
        <StyledInput type="text" placeholder="Address line" required />
        <br />
        <br />
        <StyledInput small type="text" placeholder="City" required />
        <StyledInput small type="number" placeholder="Zip" required />
        <br />
        <br />
        <StyledInput type="text" placeholder="State" required />
        <br />
        <br />
        <StyledInput type="text" placeholder="Country" required />

        <h3>Card information</h3>
        <StyledLabel for="name">Name on card</StyledLabel>
        <br />

        <StyledInput type="text" id="name" placeholder="John Doe" required />
        <br />
        <br />
        <StyledInput type="number" placeholder="1234 1234 1234 1234" required />
        <br />
        <br />
        <StyledInput small type="month" placeholder="MM/YY" required />

        <StyledInput small type="number" placeholder="CVC" required />
        <br />
        <br />

        <StyledButton type="submit" form="form1" value="submit">
          Pay
        </StyledButton>
      </form>
    </ContentWrap>
  );
};

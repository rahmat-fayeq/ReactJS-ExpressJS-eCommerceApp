import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "0px" })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 15px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  &:hover {
    background-color: gray;
  }
  border-radius: 3px;
  ${mobile({ padding: "5px", fontSize: "10px" })}
`;
const TopTexts = styled.div`
  ${mobile({
    display: "flex",
    flexDirection: "column",
    fontSize: "10px",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background-color: #eee;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 20%;
  height: 100%;
  border-radius: 20px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 8px;
  ${mobile({ height: "80%", width: "30%" })}
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmmount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: silver;
  font-size: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProductPrice = styled.div`
  font-size: 24px;
  font-weight: 500;
`;
const Hr = styled.hr`
  border: none;
  background-color: white;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
`;
const SummaryTitle = styled.h1`
  font-weight: 150;
  margin-top: -10px;
`;
const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "18px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Whishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="../imgs/Rocket-Vintage-Chill-Cap_66374_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Best Bag
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 6435354
                  </ProductId>
                  <ProductColor color="teal" />
                  <ProductSize>
                    <b>Size:</b> 39
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount>1</ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 50</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="../imgs/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b> Best Bag
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 34353454
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 60
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount>2</ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.5</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Cart;

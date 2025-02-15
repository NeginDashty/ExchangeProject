
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import eth from "@/assets/eth.png"
import swap from "@/assets/swap.png"
import moreIcon from "@/assets/more.png"
import arrow from "@/assets/arrow.png"

const Container = styled.div`
  width: 378px;
  height: 700px;
  background-color: #101828;
  border-radius: 16px;
  padding: 16px;
  color: white;
  font-family: "Arial", sans-serif;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
  
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
`;

const Tab = styled.div`
  flex: 1;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  font-size: 20px;
`;

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  background: none;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid #353838;
  width: 320px;
  position: relative;
`;


const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  font-size: 14px;
  outline: none;
  height: 30px;
  padding-right: 10px; 
`;

const PlaceHolder = styled.span`
  position: absolute;
  right: 10px;
  color: #e7e9e8;
  font-size: 14px;
`;


const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  width: 340px;
  height: 40px;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 16px;
  margin-left: 4px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

const SmallButton = styled.button`
  background: transparent;
  border: 1px solid #353838;
  color: white;
  width: 23px;
  height: 23px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  

  &:hover {
    background: #3b82f6;
  }
`;

const TopButton = styled(SmallButton)`
  border-top-left-radius: 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const BottomButton = styled(SmallButton)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 0px;
`;

const Transactions = styled.div`
  margin-top: 16px;
  font-size: 14px;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  max-width: 320px;
  margin-top: 20px;
  margin-left: 10px;
  color: #E7E9E8;
`;
const FeeBox = styled.div`
color: #E7E9E8;
  max-width: 318px;
  height:70px ;
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #353838;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
  margin-left: 5px;

  div {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 5px; 
  }

  span {
    margin: 0 5px; 
  }
`;


const CryptoBox = styled.div`
  max-width: 318px;
  height: 30px;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  border: 1px solid #353838;
  border-radius: 8px;
  padding: 10px;
  border-radius: 6px;
  margin-top: 20px;
  font-size: 16px;
  margin-left:5px;
`;

const CryptoIcon = styled(Image)`
  width: 20px;
  height: 20px;
  
`;

const SwapIcon=styled(Image)`
    margin: 0 auto;
    width: 32px;
    height: 32px;
    display: block;
`;

const SwapContainer=styled.div`
    margin:  20px auto 0 auto;
`;

const ReceiveText=styled.p`
    text-align: right;
    margin-right: 50px;
    margin-bottom: 0;
`;
const MoreIcon=styled(Image)`
    width: 24px;
    height: 24px;
`;

const OpenOrder=styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 1px;
`;


const Order=styled.span`
font-size: 16px;
margin-right: 40px;
`;

const Link=styled.a`
    text-decoration: none;
    margin-top: 10px;
    text-align: center;
    display: block;
    color: #0257EA;
    font-size: 14px;

`
const LinkContainer=styled.div`
    display: flex;
    justify-content: center;
`;

const ArrowIcon=styled(Image)`
    width: 16px;
    height: 16px;
    
`

const ExchangeBox = () => {
  const [activeTab, setActiveTab] = useState("quick");

  return (
    <Container>
      <Tabs>
        <Tab style={{borderBottom:"2px solid #0257EA"}}>
          تعیین قیمت
        </Tab>
        <Tab
          style={{ borderBottom: "1px solid #353838" }}
        >
          معامله سریع
        </Tab>
      </Tabs>

      <FormGroupWrapper>
        <FormGroup>
          <PlaceHolder>قیمت</PlaceHolder>
          <Input placeholder="IRT" />
        </FormGroup>
        <ButtonGroup>
          <TopButton>+</TopButton>
          <BottomButton>-</BottomButton>
        </ButtonGroup>
      </FormGroupWrapper>

      {/* Amount Input */}
      <FormGroupWrapper>
        <FormGroup>
          <PlaceHolder>مقدار</PlaceHolder>
          <Input placeholder="BTR" />
        </FormGroup>
        <ButtonGroup>
          <TopButton>+</TopButton>
          <BottomButton>-</BottomButton>
        </ButtonGroup>
      </FormGroupWrapper>

      <SwapContainer>
       <SwapIcon src={swap} />
     </SwapContainer>
      
      <ReceiveText>:دریافت میکنم</ReceiveText>
      <CryptoBox>
        <CryptoIcon src={eth} alt="ETH" />
        اتریوم
      </CryptoBox>

      <FeeBox>
        <div>
        <span>BTC -</span>
        <span>حداکثر کارمزد</span>
        </div>

        <div style={{marginTop:'25px'}}>
        <span>BTC -</span>
        <span>دریافتی شما</span>
        </div>
      </FeeBox>

      <Button>تعیین قیمت</Button>

      <Transactions>
        <OpenOrder>
        <MoreIcon src={moreIcon}/>
        <Order>معامله باز</Order>
        </OpenOrder>
        <TransactionItem>
        <span style={{ fontWeight: "bold", color: "#E7E9E8" }}>نام</span>
        <span style={{ fontWeight: "bold", color: "#E7E9E8" }}>قیمت</span>
       <span style={{ fontWeight: "bold", color: "#E7E9E8" }}>حجم</span>
       </TransactionItem>

        <TransactionItem>
          <span>1,917,093,138</span>
          <span>0.8857</span>
          <span>بیت کوین</span>
        </TransactionItem>
        <LinkContainer>
        
        <Link href="#" >
        <ArrowIcon src={arrow}/>
          مشاهده بیشتر
        </Link>
        </LinkContainer>
       
      </Transactions>
    </Container>
  );
};

export default ExchangeBox;

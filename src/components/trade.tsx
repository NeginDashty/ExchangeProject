import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styled from "styled-components";
import tomam from "@/assets/toman.png"
import swap from "@/assets/swap.png"
import eth from "@/assets/eth.png"
import wallet from "@/assets/wallet.png"
import line from "@/assets/Line .png"
import more from "@/assets/more.png"
import Trade from "@/pages/api/TradeData"


const TradeBox = styled.div`
  display: block;
  width: 400px;
  height: 650px;
  background: #101828;
  border-radius: 16px;
  padding: 24px;
  color: white;
  position: relative;
  top: -149px; 
  margin-left: 30px;
  margin-top: 8px;
  margin-bottom: 0;

  @media (max-width:768px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 16px;
`;

const HeaderItem = styled.span`
  flex: 1;
  text-align: center;
  padding: 12px;
  cursor: pointer;
  line-height: 60px;
  position: relative;
  font-size: 20px;
  margin-top: 26px;
  &:not(:first-child) {
    border-bottom: 2px solid #0257EA; 
  }

  &.active {
    border-bottom: 2px solid #505656;
  }
`;

const Label = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: bold;
  direction: rtl;
  margin-top: 0;
  color: #CFD4D2;

`;

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 5px 5px;
  border-radius: 8px;
  flex-direction: row-reverse;
  border: 1px solid #505656;
  background: #101828;
  position: relative;
`;

const SwapContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 18px 0 0 0;

`;


const TradeButton2 = styled.button`
  width: 100%;
  background:#0257EA;
  padding: 12px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #2e4770;
  }
`;

const Separator = styled.span`
  margin-top: 60px;
  color: #505656;
`;

const Input = styled.input`
  background: #101828;
  color: white;
  border: none;
  padding: 8px;
  padding-right: 35px;
  width: 100%;
  height: 40px;
  margin-left: 10px;
  border-radius: 8px;
  flex-grow: 1;
  position: relative;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: #505656;
  }
`;

const Spann = styled.span`
  margin-right: 40px;
  color: #505656;
  
`;

const CoinIcon = styled(Image)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);

`;

const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0;
  justify-content: flex-start;
  position: absolute;
  margin-top: 15px;
  z-index: 1;

`;

const Wallet = styled(Image)`
  width: 20px;
  height: 20px;
  padding: 0;
  margin-right: 8px;
  
`;
const Balance=styled.span`
  color: #CFD4D2;
`

const TomanContainer=styled.div`
  margin-top: 30px;
`;

const OpenOrder=styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const OrderText=styled.p`
  font-size: 20px;
  margin-right: 2px;
  margin-top: 40px;
`

const MoreIcon=styled(Image)`
  margin-top: 42px;
`

const CryptoTradeBox = () => {
 const [tomanValue, setTomanValue] = useState("");
    const [dashValue, setDashValue] = useState("---");
  
    const handleTomanChange = (e) => {
      const value = e.target.value;
      setTomanValue(value);
        if (value) {
        setDashValue("---");
      } else {
        setDashValue("");
      }
    };
  



  return (
    <TradeBox>
      <Header>
        <HeaderItem className="active">معامله سریع</HeaderItem>
        <Image src={line} alt="line" width={2} height={30} style={{ marginTop: '55px' }} />
        <HeaderItem>تعیین قیمت</HeaderItem>
      </Header>

      <BalanceContainer>
        <Wallet src={wallet} alt="Wallet"  />
        <Balance className="mr-2">موجودی: IRT ۲,۵۰۰,۰۰۰</Balance>
      </BalanceContainer>

      <TomanContainer className="mb-4">
        <Label>پرداخت میکنم:</Label>
        <CoinContainer>
          <CoinIcon src={tomam} alt="Toman" width={24} height={24} />
          <Spann>تومان</Spann>
          <Input type="number" 
          value={tomanValue}
          onChange={(e) => handleTomanChange(e)} 
          />
        </CoinContainer>
      </TomanContainer>

      <SwapContainer>
        <Image src={swap} alt="Swap" width={32} height={32} />
      </SwapContainer>

      <div className="mb-4">
        <Label>دریافت میکنم:</Label>
        <CoinContainer>
          <CoinIcon src={eth} alt="Ethereum" width={24} height={24} />
          <Spann>اتریوم</Spann>
          <Input type="number"
          value={dashValue}
          readOnly 
          />
        </CoinContainer>
      </div>

      <TradeButton2 onClick={Trade}>معامله</TradeButton2>
      <OpenOrder>
        <MoreIcon src={more} alt="more" width={24} height={24} />
        <OrderText>معاملات باز</OrderText>

      </OpenOrder>
    </TradeBox>
  );
};

export default CryptoTradeBox;

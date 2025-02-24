import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {MarketCapApi} from "@/Services/MarketCap";
import { Coin } from "@/Types/types";
import { convertToToman } from "@/utils/ConvertToToman";

const Container = styled.div`
  width: 100%; 
  max-width: 800px; 
  height: 137px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  justify-content: center;
  gap: 13px;
  padding: 20px;
  border-radius: 12px;
  margin-left: auto;
  margin-right: 126px;
  margin-top: 30px;
  box-sizing: border-box; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
    padding: 10px; 
    margin-left: 8%;
    gap: 15px;
  }
  
`;



const Card = styled.div`
  background-color: #101828;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 190px;
  height: 107px;
  text-align: center;
  position: relative;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-right: 0;
  }
  
`;

const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1e293b;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
`;

const Logo = styled.img`
  width: 59px;
  height: 59px;
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
`;

const PersianName = styled.span`
  font-size: 15px;
  color: white;
  margin-right: 15px;
  margin-top: 5px;
`;

const EnglishName = styled.span`
  font-size: 16px;
  color: #94a3b8;
  margin-left:15px;
  margin-top: 18px;

`;

const Price = styled.div`
  font-size: 16px;
  color: white;
  margin-top: 20px;
`;

const persianNames: Record<string, string> = {
  binancecoin: "بایننس کوین",
  ethereum: "اتریوم",
  ripple: "ریپل", 
  bitcoin: "بیت کوین",
};

const selectedCoins = ["binancecoin", "ethereum", "ripple", "bitcoin"];

const CryptoCard = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    const url = MarketCapApi(selectedCoins);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filteredCoins = selectedCoins.map((id) => data.find((coin: Coin) => coin.id === id)).filter(Boolean);
        setCoins(filteredCoins);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      {coins.map((coin) => (
        <Card key={coin.id}>
          <LogoWrapper>
            <Logo src={coin.image} alt={coin.name} />
          </LogoWrapper>
          <NameWrapper>
            <EnglishName>{coin.symbol.toUpperCase()}</EnglishName>
            <PersianName>{persianNames[coin.id] || "نام نامشخص"}</PersianName>
          </NameWrapper>
          <Price>{convertToToman(coin.current_price)} تومان</Price>

        </Card>
      ))}
    </Container>
  );
};

export default CryptoCard;

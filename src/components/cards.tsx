import React, { useEffect, useState } from "react";
import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 13px;
//   padding: 20px;
//   border-radius: 12px;
//   margin-left: 360px;
//   margin-top: 30px;
  
 

// `;



// const Container = styled.div`
//   display: flex;
//    justify-content: center;
//    gap: 13px;
//    padding: 20px;
//    border-radius: 12px;
//    margin-left: 360px;
//    margin-top: 30px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); /* 2 columns layout */
//     justify-content: center;
//   }

 
// `;
// const Container = styled.div`
//   width: 800px;
//   height: 137px;
//   display: grid; /* Change to grid */
//   grid-template-columns: repeat(4, 1fr); /* Default: 4 items in one row */
//   justify-content: center;
//   gap: 13px;
//   padding: 20px;
//   border-radius: 12px;
//   margin-left: 480px;
//   margin-top: 30px;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); /* 2 items per row on mobile */
   
//   }
// `;


const Container = styled.div`
  width: 100%; /* Use full width or a percentage-based value */
  max-width: 800px; /* Set max-width to limit it on large screens */
  height: 137px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default: 4 items in one row */
  justify-content: center;
  gap: 13px;
  padding: 20px;
  border-radius: 12px;
  margin-left: auto; /* Align to center horizontally */
  margin-right: 126px; /* Align to center horizontally */
  margin-top: 30px;
  box-sizing: border-box; /* Ensures padding doesn't cause overflow */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 items per row on mobile */
    padding: 10px; /* Optionally reduce padding on mobile */
    margin-left: 20px;
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

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

// Persian names for the 4 selected coins
const persianNames: Record<string, string> = {
  binancecoin: "بایننس کوین",
  ethereum: "اتریوم",
  ripple: "ریپل", // Updated to Tether
  bitcoin: "بیت کوین",
};

const selectedCoins = ["binancecoin", "ethereum", "ripple", "bitcoin"];

const CryptoCard = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
      .then((res) => res.json())
      .then((data) => {
        // Filter and sort to match the required order
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
          <Price>{coin.current_price.toLocaleString()} تومان</Price>
        </Card>
      ))}
    </Container>
  );
};

export default CryptoCard;

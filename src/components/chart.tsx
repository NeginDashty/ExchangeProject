
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

const Wrapper = styled.div`
  width: 780px;
  border-radius: 16px;
  height: 524px;
  background-color: #101828;
  direction: rtl;
  margin-left: 500px;
  position: absolute;
  margin-bottom: 0;
  padding-bottom: 0;
  top: 340px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 400px; 
    height: auto; 
    margin-left: 80px;
    /* margin-right: auto; */
    margin-top: 200px;
    top: auto;
    position: relative;
  }

`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const ChartContainer = styled.div`
  width: 340px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-align: center;
  margin-left: 50px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 20px; 
    padding-top: 0;
    
  }
`;

const CoinList = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    width: 100%; 
    align-items: center; 
  }

  
 
`;
const TableHeader = styled.div`
  width: 360px;
  display: flex;
  justify-content: flex-end; 
  gap: 80px; 
  padding: 12px;
  border-bottom: 1px solid #333;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-right:400px;
  margin-top: 20px;

`;
const CoinItem = styled.div`
  display: grid;
  grid-template-columns: 30% 20% 50%;
  align-items: center;
  text-align: right;
  grid-column-gap: 70px;
  grid-row-gap: 2px;
  color: white;
  padding: 8px;
  border-radius: 8px;
  margin: 5px 0;

`;

const CoinInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  color: #E7E9E8;

`;

const CoinImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Footer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-left: 10px;

`;

const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#007BFF"};
  color: white;
  border: none;
  width: 103px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
`;

const Withdrawal=styled.button`
  background: none;
  border: 1px solid #0257EA;
  border-radius: 8px;
  width: 103px;
  height: 32px;
  color: #0257EA;
  cursor: pointer;
`


const Spann=styled.span`
  margin-left: 50px;
  @media (max-width:768px) {
    display: none;
  }
`;
const Price=styled.span`
  font-size: 14px;
  color: #E7E9E8;
`;

const Saham=styled.span`
  color: #fff;
  display: block;
  padding: 0;
  margin-right: 425px;
  margin-top: 30px;
  @media (max-width:768px) {
  display: none;
  }

`;

const staticBalances = {
  lina: 8.76,
  binancecoin: 6.45,
  tether: 0.5,
  fantom: 5.2,
  "matic-network": 11.23,
  tron: -4.81,
};
const Balance = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => (props.value >= 0 ? "#1fcf57" : "#ff4d4d")}; 
  text-align: center;
  width: 60px; 
`;


const CryptoChart = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const coinIds = ["binancecoin", "tether", "fantom", "matic-network", "tron"];

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}`)
      .then(response => response.json())
      .then(data => setCoins(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const chartData = {
    labels: coins.map(coin => coin.name),
    datasets: [
      {
        data: coins.map(coin => coin.market_cap),
        backgroundColor: ['#F3722C','#2D9CDB','#F94144', '#90BE6D', '#F9C74F', '#F8961E'],
        borderWidth: 6,
        borderColor: '#101828',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          font: {
            size: 14,
            family: "Arial",
            color: "#E7E9E8",
          },
          color: "#E7E9E8",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      arc: {
        borderRadius: 12,
      },
    },
    cutout: "56%",
  };

  return (
    <Wrapper>
       <Saham>موجودی کل سهام شما</Saham>
      <TableHeader>
        <Spann>نام سهم</Spann>
        <span>موجودی</span>
        <span>مبلغ</span>
      </TableHeader>
      <Container>
      <ChartContainer>
     
          <Doughnut data={chartData} options={chartOptions}/>
        </ChartContainer>
        <CoinList>
          {coins.map(coin => (
            <CoinItem key={coin.id}>
            <CoinInfo>
              <CoinImage src={coin.image} alt={coin.name} />
              {coin.name} ({coin.symbol})
            </CoinInfo>
            
            <Balance value={staticBalances[coin.id]}>
              {staticBalances[coin.id]} %
            </Balance>
            
            <Price>{coin.current_price.toLocaleString()} </Price>
          </CoinItem>
          
          ))}
        </CoinList>
      </Container>
      <Footer>
        <Button>واریز</Button>
        <Withdrawal>برداشت</Withdrawal>
        <Button>کارت هدیه</Button>
      </Footer>
    </Wrapper>
  );
};

export default CryptoChart;

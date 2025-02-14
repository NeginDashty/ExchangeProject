import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import changes from "@/assets/changes.png"
import Image from 'next/image';
import arrow from "@/assets/arrow.png"
const Container = styled.div`
  padding: 20px;
  direction: rtl;
  max-width: 1245px;
  background-color: #101828;
  color: #fff;
  margin-left: 22px;
  border-radius: 16px;
  overflow: hidden;
  @media (max-width:768px) {
    max-width: 380px;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Table = styled.table`
  width: 1280px;
  border-collapse: collapse;
  margin:  0 auto;
  @media (max-width: 768px) {
    max-width: 380px;
    th:nth-child(n + 3),
    td:nth-child(n + 3) {
      display: none; 
  } }
`;


const TableRow = styled.tr`
  margin-right: 0;
 
`;

const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  color: white;
  text-align: right;
  border-bottom: 1px solid #505656;
  font-size: 16px;
  overflow: hidden;
  
`;

const TableCell = styled.td`
  padding: 10px;
 
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const GreenIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleText=styled.p`
font-size: 23px;
`;

const ChangesImage = styled(Image)`
  width: 100px; 
  height: auto;
  @media (max-width: 768px) {
    display: none; 
  }
`;

const AllCoins=styled.div`
    text-align: center;
    color: #0257EA;
    font-size: 14px;
    margin-bottom: 5px;

`;

const Arrow=styled(Image)`
width: 16px;
height: 16px;
margin-top: 20px;
`



const Coins = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc')
      .then(response => response.json())
      .then(data => {
        setCoins(data.slice(0, 11)); 
      });
  }, []);

  const persianNames = {
    bitcoin: 'بیت کوین',
    tether: 'تتر',
    una: 'una',
    uma: ' UMA',
    fantom: 'فانتوم',
    matic: 'پالیگان',
    binancecoin: 'بایننس کوین',
    gms: 'گیم استار',
    stellar: 'استلار',
    tron: 'ترون'
  };

  const generateRandomValue = () => {
    return (Math.random() * 100).toFixed(2); 

  }
  return (
    <Container>
      <TitleText>آخرين تراكنش ها</TitleText>
      <Table>
        <thead >
          <TableRow>
            <TableHeader>نام</TableHeader>
            <TableHeader>آخرين قيمت</TableHeader>
            <TableHeader>٪۲۴h</TableHeader>
            <TableHeader>%Vd</TableHeader>
            <TableHeader>24h مقدار</TableHeader>
            <TableHeader >هفت روز گذشته</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <TableRow key={coin.id}>
              <TableCell>
                <Icon src={coin.image} alt={coin.name} />
                {persianNames[coin.id] || coin.name}
              </TableCell>
              <TableCell>${coin.current_price.toLocaleString()}</TableCell>
              <TableCell
                style={{
                  color: coin.price_change_24h > 0 ? '#00966D' : '#FF0000',
                }}
              >
                {coin.price_change_24h.toFixed(3)}% {coin.price_change_24h > 0 ? '▲' : '▼'}
              </TableCell>
              <TableCell style={{color:"#00966D"}}>9.6% ▲</TableCell>
              <TableCell>
                {generateRandomValue()} میلیارد 
              </TableCell>
              <TableCell>
                <ChangesImage src={changes} alt="تغییرات" /> 
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <AllCoins>مشاهده همه
        <Arrow src={arrow}/>
      </AllCoins>
    </Container>
  );
};

export default Coins;
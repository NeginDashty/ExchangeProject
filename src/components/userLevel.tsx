import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import styled from "styled-components";
import visaCard from "@/assets/visaCard.png"
import Image from "next/image";
import level from "@/assets/level.png"
import arrow from "@/assets/arrow.png"


const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;   
    gap: 8px;         
  }
 
`;

const Card = styled.div`
  width: 300px;
  height: 180px;
  border-radius: 12px;
  padding: 16px;
  color: white;
  margin-top: 0;
  padding-top: 0;
  
`;

const VisaCard = styled(Card)`
 width: 450px;
  position: relative;
  text-align: right;

  @media (max-width: 768px) {
    max-width: 500px;  
  }
`;


const Vimage = styled(Image)`
    position: absolute;
    bottom: 16px;
    right: 16px;
    width: 100%;
    height: 200px;
    top: 1px;
    left: 8px;
    @media (max-width: 768px) {
    max-width: 420px; 
    margin-left: 30px;
  }
    
`;


const UserLevelCard = styled(Card)`
  background: #101828;
  width: 320px;
  @media (max-width: 768px) {
    width: 100%; 
    max-width: 310px;  
  }
`;

const ChartCard = styled(Card)`
  background: #101828;
  width: 398px;
  display: flex;
  align-items:flex-start;
  @media (max-width: 768px) {
    width: 100%; 
    max-width: 400px; 
  }
`;

const LevelIndicator = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

const Dot = styled.span`
  padding: 8px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "white" : "gray")};
  color: ${(props) => (props.active ? "black" : "white")};
`;



const ChartText=styled.p`
font-size: 16px;
width: 150px;
position: absolute;
bottom: -460px;
direction: rtl;
@media (max-width: 768px) {
   display: none;
}

`
const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 85px;
  margin-right: 270px;
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center;    
    margin-right: 0;        
    margin-top: 20px; }
`;

const ScoreBox = styled.div`
  border-radius: 8px;
  text-align: center;
  width: 50px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  margin-right: 20px;
  @media (max-width: 768px) {
    width: 80%;    
    max-width: 120px; 
    margin-bottom: 10px;  
  }
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #b0b0b0;
  margin-top: 5px;
  width: 80px;
  margin-right: 60px;
`;

const CardContainer = styled.div`
background-color: #101828;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;

`;


const UserLevel = styled.div`
  align-self: flex-end;
  font-size: 18px;
  color: #fff;
  margin-left: 50px;

`;

const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UpgradeLevel = styled.span`
  font-size: 14px;
  color: #E7E9E8;
  margin-right: 20px;
 
`;


const ImageContainer = styled.div`
 margin-bottom: 15px;
`;

const UserLevell = styled(Image)`
  border-radius: 8px; /* Match the card's border radius */
  margin-top: 56px;
`;



const DashboardCards = () => {
  const chartData = {
    datasets: [
      {
        data: [56, 44],
        backgroundColor: ["#0257EA", "#CFD4D2"],
        borderWidth: 0,
    
      },
    ],
  };

  const chartOptions = {
    rotation: -90,
    circumference: 180,
    cutout: "66%",
    responsive: true,
    borderRadious:10,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <Container>
  <VisaCard>
    <Vimage src={visaCard} alt="Visa" />
  </VisaCard>
  

  <CardContainer>
      <LevelContainer>
        <UpgradeLevel>ارتقا سطح کاربری</UpgradeLevel>
        <UserLevel>سطح کاربری</UserLevel>
      </LevelContainer>

      <ImageContainer>
        <UserLevell src={level} alt="سطح کاربری" />
      </ImageContainer>
    </CardContainer>
 
  <ChartCard>
    <Doughnut data={chartData} options={chartOptions} style={{ marginBottom: "40px" }} />
    <ScoreContainer>
      <ScoreBox>
      <ChartText>امتیاز  کسب شده شما تا کنون</ChartText>
        ۱۰۰
        <Label>اولین تراکنش</Label>
      </ScoreBox>
      
      <ScoreBox>
        ۱۶۰
        <Label>اولین تراکنش</Label>
      </ScoreBox>

      <ScoreBox>
        ۳۰۰
        <Label>احراز هویت</Label>
      </ScoreBox>
    </ScoreContainer>
  </ChartCard>
</Container>

  );
};

export default DashboardCards;

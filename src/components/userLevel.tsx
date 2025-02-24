
import React from 'react';
import styled from 'styled-components';
import visaCard from "@/assets/visaCard.png"
import Image from "next/image";
import level from "@/assets/level.png"
import arrow from "@/assets/arrow.png"
import frame from "@/assets/frame.png"

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 20px;
  width: 87%;
  margin-left: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 40%;
  height:220px;
  text-align: center;
  background-color: #101828;
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 20px;
    height: 240px;
  }
`;

const BlueCard = styled(Card)`
background: none;
width: 47%;
@media (max-width: 768px) {
    width: 80%;
    margin-top: 0;
    
  }

`;

const CardImage = styled(Image)`
  width: 100%;
  height: auto;
  object-position: center;
  object-fit: cover; 
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
  
`;



const MiddleCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
padding-top: 10px;
display: flex;
align-items: center;
gap: 140px;
direction: rtl;
margin-right: 10px;
padding: 10px;
`;

const RightText = styled.p`
  margin: 10px 0;
  color: #fff;
  font-size: 20px;
`;

const LeftText=styled.p`
    margin: 10px 0;
    color: #c8c8c8;
    font-size: 14px;

`;

const LastCard = styled(Card)`
`;

const CardImagel=styled(Image)`
  margin-top: 20px;
  width: 90%;
`;
  
const ScoreText=styled.p`
direction: rtl;
color: #fff;
margin-left: 30px;
font-size: 18px;
`


const MiddleCardImage = styled(Image)`
  /* margin-top: 10px; */
  margin-bottom: 30px;
  margin-left:60px;

`;

const LastCardImage=styled(Image)`
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
`;

const CardComponent = () => {
  return (
    <CardContainer>
      <BlueCard>
        <CardImage src={visaCard} alt="Blue Card" />
      </BlueCard>

      <MiddleCard>
        <TextContainer>
          <RightText> سطح کاربری</RightText>
          <LeftText> ارتقا سطح کاربری</LeftText>
        </TextContainer>

        <MiddleCardImage src={level} alt="Middle Card" />
      </MiddleCard>
      <LastCard>
        <ScoreText>امتیاز کسب شده شما تا کنون</ScoreText>
        <CardImagel src={frame} alt="Last Card" />
      </LastCard>
    </CardContainer>
  );
};

export default CardComponent;
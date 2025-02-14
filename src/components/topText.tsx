
import Image from "next/image";
import warning from "@/assets/warning.png";
import styled from "styled-components";


const Container = styled.div`
  width: 1250px;
  height: 60px;
  background-color: #101828;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: white;
  margin-top: 24px;
  margin-left: 30px;
  direction: rtl; 

  
  @media (max-width: 768px) {
    width: 380px;
    height: 102px;
    flex-direction: column;
    padding: 10px; 
    align-items: center;
    margin-top: 33px;
    margin-left: 70px;
  }
`;


const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  

  @media (max-width: 768px) {
    justify-content: center;
  }
`;


const WarningIcon = styled(Image)`
  width: 24px;
  height: 24px;
  
 
  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
  }
`;

const StyledText = styled.p`
  font-size: 12px;
  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center; 
  }
`;

const VerifyButton = styled.button`
  width: 103px;
  height: 32px;
  background-color: #0257ea;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #0147c2;
  }


  @media (max-width: 768px) {
    width: 103px; 
    height: 32px;
    font-size: 10px; 
    margin-left: auto; 
    margin-bottom : 8px;
    font-size: 14px;

  }
`;


const TopText = () => {
  return (
    <Container>
      <TextContainer>
        <WarningIcon src={warning} alt="Warning" />
        <StyledText>برای بهره مندی از کلیه خدمات صرافی لازم است احراز هویت خود را تکمیل کنید!</StyledText>
      </TextContainer>
      <VerifyButton>احراز هویت</VerifyButton>
    </Container>
  );
};

export default TopText;

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import tobitexLogo from "@/assets/tobitex.png";
import iconGroup from "@/assets/iconGroup.png";
import userIcon from "@/assets/user.png"; 
import notificationIcon from "@/assets/notification.png"; 
import menuIcon from "@/assets/menu.png"; 



const NavbarContainer = styled.nav`
  background-color: #101828;
  color: white;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  border-bottom: 1px solid #505656;
  position: sticky; 
  top: 0; 
  z-index: 1000; 

  ;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center; 
    position: relative;
    padding: 2rem 1.5rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; 
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
;
`;


const IconContainerLeft = styled.div`
  display: none; 
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    left: 1rem;
  }
`;


const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;



const MenuItem = styled.li`
  font-size: 0.875rem;
  cursor: pointer;

  
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;


const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    display: none;  
  }
`;

const MenuIconContainer = styled.div`
  display: none; 
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex; 
    position: absolute;
    right: 1rem;
    margin-right: 30px;
  }
`;

const IconGroupWrapper = styled.div`
  width: 80px;
  height: 24px;
  position: relative;
`;

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <NavbarContainer>
      
      <RightSection>
        <LogoContainer>
          <Image src={tobitexLogo} alt="تویکس" width={139} height={37} />
          
        </LogoContainer>

        <Menu>
          <MenuItem>
            <StyledLink href="#">بازار تویکس</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#">راهنمای استفاده</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#">بلاگ</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#">درباره ما</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#">تماس با ما</StyledLink>
          </MenuItem>
          <MenuItem>
            <StyledLink href="#">دستیار هوشمند</StyledLink>
          </MenuItem>
        </Menu>
      </RightSection>

      <IconContainerLeft>
        <Image src={userIcon} alt="User" width={30} height={27} />
        <Image src={notificationIcon} alt="Notification" width={30} height={27} />
      </IconContainerLeft>

      <MenuIconContainer>
        <Image src={menuIcon} alt="Menu" width={30} height={27} />
      </MenuIconContainer>



   
      <IconContainer>
        <IconGroupWrapper>
          <Image 
            src={iconGroup} 
            alt="Icons" 
            layout="fill" 
            objectFit="contain" 
          />
        </IconGroupWrapper>
      </IconContainer>
    </NavbarContainer>
  );
};

export default Navbar;

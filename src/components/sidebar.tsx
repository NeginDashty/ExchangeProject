import styled from "styled-components";
import Image from "next/image";
import navItem from "@/assets/navItem.png";
import iconss from "@/assets/iconss.png";

const SidebarContainer = styled.div`
  width: 90px;
  height: 100vh;
  background-color: #101828;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  right: 0;
  top: 0;
  margin-right: 8px;
  margin-top: 60px;
  z-index: 1;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const IconButton = styled.div`
  width: 48px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

`;

const IconGroupWrapper = styled.div`
  width: 46px;
  height: 46px;
  position: relative;
  margin-top: 10px;
  
  
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <IconButton className="active">
        <Image src={navItem} alt="Menu" width={30} height={30} />
      </IconButton>
      <IconGroupWrapper>
        <Image src={iconss} alt="Icons" width={50} height={500} />
      </IconGroupWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

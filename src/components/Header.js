import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


export default function Header() {

  const [burgerState, setBurgerState] = useState(false)

  return (
    <Container>
      <a href="">
        <img src='./logo.svg' alt="" />
      </a>

      <Menu>
        <a href="">Model S</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
        <a href="">Model Y</a>
      </Menu>
      <RigthMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        <CustomMenu onClick={()=> setBurgerState(true)}/>
      </RigthMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomCloseIcon onClick={()=> setBurgerState(false)} />
        </CloseWrapper>
        <li><a href=""></a>Model S</li>
        <li><a href=""></a>Model 3</li>
        <li><a href=""></a>Model X</li>
        <li><a href=""></a>Model Y</li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Using Inventory</a></li>
        <li><a href="">Trade</a></li>
        <li><a href="">Cibertruck</a></li>
        <li><a href="">Roadaster</a></li>
        <li><a href="">Semi</a></li>
        <li><a href="">Chargin</a></li>
        <li><a href=""></a></li>
      </BurgerNav>
    </Container>
  )
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap
  }

  @media (max-width: 768px) {
    display: none
  }
`;

const RigthMenu = styled.div`
    display: flex;
    align-items: center;
    a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    a {
      font-weight: 600;
    }
  }

`;
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
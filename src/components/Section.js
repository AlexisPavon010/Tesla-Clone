import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

export default function Section({ title, description, leftBtnText, rigthBtnText, backgroundImage }) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade Bottom>
          <ButtonGroup>
            <LeftButton>
              {leftBtnText}
            </LeftButton>
            {rigthBtnText &&
              <RigthButton>
                {rigthBtnText}
              </RigthButton>
            }
          </ButtonGroup>
        </Fade>
        <DownArrow src='https://img-premium.flaticon.com/png/512/152/152415.png?token=exp=1621263036~hmac=dd197e3e1c5c0ef2b36036e1ee4bcc62' />
      </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop');
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vetical
  align-items: center; // horizontal
  background-image: ${(props) => `url(${props.bgImage})`}
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RigthButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s
`;

const Buttons = styled.div`
  
`;
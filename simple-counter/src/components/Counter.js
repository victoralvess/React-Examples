import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
`;

const Card = styled.div`
  position: relative;
  max-width: 500px;
  height: 300px;

  flex: 1;

  border-radius: 6px;

  background: whitesmoke;
`;

const customText = `
  @import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
  font-family: 'Press Start 2P', cursive;
  text-align: center;
`;

const Title = styled.h1`
  ${customText} color: #4c4c4c;

  margin-top: 1.5em;
`;

const easterEgg = keyframes`
  0%, 100% {
    transform: translateX(0px) rotateX(0deg);
  }

  50% {
    transform: translateX(2px) rotateX(5deg);
  }
`;

const shouldRun = (value = 0) =>
  value === 11 || value === 28 || value === 2000 ? "running" : "paused";

const CounterValue = styled.h3`
  ${customText} font-size: 20px;
  color: #ffb020;

  position: relative;
  top: 30px;

  animation: ${easterEgg} 100ms ease-in-out infinite alternate
    ${props => shouldRun(props.value)};
`;

const Button = styled.button`
  width: 125px;
  height: 35px;

  margin: 0 20px;

  border: none;
  border-bottom: 4px solid white;
  border-radius: 3px;
  &:active {
    border: none;
  }

  color: whitesmoke;

  transition: background 200ms ease-in-out, border 300ms ease-in-out;
`;

const DecrementButton = Button.extend`
  background: #d33131;
  border-bottom-color: #b92727;

  &:hover,
  &:active {
    background: #ca2b2b;
  }
`;

const IncrementButton = Button.extend`
  background: #7ac70c;
  border-bottom-color: #65a50a;

  &:hover,
  &active {
    background: #71b90b;
  }
`;

const ButtonsContainer = styled.div`
  position: absolute;
  
  width: 100%;
  bottom: 20px;
  
  display: flex;
  justify-content: center;
`;

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <Container>
      <Card>
        <Title>Counter</Title>
        <CounterValue value={count}>{count}</CounterValue>
        <ButtonsContainer>
          <DecrementButton onClick={onDecrement}>
            <i className="fa fa-minus" />
          </DecrementButton>
          <IncrementButton onClick={onIncrement}>
            <i className="fa fa-plus" />
          </IncrementButton>
        </ButtonsContainer>
      </Card>
    </Container>
  );
};

export default Counter;

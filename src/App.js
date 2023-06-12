import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';

const PlusButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px;
  background-color: #61dafb;
`;

const MinusButton = styled.button`
  align-items: center;
  border: 0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 10px;
  background-color: #61dafb;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {
  const [value, setValue] = useState(0);

  const plusValue = () => {
    setValue(value + 1);
  };

  const minusValue = () => {
    setValue(value - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todo App
        </a>
        {value}
        <ButtonWrapper>
          <PlusButton onClick={() => plusValue()}>+</PlusButton>
          <MinusButton onClick={() => minusValue()}>-</MinusButton>
        </ButtonWrapper>
      </header>
    </div>
  );
}

export default App;

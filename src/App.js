import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column-reverse;
`

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #FFFFFF;
  margin-top: 3rem;
  font-size: 2rem;
  border: 2px solid black;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #FFFFFF;
  }
`

function App() {

  const fetchAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    let quote = await api.json()
    console.log(quote)
  }
  return (
    <Container>
      <Button
        type="button"
        onClick={ () => fetchAPI() }
      >
        Get Quote
      </Button>
    </Container>
  );
}

export default App;

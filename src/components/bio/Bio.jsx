// Import React
import React, { Component } from 'react';

// Import Libs
import faker from 'faker';
import styled from 'styled-components';

// Import Styles
import { flexFlow } from '../../styles/layout';

// Styles
const Container = styled.div`
  ${flexFlow()};
  box-sizing: border-box;

  height: 256px;

  padding: 32px 24px;
`;

const Name = styled.h1`
  font-size: 22px;
  font-weight: 700;

  margin-bottom: 10px;
`;

const Bread = styled.h2`
  font-size: 16px;

  opacity: 0.7;

  margin-bottom: 30px;
`;

const Details = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

class Bio extends Component {
  render() {
    return (
      <Container>
        <Name>
          {faker.name.firstName()} | {Math.floor(Math.random() * 22) + 1}
        </Name>
        <Bread>Sheba Inu</Bread>
        <Details>
          I’m the doggo on the left. Please take me home cause my dad wont stop
          making jokes and laughing at me. Save me. Please.
        </Details>
      </Container>
    );
  }
}

export default Bio;

// Import React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  font-weight: 600;

  margin-bottom: 10px;
`;

const Bread = styled.h2`
  font-size: 16px;
  text-transform: capitalize;

  opacity: 0.7;

  margin-bottom: 30px;
`;

const Details = styled.p`
  font-size: 16px;
  line-height: 28px;
`;

class Bio extends Component {
  render() {
    const { bread } = this.props;

    return (
      <Container>
        <Name>
          {faker.name.firstName()} | {Math.floor(Math.random() * 22) + 1}
        </Name>
        <Bread>{bread}</Bread>
        <Details>
          I’m the doggo on the left. Please take me home cause my dad wont stop
          making jokes and laughing at me. Save me. Please.
        </Details>
      </Container>
    );
  }
}

Bio.propTypes = {
  bread: PropTypes.string,
};

export default Bio;

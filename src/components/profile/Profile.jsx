// Import React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Libs
import styled from 'styled-components';

// Import Components
import Bio from '../bio/Bio';

// Import Styles
import { flexFlow } from '../../styles/layout';

// Styles
const Hero = styled(({ img, ...otherProps }) => <div {...otherProps} />)`
  background: url(${props => props.img});
  background-size: cover;
  background-position: center;

  ${flexFlow('row')} flex: 1;
`;

const Swipe = styled.div`
  flex: 1;
  height: 100%;
`;

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      dogImage: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { bread } = nextProps;

    if (bread) {
      fetch(`https://dog.ceo/api/breed/${bread}/images/random`)
        .then(res => res.json())
        .then(
          result => {
            console.log(result);

            this.setState({
              isLoaded: true,
              dogImage: result.message,
            });
          },

          error => {
            this.setState({
              isLoaded: true,
              error,
            });
          },
        );
    }
  }

  render() {
    const { bread, nextDog } = this.props;
    const { isLoaded, dogImage } = this.state;

    return (
      isLoaded && [
        <Hero img={dogImage} key="Hero">
          <Swipe onClick={nextDog} />
          <Swipe onClick={nextDog} />
        </Hero>,
        <Bio bread={bread} key="Bio" />,
      ]
    );
  }
}

Profile.propTypes = {
  bread: PropTypes.string,
  nextDog: PropTypes.func.isRequired,
};

export default Profile;

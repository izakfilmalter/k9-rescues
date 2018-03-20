// Import React
import React, { Component } from 'react';

// Import Components
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';

class Application extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breads: {
        data: [],
        error: null,
        isLoaded: false,
      },
      currentBread: '',
    };

    this.getRandomBread = this.getRandomBread.bind(this);
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/list')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            breads: {
              data: result.message,
              error: null,
              isLoaded: true,
            },
          });

          this.getRandomBread();
        },

        error => {
          this.setState({
            breads: {
              data: [],
              error,
              isLoaded: true,
            },
          });
        },
      );
  }

  getRandomBread() {
    const { breads: { isLoaded, data } } = this.state;

    if (!isLoaded) {
      return null;
    }

    this.setState({
      currentBread: data[Math.floor(Math.random() * data.length) + 1],
    });
  }

  render() {
    const { currentBread } = this.state;

    return [
      <Navigation key="navigation" />,
      <Profile
        bread={currentBread}
        nextDog={this.getRandomBread}
        key="profile"
      />,
    ];
  }
}

export default Application;

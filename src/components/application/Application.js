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

    return data[Math.floor(Math.random() * data.length) + 1];
  }

  render() {
    return [
      <Navigation key="navigation" />,
      <Profile bread={this.getRandomBread()} key="profile" />,
    ];
  }
}

export default Application;

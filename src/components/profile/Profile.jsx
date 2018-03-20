// Import React
import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      dogImage: '',
    };
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            dogImage: result.message,
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, dogImage } = this.state;

    return <div>profile</div>;
  }
}

export default Profile;

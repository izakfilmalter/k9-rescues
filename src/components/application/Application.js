// Import React
import React, { Component } from 'react';

// Import Components
import Navigation from '../navigation/Navigation';
import Profile from '../profile/Profile';

class Application extends Component {
  render() {
    return [<Navigation key="navigation" />, <Profile key="profile" />];
  }
}

export default Application;

// Import React
import React, { Component } from 'react';

// Import Libs
import styled from 'styled-components';

// Import Components
import Menu from '../icons/Menu';

const MenuStyled = styled(Menu)`
  fill: #fff;

  position: absolute;
  top: 16px;
  left: 16px;

  height: 32px;
  width: 32px;
`;

class Navigation extends Component {
  render() {
    return <MenuStyled />;
  }
}

export default Navigation;

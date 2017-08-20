import React, { Component } from 'react';
import styled from 'styled-components';
import { LINKS } from './SocialMedia';
import Link from './Link'

class App extends Component {
  render() {
    let links = LINKS;
    links = links.map(function(link, index) {
      return (
      <Link
        key={ index }
        type={ link.type }
        href={ link.href } />
      )
    }, this);
    return (
      <Wrapper>
        <Name>
          Izabella Konstanciak
        </Name>
        <LinksWrapeer>
          {links}
        </LinksWrapeer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: Helvetica;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 34px;
`;

const LinksWrapeer = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;
`;

export default App;

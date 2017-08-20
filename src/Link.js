import React, { Component } from 'react';
import styled from 'styled-components';
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon
} from './Icons'

class Link extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: '40px',
    };
  }

  onStartHover = () => {
    this.setState({
      width: '48px',
    })
  }

  onStopHover = () => {
    this.setState({
      width: '40px',
    })
  }

  renderIcon = () => {
    switch (this.props.type) {
      case 'facebook':
        return (
          <FacebookIcon
            width={this.state.width} />
        );
      case 'github':
        return (
          <GithubIcon
            width={this.state.width} />
        );
      case 'linkedin':
        return (
          <LinkedInIcon
            width={this.state.width} />
        );
      case 'twitter':
        return (
          <TwitterIcon
            width={this.state.width} />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <LinkWrapper
        onMouseOver={this.onStartHover}
        onMouseOut={this.onStopHover}
        hovered={this.state.isHovered}
        href={this.props.href}
        target='_blank'>
          {this.renderIcon()}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.a`
  font-size: 14px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    margin: 1px;
  }
`;

export default Link;

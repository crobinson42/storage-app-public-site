import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import { Media } from "../utils";
import { HomepageHeading } from "./HomepageHeading";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};
  
  adminWebsite = () =>{
    window.open(
        process.env.REACT_APP_ADMIN_SITE_URL
      )
  };
  scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  scrollToSpaces = () =>{
    window.scrollTo({
      top: 700, 
      behavior: 'smooth'
    });
  };
  scrollToPricing = () =>{
    window.scrollTo({
      top: 1350, 
      behavior: 'smooth'
    });
  };
  scrollToContact = () =>{
    window.scrollTo({
      top: 1600, 
      behavior: 'smooth'
    });
  };
  hideFixedMenu = () =>
    this.setState({
      fixed: false,
    });
  showFixedMenu = () =>
    this.setState({
      fixed: true,
    });
  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item onClick = {this.scrollToTop} as="a" active >
                  Home
                </Menu.Item>
                <Menu.Item onClick = {this.scrollToSpaces} as="a" >Spaces</Menu.Item>
                <Menu.Item onClick = {this.scrollToPricing} as="a">Pricing</Menu.Item>
                <Menu.Item onClick = {this.scrollToContact}as="a">Contact</Menu.Item>
                <Menu.Item position="right">
                  <Button onClick = {this.adminWebsite} as="a" inverted={!fixed}>
                    Log in
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

export { DesktopContainer };

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { Media } from "../utils";
import { HomepageHeading } from "./HomepageHeading";

class MobileContainer extends Component {
  state = {};
  adminWebsite = () =>{
    window.open(
        process.env.REACT_APP_ADMIN_SITE_URL
      )
    this.handleSidebarHide();
  };
  scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    this.handleSidebarHide();
  };
  scrollToSpaces = () =>{
    window.scrollTo({
      top: 400, 
      behavior: 'smooth'
    });
    this.handleSidebarHide();
  };
  scrollToPricing = () =>{
    window.scrollTo({
      top: 1400, 
      behavior: 'smooth'
    });
    this.handleSidebarHide();
  };
  scrollToContact = () =>{
    window.scrollTo({
      top: 2350, 
      behavior: 'smooth'
    });
    this.handleSidebarHide();
  };
  handleSidebarHide = () =>
    this.setState({
      sidebarOpened: false,
    });
  
  handleToggle = () =>
    this.setState({
      sidebarOpened: true,
    });
  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;
    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item onClick = {this.scrollToTop} as="a" active>
              Home
            </Menu.Item>
            <Menu.Item onClick = {this.scrollToSpaces} as="a">Spaces</Menu.Item>
            <Menu.Item onClick = {this.scrollToPricing} as="a">Pricing</Menu.Item>
            <Menu.Item onClick = {this.scrollToContact} as="a">Contact</Menu.Item>
            <Menu.Item onClick = {this.adminWebsite} as="a">Log in</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button onClick = {this.adminWebsite} as="a" inverted>
                      Log in
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

export { MobileContainer };

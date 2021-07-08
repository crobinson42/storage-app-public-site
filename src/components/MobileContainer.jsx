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
import { adminWebsite, scrollToTop } from './Helper'

class MobileContainer extends Component {
  state = {};
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
            <Menu.Item onClick = {this.handleSidebarHide, scrollToTop} as="a" active>
              Home
            </Menu.Item>
            <Menu.Item onClick = {this.handleSidebarHide} as="a"><a href='#spaces'> Spaces</a></Menu.Item>
            <Menu.Item onClick = {this.handleSidebarHide} as="a"><a href='#pricing'> Pricing</a></Menu.Item>
            <Menu.Item onClick = {this.handleSidebarHide} as="a"><a href='#contact'> Contact</a></Menu.Item>
            <Menu.Item onClick = {this.handleSidebarHide, adminWebsite} as="a">Log in</Menu.Item>
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
                    <Button onClick = {this.handleSidebarHide, adminWebsite} as="a" inverted>
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

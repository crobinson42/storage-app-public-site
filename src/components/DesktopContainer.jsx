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
import { adminWebsite, scrollToTop } from './Helper'




/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};
  
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
                <Menu.Item onClick = {scrollToTop} as="a" active >
                  Home
                </Menu.Item>
                <Menu.Item as="a" ><a href='#spaces'> Spaces</a></Menu.Item>
                <Menu.Item as="a"><a href='#pricing'>Pricing</a></Menu.Item>
                <Menu.Item as="a"><a href='#contact'>Contact</a></Menu.Item>
                <Menu.Item position="right">
                  <Button onClick = {adminWebsite} as="a" inverted={!fixed}>
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

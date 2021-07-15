import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Header, Icon } from "semantic-ui-react";

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      id = 'header'
      as="h2"
      content="Prairie Avenue Storage"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "2em" : "4em",
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export { HomepageHeading };

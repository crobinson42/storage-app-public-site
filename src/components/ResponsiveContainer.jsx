import React from "react";
import PropTypes from "prop-types";
import { MediaContextProvider } from "../utils";
import {DesktopContainer} from "./DesktopContainer";
import {MobileContainer} from "./MobileContainer";

  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export { ResponsiveContainer };

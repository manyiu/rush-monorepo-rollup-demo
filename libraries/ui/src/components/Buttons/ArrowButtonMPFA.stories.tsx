import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ArrowButtonMPFA from "./ArrowButtonMPFA";
import { ThemeProvider } from "@mui/material/styles";
import themes from "../../themes";

export default {
  title: "ArrowButtonMPFA",
  component: ArrowButtonMPFA,
} as ComponentMeta<typeof ArrowButtonMPFA>;

export const Primary: ComponentStory<typeof ArrowButtonMPFA> = () => (
  <ThemeProvider theme={themes.adminPortal}>
    <ArrowButtonMPFA ariaLabel="test" id="test-button" onClick={() => {}}>
      Text Button
    </ArrowButtonMPFA>
  </ThemeProvider>
);

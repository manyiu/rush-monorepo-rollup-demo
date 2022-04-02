import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import ButtonCTAWithIcon from "./ButtonCTAWithIcon";
import { ThemeProvider } from "@mui/material/styles";
import themes from "../../themes";

export default {
  title: "ButtonCTAWithIcon",
  component: ButtonCTAWithIcon,
} as ComponentMeta<typeof ButtonCTAWithIcon>;

export const Primary: ComponentStory<typeof ButtonCTAWithIcon> = () => (
  <ThemeProvider theme={themes.adminPortal}>
    <ButtonCTAWithIcon text="Test" id="test-button" onClick={() => {}} />
  </ThemeProvider>
);

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Header from "./index";
import {
  colorControls,
  typographyControls,
  spaceControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Typography/Header",
  component: Header,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls
  }
} as ComponentMeta<typeof Header>;

export default Story;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const header = Template.bind({});
header.args = {
  label: "Default"
};

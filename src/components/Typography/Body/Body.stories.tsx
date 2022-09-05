import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Body from "./Body";
import {
  colorControls,
  typographyControls,
  spaceControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Typography/Body",
  component: Body,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls
  }
} as ComponentMeta<typeof Body>;

export default Story;

const Template: ComponentStory<typeof Body> = (args) => <Body {...args} />;

export const body = Template.bind({});
body.args = {
  children: "Default"
};

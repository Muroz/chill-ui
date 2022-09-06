import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Subtitle from "./Subtitle";
import {
  colorControls,
  typographyControls,
  spaceControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Typography/Subtitle",
  component: Subtitle,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls
  }
} as ComponentMeta<typeof Subtitle>;

export default Story;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

export const subtitle = Template.bind({});
subtitle.args = {
  children: "Default"
};

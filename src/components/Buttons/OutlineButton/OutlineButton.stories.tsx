import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import OutlineButton from "./index";
import {
  colorControls,
  typographyControls,
  spaceControls,
  borderControls,
  layoutControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Interactions/Buttons/OutlineButton",
  component: OutlineButton,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls,
    ...borderControls,
    ...layoutControls
  }
} as ComponentMeta<typeof OutlineButton>;

export default Story;

const Template: ComponentStory<typeof OutlineButton> = (args) => (
  <OutlineButton {...args} />
);

export const outlineButton = Template.bind({});
outlineButton.args = {
  label: "Default"
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import FlatButton from "./index";
import {
  colorControls,
  typographyControls,
  spaceControls,
  borderControls,
  layoutControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Interactions/Buttons/FlatButton",
  component: FlatButton,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls,
    ...borderControls,
    ...layoutControls
  }
} as ComponentMeta<typeof FlatButton>;

export default Story;

const Template: ComponentStory<typeof FlatButton> = (args) => (
  <FlatButton {...args} />
);

export const flatButton = Template.bind({});
flatButton.args = {
  label: "Default"
};
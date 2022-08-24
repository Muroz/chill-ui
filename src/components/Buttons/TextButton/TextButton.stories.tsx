import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextButton from "./index";
import {
  colorControls,
  typographyControls,
  spaceControls,
  borderControls,
  layoutControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Interactions/Buttons/TextButton",
  component: TextButton,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls,
    ...borderControls,
    ...layoutControls
  }
} as ComponentMeta<typeof TextButton>;

export default Story;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const textButton = Template.bind({});
textButton.args = {
  label: "Default"
};

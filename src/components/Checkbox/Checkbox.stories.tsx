import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "./Checkbox";

const Story = {
  title: "Interactions/Forms/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Checkbox>;

export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const checkbox = Template.bind({});

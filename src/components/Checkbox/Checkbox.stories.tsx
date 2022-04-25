import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "./Checkbox";

const Story = {
  title: "Interactions/Checkbox",
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Checkbox>;

export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

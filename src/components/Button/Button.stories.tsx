import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "./Button";

const Story = {
  title: "Interactions/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" }
  }
} as ComponentMeta<typeof Button>;

export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Default",
  variant: "default"
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text"
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Outlined",
  variant: "outlined"
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Input from "./Input";

const Story = {
  title: "Interactions/Forms/Input",
  component: Input
} as ComponentMeta<typeof Input>;

export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const input = Template.bind({});
input.args = {
  label: "Default",
  required: true,
  name: "default"
};
import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TextInput from "./TextInput";

const Story = {
  title: "Interactions/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export default Story;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Default',
  required: true
};

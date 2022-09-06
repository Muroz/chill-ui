import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import H1 from "./H1";
import {
  colorControls,
  typographyControls,
  spaceControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Typography/H1",
  component: H1,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls
  }
} as ComponentMeta<typeof H1>;

export default Story;

const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />;

export const h1 = Template.bind({});
h1.args = {
  children: "Default"
};

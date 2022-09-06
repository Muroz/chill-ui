import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import H2 from "./H2";
import {
  colorControls,
  typographyControls,
  spaceControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Typography/H2",
  component: H2,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls
  }
} as ComponentMeta<typeof H2>;

export default Story;

const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />;

export const h2 = Template.bind({});
h2.args = {
  children: "Default"
};

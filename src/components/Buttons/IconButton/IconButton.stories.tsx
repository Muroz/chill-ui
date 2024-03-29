import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import IconButton from ".";

import {
  colorControls,
  typographyControls,
  spaceControls,
  borderControls,
  layoutControls
} from "../../../utils/storybook/controls";

const Story = {
  title: "Interactions/Buttons/IconButton",
  component: IconButton,
  argTypes: {
    ...colorControls,
    ...typographyControls,
    ...spaceControls,
    ...borderControls,
    ...layoutControls
  }
} as ComponentMeta<typeof IconButton>;

export default Story;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const iconButton = Template.bind({});
iconButton.args = {
  children: (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 500 500"
      width="25"
      height="25"
      fill="white"
    >
      <path
        d="M411.8,131.7c-9.5,0-17.2,7.7-17.2,17.2v288.2c0,10.1-8.2,18.4-18.4,18.4H113.3c-10.1,0-18.4-8.2-18.4-18.4V148.8
 c0-9.5-7.7-17.2-17.1-17.2c-9.5,0-17.2,7.7-17.2,17.2V437c0,29,23.6,52.7,52.7,52.7h262.9c29,0,52.7-23.6,52.7-52.7V148.8
 C428.9,139.3,421.2,131.7,411.8,131.7z"
      />
      <path
        d="M457.3,75.9H353V56.1C353,25.2,327.8,0,296.9,0H192.7c-31,0-56.1,25.2-56.1,56.1v19.8H32.3c-9.5,0-17.1,7.7-17.1,17.2
 s7.7,17.1,17.1,17.1h425c9.5,0,17.2-7.7,17.2-17.1C474.4,83.5,466.8,75.9,457.3,75.9z M170.9,56.1c0-12,9.8-21.8,21.8-21.8h104.2
 c12,0,21.8,9.8,21.8,21.8v19.8H170.9V56.1z"
      />
      <path
        d="M262,396.6V180.9c0-9.5-7.7-17.1-17.1-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1
 C254.3,413.7,262,406.1,262,396.6z"
      />
      <path
        d="M186.1,396.6V180.9c0-9.5-7.7-17.1-17.2-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1
 C178.4,413.7,186.1,406.1,186.1,396.6z"
      />
      <path
        d="M337.8,396.6V180.9c0-9.5-7.7-17.1-17.1-17.1s-17.1,7.7-17.1,17.1v215.7c0,9.5,7.7,17.1,17.1,17.1
 S337.8,406.1,337.8,396.6z"
      />
    </svg>
  )
};

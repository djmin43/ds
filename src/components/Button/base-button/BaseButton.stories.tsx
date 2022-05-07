import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { BaseButton, ButtonProps } from "./BaseButton";

export default {
  title: "Components/Button",
  component: BaseButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <BaseButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃"};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "Secondary 😇" };

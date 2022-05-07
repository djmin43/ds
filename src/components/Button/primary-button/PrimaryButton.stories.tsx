import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryButton, ButtonProps } from "./PrimaryButton";

export default {
  title: "Components/Button/PrimaryButton",
  component: PrimaryButton,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃"};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "하모니 😇" };

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BaseButton from "@atoms/button/BaseButton";

export default {
  title: "BaseButton",
  component: BaseButton,
} as ComponentMeta<typeof BaseButton>;

export const Primary: ComponentStory<typeof BaseButton> = () => (
  <BaseButton buttonStyle="primary" onClick={() => console.log("primary")}>
    primary
  </BaseButton>
);

export const Secondary: ComponentStory<typeof BaseButton> = () => (
  <BaseButton buttonStyle="secondary" onClick={() => console.log("secondary")}>
    secondary
  </BaseButton>
);

export const Success: ComponentStory<typeof BaseButton> = () => (
  <BaseButton buttonStyle="success" onClick={() => console.log("sucess")}>
    secondary
  </BaseButton>
);

export const Error: ComponentStory<typeof BaseButton> = () => (
  <BaseButton buttonStyle="error" onClick={() => console.log("error")}>
    secondary
  </BaseButton>
);

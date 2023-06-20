import type { Meta, StoryObj } from "@storybook/react";
import { GenericButton, buttonStyle } from ".";
import { cn } from "@helpers/frontend-utils";

const meta: Meta<typeof GenericButton> = {
  title: "Atoms/GenericButton",
  component: GenericButton,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;
type Story = StoryObj<typeof GenericButton>;

export const Primary: Story = {
  args: {
    children: "GenericButton",
    className: cn(buttonStyle, ""),
    href: "/"
  }
};

import type { Meta, StoryObj } from "@storybook/react";
import { NavBarLogo } from "./NavBarLogo";

const meta: Meta<typeof NavBarLogo> = {
  title: "Atoms/NavBarLogo",
  component: NavBarLogo,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;
type Story = StoryObj<typeof NavBarLogo>;

export const Primary: Story = {
  args: {
    children: "NavBarLogo"
  }
};

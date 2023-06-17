import type { Meta, StoryObj } from "@storybook/react";
import { NavBarActionButton } from ".";

const meta: Meta<typeof NavBarActionButton> = {
  title: "Atoms/NavBarActionButton",
  component: NavBarActionButton,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;
type Story = StoryObj<typeof NavBarActionButton>;

export const Primary: Story = {
  args: {
    children: "NavBarActionButton",
    className: "h-20",
    href: "/",
    variant: "buttonStyle"
  }
};

export const Secondary: Story = {
  args: {
    children: "Home",
    className: "h-20",
    href: "/",
    variant: "linkStyle"
  }
};
// <NavBarActionButton variant="linkStyle" href="/login"></NavBarActionButton>

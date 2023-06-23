import type { Meta, StoryObj } from "@storybook/react";
import { NavBarActionButton, buttonVariants } from ".";
import { cn } from "@helpers/frontend-utils";

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
    className: cn(
      buttonVariants({ variant: "buttonStyle", size: "md", className: "" })
    ),
    href: "/",
    variant: "buttonStyle"
  }
};

export const Secondary: Story = {
  args: {
    children: "Home",
    className: cn(
      buttonVariants({ variant: "buttonStyle", size: "md", className: "" })
    ),
    href: "/",
    variant: "linkStyle"
  }
};
// <NavBarActionButton variant="linkStyle" href="/login"></NavBarActionButton>

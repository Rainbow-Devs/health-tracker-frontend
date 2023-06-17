import type { Meta, StoryObj } from "@storybook/react";
import { NavBarLoginButtons } from "./NavBarLoginButtons";

const meta: Meta<typeof NavBarLoginButtons> = {
  title: "Molecules/NavBarLoginButtons",
  component: NavBarLoginButtons,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  },
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};

export default meta;

type Story = StoryObj<typeof NavBarLoginButtons>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

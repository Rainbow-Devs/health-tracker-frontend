import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from ".";

const meta: Meta<typeof NavBar> = {
  title: "Organisms/NavBar",
  component: NavBar,
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

type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

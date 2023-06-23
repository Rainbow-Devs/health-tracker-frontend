import type { Meta, StoryObj } from "@storybook/react";
import { LoginPrompt } from ".";

const meta: Meta<typeof LoginPrompt> = {
  title: "Molecules/LoginPrompt",
  component: LoginPrompt,
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

type Story = StoryObj<typeof LoginPrompt>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

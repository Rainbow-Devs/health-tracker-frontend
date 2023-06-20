import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from ".";

const meta: Meta<typeof LoginModal> = {
  title: "Organisms/LoginModal",
  component: LoginModal,
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

type Story = StoryObj<typeof LoginModal>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

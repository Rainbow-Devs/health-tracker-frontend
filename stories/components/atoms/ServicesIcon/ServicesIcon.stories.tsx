import type { Meta, StoryObj } from "@storybook/react";
import { ServicesIcon } from ".";

const meta: Meta<typeof ServicesIcon> = {
  title: "Molecules/ServicesIcon",
  component: ServicesIcon,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof ServicesIcon>;

export const Primary: Story = {};

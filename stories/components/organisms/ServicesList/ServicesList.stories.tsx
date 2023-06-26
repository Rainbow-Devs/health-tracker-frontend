import type { Meta, StoryObj } from "@storybook/react";
import { ServicesList } from ".";

const meta: Meta<typeof ServicesList> = {
  title: "Organisms/ServicesList",
  component: ServicesList,
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

type Story = StoryObj<typeof ServicesList>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

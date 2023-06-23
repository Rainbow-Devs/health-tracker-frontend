import type { Meta, StoryObj } from "@storybook/react";
import { ServiceList } from ".";

const meta: Meta<typeof ServiceList> = {
  title: "Organisms/ServiceList",
  component: ServiceList,
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

type Story = StoryObj<typeof ServiceList>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

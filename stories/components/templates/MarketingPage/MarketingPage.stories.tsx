import type { Meta, StoryObj } from "@storybook/react";
import { MarketingPage } from ".";

const meta: Meta<typeof MarketingPage> = {
  title: "Templates/MarketingPage",
  component: MarketingPage,
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

type Story = StoryObj<typeof MarketingPage>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

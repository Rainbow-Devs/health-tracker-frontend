import type { Meta, StoryObj } from "@storybook/react";
import { MarketingHero } from "./MarketingHero";

const meta: Meta<typeof MarketingHero> = {
  title: "Organisms/MarketingHero",
  component: MarketingHero,
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

type Story = StoryObj<typeof MarketingHero>;

export const Primary: Story = {
  args: {
    primary: true
  }
};

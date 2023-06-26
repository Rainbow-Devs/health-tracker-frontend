import type { Meta, StoryObj } from "@storybook/react";
import { ServicesListCard } from ".";

const meta: Meta<typeof ServicesListCard> = {
  title: "Molecules/ServicesListCard",
  component: ServicesListCard,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof ServicesListCard>;

export const Primary: Story = {};

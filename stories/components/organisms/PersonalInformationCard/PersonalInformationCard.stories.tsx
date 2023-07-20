import type { Meta, StoryObj } from "@storybook/react";
import { PersonalInformationCard } from ".";

const meta: Meta<typeof PersonalInformationCard> = {
  title: "Organisms/PersonalInformationCard",
  component: PersonalInformationCard,
  parameters: {
    nextjs: {
      appDirectory: true
    }
  }
};

export default meta;

type Story = StoryObj<typeof PersonalInformationCard>;

export const Primary: Story = {};

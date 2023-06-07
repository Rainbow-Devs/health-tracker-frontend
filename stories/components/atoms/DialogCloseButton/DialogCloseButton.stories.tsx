import type { Meta, StoryObj } from "@storybook/react";
import { DialogCloseButton } from "./DialogCloseButton";

const meta: Meta<typeof DialogCloseButton> = {
  title: "Atoms/DialogCloseButton",
  component: DialogCloseButton,
  argTypes: {
    backgroundColor: {
      control: "color"
    }
  }
};

export default meta;

type Story = StoryObj<typeof DialogCloseButton>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "DialogCloseButton"
  }
};

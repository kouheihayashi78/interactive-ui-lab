import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { mockUiItems } from "@/lib/msw/mock-data";
import { UiCard } from "../ui-card";

const meta = {
  title: "UI Gallery/UiCard",
  component: UiCard,
  parameters: {
    layout: "centered",
  },
  args: {
    item: mockUiItems[0],
  },
  decorators: [
    (Story) => (
      <div className="w-[360px] bg-background p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UiCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

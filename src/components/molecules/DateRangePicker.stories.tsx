import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';
import { fn } from '@storybook/test';

const meta = {
  title: 'Molecules/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};

export const Preselected: Story = {
  args: {
    value: {
      from: '2025-01-01',
      to: '2025-01-31',
    },
    onChange: fn(),
  },
};

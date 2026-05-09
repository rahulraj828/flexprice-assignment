import type { Meta, StoryObj } from '@storybook/react';
import { UsageBar } from './UsageBar';

const meta = {
  title: 'Molecules/UsageBar',
  component: UsageBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UsageBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'API Requests',
    used: 45000,
    total: 100000,
    unit: 'reqs',
    className: 'w-[400px]',
  },
};

export const NearLimit: Story = {
  args: {
    label: 'Storage',
    used: 85,
    total: 100,
    unit: 'GB',
    className: 'w-[400px]',
  },
};

export const OverLimit: Story = {
  args: {
    label: 'Seats',
    used: 12,
    total: 10,
    unit: 'seats',
    className: 'w-[400px]',
  },
};

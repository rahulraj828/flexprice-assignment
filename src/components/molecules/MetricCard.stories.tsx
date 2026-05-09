import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Total Revenue',
    value: '$45,231.89',
    trend: {
      value: '+20.1% from last month',
      isPositive: true,
    },
    className: 'w-[300px]',
  },
};

export const NegativeTrend: Story = {
  args: {
    label: 'Active Subscriptions',
    value: '2,350',
    trend: {
      value: '-4% from last week',
      isPositive: false,
    },
    className: 'w-[300px]',
  },
};

export const WithoutTrend: Story = {
  args: {
    label: 'Pending Invoices',
    value: '12',
    className: 'w-[300px]',
  },
};

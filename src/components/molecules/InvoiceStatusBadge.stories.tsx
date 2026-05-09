import type { Meta, StoryObj } from '@storybook/react';
import { InvoiceStatusBadge } from './InvoiceStatusBadge';

const meta = {
  title: 'Molecules/InvoiceStatusBadge',
  component: InvoiceStatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InvoiceStatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paid: Story = {
  args: {
    status: 'paid',
  },
};

export const Draft: Story = {
  args: {
    status: 'draft',
  },
};

export const Overdue: Story = {
  args: {
    status: 'overdue',
  },
};

export const Void: Story = {
  args: {
    status: 'void',
  },
};

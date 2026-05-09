import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Users } from 'lucide-react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No invoices found',
    description: "You haven't generated any invoices yet. Create your first one to get started.",
    action: {
      label: 'Create Invoice',
      onClick: fn(),
    },
    className: 'w-[600px]',
  },
};

export const CustomIcon: Story = {
  args: {
    icon: <Users className="h-10 w-10 text-muted-foreground" />,
    title: 'No customers yet',
    description: 'Import your customers or add them manually to manage their subscriptions.',
    action: {
      label: 'Add Customer',
      onClick: fn(),
    },
    className: 'w-[600px]',
  },
};

export const WithoutAction: Story = {
  args: {
    title: 'No results matching your filters',
    description: 'Try adjusting your filters or search term to find what you are looking for.',
    className: 'w-[600px]',
  },
};

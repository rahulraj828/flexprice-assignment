import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';
import { Info } from 'lucide-react';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a helpful tip',
    children: <Button variant="secondary">Hover me</Button>,
  },
};

export const WithIcon: Story = {
  args: {
    content: 'Calculated based on usage',
    children: (
      <div className="flex items-center gap-2 text-sm text-muted-foreground cursor-help">
        Estimated Cost <Info className="h-4 w-4" />
      </div>
    ),
  },
};

export const CustomDelay: Story = {
  args: {
    content: 'I appear slowly',
    delay: 1000,
    children: <Button variant="ghost">Slow Tooltip</Button>,
  },
};

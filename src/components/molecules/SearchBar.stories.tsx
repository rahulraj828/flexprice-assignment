import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { fn, expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSearch: fn(),
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search customers by email...',
    onSearch: fn(),
  },
};

export const InteractionTest: Story = {
  args: {
    onSearch: fn(),
    debounceTime: 100,
  },
  play: async ({ canvasElement, args }: { canvasElement: HTMLElement; args: any }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Search...');
    await userEvent.type(input, 'test');
    
    // Wait for debounce
    await new Promise((resolve) => setTimeout(resolve, 200));
    
    await expect(args.onSearch).toHaveBeenCalledWith('test');
    
    const clearBtn = canvas.getByRole('button');
    await userEvent.click(clearBtn);
    await expect(input).toHaveValue('');
  },
};

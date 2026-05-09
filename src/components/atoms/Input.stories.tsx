import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'email@example.com',
    type: 'email',
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters',
    type: 'password',
    defaultValue: '123',
  },
};

export const WithCurrency: Story = {
  args: {
    label: 'Price',
    prefix: '$',
    type: 'number',
    placeholder: '0.00',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'Cannot type here',
  },
};

export const InteractionTest: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Type to search...');
    await userEvent.type(input, 'FlexPrice');
    await expect(input).toHaveValue('FlexPrice');
  },
};

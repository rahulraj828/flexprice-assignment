import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { useState } from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Archived', value: 'archived' },
  { label: 'Draft', value: 'draft' },
  { label: 'Paid', value: 'paid' },
];

export const Default: Story = {
  args: {
    options: OPTIONS,
    placeholder: 'Choose a status',
    onChange: fn(),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Status',
    options: OPTIONS,
    placeholder: 'Select status',
  },
};

export const WithSearch: Story = {
  args: {
    label: 'Select Customer',
    options: [
      { label: 'Alice Smith', value: '1' },
      { label: 'Bob Jones', value: '2' },
      { label: 'Charlie Brown', value: '3' },
      { label: 'David Wilson', value: '4' },
    ],
    withSearch: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Status',
    options: OPTIONS,
    error: 'This field is required',
  },
};

export const Controlled: Story = {
  args: {
    options: OPTIONS,
  },
  render: (args) => {
    const [val, setVal] = useState('active');
    return (
      <Select
        {...args}
        label="Controlled Select"
        value={val}
        onChange={setVal}
        className="w-[200px]"
      />
    );
  },
};

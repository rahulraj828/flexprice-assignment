import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type Column } from './DataTable';

interface MockData {
  id: number;
  name: string;
  plan: string;
}

const meta: Meta<typeof DataTable<MockData>> = {
  title: 'Molecules/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_COLUMNS: Column<MockData>[] = [
  { key: 'id', header: 'ID' },
  { key: 'name', header: 'Customer Name' },
  { key: 'plan', header: 'Plan Status' },
];

// Generate 10,000 mock rows for the virtualization challenge
const MOCK_DATA: MockData[] = Array.from({ length: 10000 }).map((_, i) => ({
  id: i,
  name: `Customer ${i}`,
  plan: i % 2 === 0 ? 'Active' : 'Archived',
}));

export const VirtualizedList: Story = {
  args: {
    data: MOCK_DATA,
    columns: MOCK_COLUMNS,
    className: "w-[600px]"
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: MOCK_COLUMNS,
    emptyState: <div className="text-gray-500">No customers found matching filters.</div>,
    className: "w-[600px]"
  },
};

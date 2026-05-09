import { DataTable } from '../molecules/DataTable';
import { SearchBar } from '../molecules/SearchBar';
import { Select } from '../atoms/Select';
import { useFilterStore } from '../../lib/useFilterStore';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Advanced/Challenge A - Filtered Table',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;

const MOCK_DATA = Array.from({ length: 100 }).map((_, i) => ({
  id: i,
  name: i % 3 === 0 ? `Alice ${i}` : i % 3 === 1 ? `Bob ${i}` : `Charlie ${i}`,
  status: i % 2 === 0 ? 'active' : 'archived',
}));

export const FilteredTableDemo = {
  render: () => {
    const route = 'demo-table';
    const { setFilter, getFilters } = useFilterStore();
    const activeFilters = getFilters(route);

    const filteredData = MOCK_DATA.filter((item) => {
      const searchMatch = !activeFilters.search || 
        item.name.toLowerCase().includes(String(activeFilters.search).toLowerCase());
      const statusMatch = !activeFilters.status || item.status === activeFilters.status;
      return searchMatch && statusMatch;
    });

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="bg-muted p-4 rounded-lg">
          <h2 className="font-bold mb-2">Challenge A: Filter Persistence</h2>
          <p className="text-sm text-muted-foreground">
            Filters are persisted in <code className="bg-background px-1 rounded">sessionStorage</code> and synced as a shallow hash to the URL.
            Try filtering and then refresh the page.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-end">
          <div className="w-64">
            <SearchBar 
              onSearch={(val) => setFilter(route, 'search', val)} 
              placeholder="Search by name..."
              defaultValue={String(activeFilters.search || '')}
            />
          </div>
          <div className="w-48">
            <Select
              label="Status"
              options={[
                { label: 'All Statuses', value: '' },
                { label: 'Active', value: 'active' },
                { label: 'Archived', value: 'archived' },
              ]}
              value={String(activeFilters.status || '')}
              onChange={(val) => setFilter(route, 'status', val)}
            />
          </div>
          <button 
            onClick={() => useFilterStore.getState().resetFilters(route)}
            className="text-sm font-medium text-primary hover:underline"
          >
            Reset Filters
          </button>
        </div>

        <DataTable
          data={filteredData}
          columns={[
            { key: 'id', header: 'ID' },
            { key: 'name', header: 'Name' },
            { key: 'status', header: 'Status' },
          ]}
          emptyState={<div className="p-8 text-center text-muted-foreground">No matches found.</div>}
        />

        <div className="border-t pt-4">
          <h4 className="text-sm font-semibold mb-2">Active Store State (Session Storage):</h4>
          <pre className="bg-slate-950 text-slate-50 p-4 rounded-md text-xs overflow-auto">
            {JSON.stringify(activeFilters, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};

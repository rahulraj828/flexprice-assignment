import React, { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  emptyState?: React.ReactNode;
  className?: string;
}

/**
 * A performant virtualized table component for large datasets.
 */
export function DataTable<T extends { id: string | number }>({ 
  data, 
  columns, 
  emptyState,
  className
}: DataTableProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 48, // 48px row height estimation
    overscan: 5, // Render 5 extra items above and below
  });

  if (data.length === 0 && emptyState) {
    return <div className="p-8 text-center">{emptyState}</div>;
  }

  return (
    <div 
      ref={parentRef} 
      className={cn("h-[400px] overflow-auto border rounded-md shadow-sm bg-white", className)}
    >
      <div 
        style={{ height: `${rowVirtualizer.getTotalSize()}px`, width: '100%', position: 'relative' }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = data[virtualRow.index];
          return (
            <div
              key={item.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
              className="flex items-center border-b px-4 hover:bg-gray-50 transition-colors"
            >
              {columns.map(col => (
                <div key={String(col.key)} className="flex-1 truncate px-2">
                  {col.render ? col.render(item[col.key], item) : String(item[col.key] || '')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

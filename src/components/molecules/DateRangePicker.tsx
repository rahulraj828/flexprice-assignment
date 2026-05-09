import { useState } from 'react';
import { Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DateRange {
  from: string;
  to: string;
}

export interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  className?: string;
}

/**
 * Simplified date range picker for analytics filtering
 */
export function DateRangePicker({ value, onChange, className }: DateRangePickerProps) {
  const [from, setFrom] = useState(value?.from || '');
  const [to, setTo] = useState(value?.to || '');

  const handleChange = (newFrom: string, newTo: string) => {
    setFrom(newFrom);
    setTo(newTo);
    if (newFrom && newTo) {
      onChange?.({ from: newFrom, to: newTo });
    }
  };

  return (
    <div className={cn('flex items-center gap-2 rounded-md border bg-background p-1', className)}>
      <div className="flex items-center gap-2 px-3 py-1.5">
        <CalendarIcon className="h-4 w-4 text-muted-foreground" />
        <input
          type="date"
          className="bg-transparent text-sm outline-none"
          value={from}
          onChange={(e) => handleChange(e.target.value, to)}
        />
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
      <div className="px-3 py-1.5">
        <input
          type="date"
          className="bg-transparent text-sm outline-none"
          value={to}
          onChange={(e) => handleChange(from, e.target.value)}
        />
      </div>
    </div>
  );
}

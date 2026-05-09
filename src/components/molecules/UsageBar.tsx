import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface UsageBarProps {
  label: string;
  used: number;
  total: number;
  unit?: string;
  className?: string;
}

/**
 * Progress bar for showing resource usage vs entitlement
 */
export function UsageBar({ label, used, total, unit = 'units', className }: UsageBarProps) {
  const percentage = Math.min(Math.round((used / total) * 100), 100);
  const isOverLimit = used > total;

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">
          {used.toLocaleString()} / {total.toLocaleString()} {unit}
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className={cn(
            'h-full transition-all duration-500 ease-in-out',
            isOverLimit ? 'bg-destructive' : 'bg-primary'
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {isOverLimit && (
        <p className="text-xs font-medium text-destructive">
          Exceeded limit by {(used - total).toLocaleString()} {unit}
        </p>
      )}
    </div>
  );
}

import { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface NavItem {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
}

export interface SidebarNavProps {
  items: NavItem[];
  className?: string;
  onNavigate?: (href: string) => void;
}

/**
 * Collapsible sidebar navigation with active-route highlighting
 */
export function SidebarNav({ items, className, onNavigate }: SidebarNavProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        'relative flex flex-col border-r bg-card transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex h-16 items-center px-4 border-b">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground shrink-0">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          {!isCollapsed && <span className="font-bold text-lg truncate">FlexPrice</span>}
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate?.(item.href)}
            className={cn(
              'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              item.active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
              isCollapsed && 'justify-center px-0'
            )}
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className={cn('h-5 w-5 shrink-0')} />
            {!isCollapsed && <span className="truncate">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-2 border-t">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex h-9 w-full items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : (
            <div className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span className="text-xs">Collapse Sidebar</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

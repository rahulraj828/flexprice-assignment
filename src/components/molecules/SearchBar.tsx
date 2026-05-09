import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  defaultValue?: string;
  debounceTime?: number;
}

/**
 * A debounced search bar with clear button
 */
export function SearchBar({
  onSearch,
  placeholder = 'Search...',
  defaultValue = '',
  debounceTime = 300,
}: SearchBarProps) {
  const [term, setTerm] = useState(defaultValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(term);
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [term, onSearch, debounceTime]);

  return (
    <div className="relative w-full max-w-md">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        <Search className="h-4 w-4" />
      </div>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background pl-9 pr-9 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term && (
        <button
          onClick={() => setTerm('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

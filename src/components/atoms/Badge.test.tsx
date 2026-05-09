import { render } from '@testing-library/react';
import { Badge } from './Badge';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('renders correctly with children', () => {
    const { getByText } = render(<Badge>Active</Badge>);
    expect(getByText('Active')).toBeInTheDocument();
  });

  it('applies success variant correctly', () => {
    const { getByText } = render(<Badge variant="success">Paid</Badge>);
    expect(getByText('Paid')).toHaveClass('bg-green-100');
  });
});

import { render } from '@testing-library/react';
import { Button } from './Button';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('renders correctly with children', () => {
    const { getByRole } = render(<Button>Click me</Button>);
    expect(getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies primary variant by default', () => {
    const { getByRole } = render(<Button>Button</Button>);
    expect(getByRole('button')).toHaveClass('bg-primary');
  });

  it('applies danger variant correctly', () => {
    const { getByRole } = render(<Button variant="danger">Delete</Button>);
    expect(getByRole('button')).toHaveClass('bg-destructive');
  });
});

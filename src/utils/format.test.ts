import { describe, it, expect } from 'vitest';
import { formatCurrency, statusToLabel, calculateTierPrice } from './format';

describe('formatCurrency', () => {
  it('should format USD correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('should format EUR correctly', () => {
    expect(formatCurrency(1234.56, 'EUR')).toContain('1,234.56');
  });
});

describe('statusToLabel', () => {
  it('should capitalize status', () => {
    expect(statusToLabel('active')).toBe('Active');
    expect(statusToLabel('PAID')).toBe('Paid');
  });

  it('should handle empty status', () => {
    expect(statusToLabel('')).toBe('Unknown');
  });
});

describe('calculateTierPrice', () => {
  const tiers = [
    { upTo: 100, unitPrice: 1 },
    { upTo: 1000, unitPrice: 0.5 },
    { upTo: 'unlimited', unitPrice: 0.1 },
  ] as any;

  it('should calculate price for first tier', () => {
    expect(calculateTierPrice(50, tiers)).toBe(50);
  });

  it('should calculate price across two tiers', () => {
    // 100 * 1 + 100 * 0.5 = 150
    expect(calculateTierPrice(200, tiers)).toBe(150);
  });

  it('should calculate price across all tiers', () => {
    // 100 * 1 + 900 * 0.5 + 1000 * 0.1 = 100 + 450 + 100 = 650
    expect(calculateTierPrice(2000, tiers)).toBe(650);
  });
});

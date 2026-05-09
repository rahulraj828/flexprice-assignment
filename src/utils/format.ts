/**
 * Formats a number as a currency string
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Maps a status string to a human-readable label
 */
export function statusToLabel(status: string): string {
  if (!status) return 'Unknown';
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
}

/**
 * Calculates the total price for a tiered pricing model
 * Example: First 100 units at $1, next 900 at $0.5, rest at $0.1
 */
export interface PricingTier {
  upTo: number | 'unlimited';
  unitPrice: number;
}

export function calculateTierPrice(units: number, tiers: PricingTier[]): number {
  let total = 0;
  let remainingUnits = units;
  let prevLimit = 0;

  for (const tier of tiers) {
    if (remainingUnits <= 0) break;

    const limit = tier.upTo === 'unlimited' ? Infinity : tier.upTo;
    const tierCapacity = limit - prevLimit;
    const unitsInThisTier = Math.min(remainingUnits, tierCapacity);

    total += unitsInThisTier * tier.unitPrice;
    remainingUnits -= unitsInThisTier;
    prevLimit = limit;
  }

  return total;
}

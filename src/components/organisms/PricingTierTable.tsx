import { Button } from '../atoms/Button';
import { Check } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

export interface PricingTierTableProps {
  tiers: PricingTier[];
  className?: string;
  onSelectTier?: (tier: PricingTier) => void;
}

/**
 * Displays tiered or graduated pricing in a readable table
 */
export function PricingTierTable({ tiers, className, onSelectTier }: PricingTierTableProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-8 md:grid-cols-3', className)}>
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            'relative flex flex-col rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md',
            tier.isPopular && 'border-primary ring-1 ring-primary'
          )}
        >
          {tier.isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most Popular
            </div>
          )}
          <div className="mb-8">
            <h3 className="text-lg font-bold">{tier.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight">{tier.price}</span>
              <span className="ml-1 text-sm text-muted-foreground">/month</span>
            </div>
          </div>
          <ul className="mb-8 flex-1 space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            variant={tier.isPopular ? 'primary' : 'secondary'}
            className="w-full"
            onClick={() => onSelectTier?.(tier)}
          >
            {tier.cta}
          </Button>
        </div>
      ))}
    </div>
  );
}

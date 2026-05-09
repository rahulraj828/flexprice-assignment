import type { Meta, StoryObj } from '@storybook/react';
import { PricingTierTable } from './PricingTierTable';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/PricingTierTable',
  component: PricingTierTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const TIERS = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for small projects and hobbyists.',
    features: ['Up to 1,000 requests', 'Basic analytics', 'Community support'],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49',
    description: 'Everything you need to scale your business.',
    features: ['Unlimited requests', 'Advanced analytics', 'Priority support', 'Custom domains'],
    cta: 'Upgrade to Pro',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Dedicated support and infrastructure for large teams.',
    features: ['SLA guarantees', 'Dedicated account manager', 'SSO & SAML', 'Custom contracts'],
    cta: 'Contact Sales',
  },
];

export const Default: Story = {
  args: {
    tiers: TIERS,
    onSelectTier: fn(),
    className: 'max-w-6xl',
  },
};

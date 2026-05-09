import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNav } from './SidebarNav';
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  FileText, 
  Settings,
  BarChart3
} from 'lucide-react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Organisms/SidebarNav',
  component: SidebarNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/', active: true },
  { label: 'Customers', icon: Users, href: '/customers' },
  { label: 'Subscriptions', icon: CreditCard, href: '/subscriptions' },
  { label: 'Invoices', icon: FileText, href: '/invoices' },
  { label: 'Analytics', icon: BarChart3, href: '/analytics' },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

export const Default: Story = {
  args: {
    items: NAV_ITEMS,
    onNavigate: fn(),
    className: 'h-screen',
  },
};

export const Collapsed: Story = {
  args: {
    items: NAV_ITEMS,
    className: 'h-screen',
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the toggle at the bottom to expand/collapse.',
      },
    },
  },
};

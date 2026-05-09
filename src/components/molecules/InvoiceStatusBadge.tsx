import { Badge } from '../atoms/Badge';
import { CheckCircle2, Clock, XCircle, FileText } from 'lucide-react';

export type InvoiceStatus = 'paid' | 'draft' | 'void' | 'overdue' | 'uncollectible';

export interface InvoiceStatusBadgeProps {
  status: InvoiceStatus;
}

/**
 * Maps invoice status strings to coloured chips with icons
 */
export function InvoiceStatusBadge({ status }: InvoiceStatusBadgeProps) {
  const config: Record<InvoiceStatus, { label: string; variant: any; icon: any }> = {
    paid: { label: 'Paid', variant: 'success', icon: CheckCircle2 },
    draft: { label: 'Draft', variant: 'secondary', icon: FileText },
    void: { label: 'Void', variant: 'outline', icon: XCircle },
    overdue: { label: 'Overdue', variant: 'destructive', icon: Clock },
    uncollectible: { label: 'Uncollectible', variant: 'destructive', icon: XCircle },
  };

  const { label, variant, icon: Icon } = config[status];

  return (
    <Badge variant={variant} className="gap-1 px-2">
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  );
}

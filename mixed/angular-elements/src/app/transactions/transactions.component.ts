import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'amex-transactions',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './transactions.component.html',
    styles: [`
    .card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e1e7ed; }
    .transaction-list { display: flex; flex-direction: column; gap: 1rem; }
    .transaction-item { display: flex; align-items: center; justify-content: space-between; padding: 1rem; border-bottom: 1px solid #e1e7ed; transition: background 0.2s ease; }
    .transaction-item:hover { background: #f4f7f9; border-radius: 12px; }
    .status-badge { padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; background: #e6f7ed; color: #1a7f37; }
    h3 { font-size: 1.25rem; margin-bottom: 1.5rem; color: #1a1a1a; font-family: 'Inter', sans-serif; }
    .angular-label { display: inline-block; background: #dd0031; color: white; font-size: 0.6rem; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle; }
  `]
})
export class TransactionsComponent {
    transactions = [
        { name: 'Delta Air Lines', category: 'Travel', date: 'Feb 04, 2026', amount: '$425.00', status: 'Processed' },
        { name: 'The Grill NYC', category: 'Dining', date: 'Feb 03, 2026', amount: '$182.40', status: 'Processed' },
        { name: 'Apple Store', category: 'Shopping', date: 'Jan 31, 2026', amount: '$1,299.00', status: 'Processed' },
        { name: 'Whole Foods', category: 'Shopping', date: 'Jan 28, 2026', amount: '$64.20', status: 'Processed' }
    ];
}

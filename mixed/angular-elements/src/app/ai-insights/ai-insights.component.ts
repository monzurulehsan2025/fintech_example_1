import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'amex-ai-insights',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ai-insights.component.html',
    styles: [`
    .card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #e1e7ed; height: 100%; }
    h3 { font-size: 1.25rem; margin-bottom: 1.5rem; color: #1a1a1a; font-family: 'Inter', sans-serif; }
    .angular-label { display: inline-block; background: #dd0031; color: white; font-size: 0.6rem; padding: 2px 6px; border-radius: 4px; margin-left: 8px; vertical-align: middle; }
    .chart-container { width: 120px; height: 120px; border-radius: 50%; border: 8px solid #f4f7f9; border-top-color: #006fcf; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; }
  `]
})
export class AiInsightsComponent { }

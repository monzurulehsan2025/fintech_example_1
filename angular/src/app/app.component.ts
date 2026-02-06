import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    LayoutDashboard,
    CreditCard,
    History,
    Plane,
    Gift,
    Settings,
    Search,
    Bell,
    User,
    ArrowUpRight,
    ArrowRight
} from 'lucide-angular';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './app.component.html',
    styleUrls: []
})
export class AppComponent {
    readonly LayoutDashboard = LayoutDashboard;
    readonly CreditCard = CreditCard;
    readonly History = History;
    readonly Plane = Plane;
    readonly Gift = Gift;
    readonly Settings = Settings;
    readonly Search = Search;
    readonly Bell = Bell;
    readonly User = User;
    readonly ArrowUpRight = ArrowUpRight;
    readonly ArrowRight = ArrowRight;

    transactions = [
        { name: 'Delta Air Lines', category: 'Travel', date: 'Feb 04, 2026', amount: '$425.00', status: 'Processed' },
        { name: 'The Grill NYC', category: 'Dining', date: 'Feb 03, 2026', amount: '$182.40', status: 'Processed' },
        { name: 'Apple Store', category: 'Shopping', date: 'Jan 31, 2026', amount: '$1,299.00', status: 'Processed' },
        { name: 'Whole Foods', category: 'Shopping', date: 'Jan 28, 2026', amount: '$64.20', status: 'Processed' }
    ];
}

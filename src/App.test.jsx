import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Amex Dashboard Integration Tests', () => {
    it('1. Renders the welcome title for the user', () => {
        render(<App />);
        expect(screen.getByText(/Welcome back, Alex/i)).toBeInTheDocument();
    });

    it('2. Displays the Platinum Card Balance section', () => {
        render(<App />);
        expect(screen.getByText(/Platinum Card Balance/i)).toBeInTheDocument();
        expect(screen.getByText(/\$4,285\.50/i)).toBeInTheDocument();
    });

    it('3. Displays the Membership Rewards points correctly', () => {
        render(<App />);
        expect(screen.getByText(/^Membership Rewards$/i)).toBeInTheDocument();
        expect(screen.getByText(/124,500/i)).toBeInTheDocument();
    });

    it('4. Renders the primary navigation links in the sidebar', () => {
        render(<App />);
        expect(screen.getAllByText(/Dashboard/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/My Cards/i).length).toBeGreaterThan(0);
        expect(screen.getAllByText(/Rewards/i).length).toBeGreaterThan(0);
    });

    it('5. Displays the "Pay Bill" action button', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /Pay Bill/i })).toBeInTheDocument();
    });

    it('6. Shows recent transactions from Delta Air Lines', () => {
        render(<App />);
        expect(screen.getAllByText(/Delta Air Lines/i).length).toBeGreaterThan(1);
        expect(screen.getAllByText(/Processed/i).length).toBeGreaterThan(1);
    });

    it('7. Displays AI Spending Insights with the correct percentage', () => {
        render(<App />);
        expect(screen.getByText(/AI Spending Insights/i)).toBeInTheDocument();
        expect(screen.getByText(/65%/i)).toBeInTheDocument();
    });

    it('8. Renders the search bar placeholder', () => {
        render(<App />);
        expect(screen.getByPlaceholderText(/Search transactions, offers\.\.\./i)).toBeInTheDocument();
    });

    it('9. Displays the user profile name in the header', () => {
        render(<App />);
        expect(screen.getByText(/Alex Thompson/i)).toBeInTheDocument();
        expect(screen.getByText(/Platinum Member/i)).toBeInTheDocument();
    });

    it('10. Renders the "View Personalized Plan" button in the hero banner', () => {
        render(<App />);
        expect(screen.getByText(/View Personalized Plan/i)).toBeInTheDocument();
    });
});

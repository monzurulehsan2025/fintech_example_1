import React, { useEffect } from 'react';
import {
  LayoutDashboard,
  CreditCard,
  History,
  Plane,
  Gift,
  Settings,
  Search,
  Bell,
  User,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="logo">
      <div style={{ width: 32, height: 32, background: 'var(--primary)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>A</div>
      <span>AMEX GLOBAL</span>
    </div>

    <nav className="nav-links">
      <a href="#" className="nav-link active">
        <LayoutDashboard size={20} />
        Dashboard
      </a>
      <a href="#" className="nav-link">
        <CreditCard size={20} />
        My Cards
      </a>
      <a href="#" className="nav-link">
        <History size={20} />
        Transactions
      </a>
      <a href="#" className="nav-link">
        <Gift size={20} />
        Rewards
      </a>
      <a href="#" className="nav-link">
        <Plane size={20} />
        Travel & Lifestyle
      </a>
      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <a href="#" className="nav-link">
          <Settings size={20} />
          Settings
        </a>
      </div>
    </nav>
  </aside>
);

const Header = () => (
  <header className="header">
    <div className="search-bar">
      <Search size={18} color="#666" />
      <input type="text" placeholder="Search transactions, offers..." />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <Bell size={22} color="var(--secondary)" />
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alex Thompson</p>
          <p style={{ fontSize: '0.75rem', color: '#666' }}>Platinum Member</p>
        </div>
        <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <User size={20} />
        </div>
      </div>
    </div>
  </header>
);

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Header />

      <main className="main-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="premium-banner">
            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, Alex <span className="react-label">REACT HOST</span></h1>
            <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>You have 3 new offers tailored to your travel interests.</p>
            <button className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)' }}>
              View Personalized Plan
            </button>
          </div>

          <div className="stats-grid">
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: '#666', fontWeight: 500 }}>Platinum Card Balance <span className="react-label">REACT</span></span>
                <CreditCard size={20} color="var(--primary)" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>$4,285.50</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1a7f37', fontSize: '0.9rem' }}>
                <ArrowUpRight size={16} />
                <span>+12% from last month</span>
              </div>
              <img src="/card.png" alt="Amex Platinum" className="card-img" />
            </div>

            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: '#666', fontWeight: 500 }}>Membership Rewards <span className="react-label">REACT</span></span>
                <Gift size={20} color="#e67e22" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>124,500</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Points available to redeem</p>

              <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Recent Earnings</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>Delta Air Lines (5x)</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>+1,250 pts</span>
                </div>
              </div>
            </div>

            {/* Angular Component 1 */}
            <amex-ai-insights></amex-ai-insights>
          </div>

          <div className="grid-cols-2">
            {/* Angular Component 2 */}
            <amex-transactions></amex-transactions>

            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: '#666', fontWeight: 500 }}>Travel & Lifestyle <span className="react-label">REACT</span></span>
                <Plane size={20} color="#00a3e0" />
              </div>
              <img src="/luxury.png" alt="Luxury Travel" style={{ width: '100%', borderRadius: 12, marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Luxury Escape</h3>
              <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Exclusive 20% off at Ritz-Carlton Paris</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
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
  ArrowUpRight,
  Plus,
  ArrowRight
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
      <Search size={18} color="var(--text-muted)" />
      <input type="text" placeholder="Search transactions, offers..." />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }}>
        <Bell size={22} color="var(--secondary)" />
        <span style={{ position: 'absolute', top: 0, right: 0, width: 8, height: 8, background: '#ef4444', borderRadius: '50%', border: '2px solid white' }}></span>
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Alex Thompson</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Platinum Member</p>
        </div>
        <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <User size={20} />
        </div>
      </div>
    </div>
  </header>
);

const TransactionItem = ({ name, category, date, amount, status }) => (
  <div className="transaction-item">
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div style={{ width: 40, height: 40, background: 'var(--bg)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {category === 'Travel' && <Plane size={20} color="var(--primary)" />}
        {category === 'Dining' && <Gift size={20} color="#e67e22" />}
        {category === 'Shopping' && <CreditCard size={20} color="#9b59b6" />}
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>{name}</p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{date} • {category}</p>
      </div>
    </div>
    <div style={{ textAlign: 'right' }}>
      <p style={{ fontWeight: 700 }}>{amount}</p>
      <span className="status-badge status-success">{status}</span>
    </div>
  </div>
);

function App() {
  const trackEvent = (eventName, metadata = {}) => {
    const timestamp = new Date().toISOString();
    console.group(`📊 Analytics Event: ${eventName}`);
    console.log(`Time: ${timestamp}`);
    console.log('Metadata:', metadata);
    console.groupEnd();
    // In a real app, this would be: fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ eventName, metadata, timestamp }) });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <Header />

      <main className="main-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="premium-banner">
            <div style={{ position: 'relative', zIndex: 2 }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome back, Alex</h1>
              <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>You have 3 new offers tailored to your travel interests.</p>
              <button
                className="btn btn-primary"
                style={{ background: 'white', color: 'var(--primary)' }}
                onClick={() => trackEvent('VIEW_PERSONALIZED_PLAN', { location: 'hero_banner', userId: 'alex_01' })}
              >
                View Personalized Plan
              </button>
            </div>
          </motion.div>

          <div className="stats-grid">
            <motion.div variants={itemVariants} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Platinum Card Balance</span>
                <CreditCard size={20} color="var(--primary)" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>$4,285.50</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1a7f37', fontSize: '0.9rem' }}>
                <ArrowUpRight size={16} />
                <span>+12% from last month</span>
              </div>
              <img src="/card.png" alt="Amex Platinum" className="card-img" />
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                <button
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                  onClick={() => trackEvent('INITIATE_BILL_PAY', { amount: 4285.50, currency: 'USD', cardType: 'Platinum' })}
                >
                  Pay Bill
                </button>
                <button className="btn" style={{ background: 'var(--bg)', color: 'var(--secondary)', flex: 1 }}>Manage</button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Membership Rewards</span>
                <Gift size={20} color="#e67e22" />
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>124,500</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Points available to redeem</p>

              <div style={{ background: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)', marginBottom: '1rem' }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>Recent Earnings</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span>Delta Air Lines (5x)</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>+1,250 pts</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button className="btn" style={{ border: '1px solid var(--primary)', color: 'var(--primary)' }}>Explore Rewards</button>
                <button className="btn" style={{ background: 'var(--bg)', color: 'var(--secondary)' }}>Transfer Points</button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Travel & Lifestyle</span>
                <Plane size={20} color="var(--accent)" />
              </div>
              <div className="offer-card">
                <img src="/luxury.png" alt="Luxury Travel" />
                <div className="offer-overlay"></div>
                <div className="offer-content">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Luxury Escape</h3>
                  <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Exclusive 20% off at Ritz-Carlton Paris</p>
                  <button style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>
                    Book Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Next Trip: New York (Mar 12)</p>
                <button className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', background: 'var(--bg)' }}>View Trip</button>
              </div>
            </motion.div>
          </div>

          <div className="grid-cols-2">
            <motion.div variants={itemVariants} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>Recent Transactions</h3>
                <button style={{ color: 'var(--primary)', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>View All</button>
              </div>
              <div className="transaction-list">
                <TransactionItem
                  name="Delta Air Lines"
                  category="Travel"
                  date="Feb 04, 2026"
                  amount="$425.00"
                  status="Processed"
                />
                <TransactionItem
                  name="The Grill NYC"
                  category="Dining"
                  date="Feb 03, 2026"
                  amount="$182.40"
                  status="Processed"
                />
                <TransactionItem
                  name="Apple Store"
                  category="Shopping"
                  date="Jan 31, 2026"
                  amount="$1,299.00"
                  status="Processed"
                />
                <TransactionItem
                  name="Whole Foods"
                  category="Shopping"
                  date="Jan 28, 2026"
                  amount="$64.20"
                  status="Processed"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>AI Spending Insights</h3>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', border: '8px solid var(--bg)', borderTopColor: 'var(--primary)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>65%</p>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>of limit</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                  Your travel spending is <span style={{ fontWeight: 700 }}>lower</span> than usual this month. You have <span style={{ fontWeight: 700 }}>$1,200</span> more available for your next trip.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span>Projected Balance</span>
                    <span style={{ fontWeight: 600 }}>$5,100</span>
                  </div>
                  <div style={{ paddingBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span>Savings Goal</span>
                    <span style={{ fontWeight: 600, color: '#1a7f37' }}>+ $340</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div >
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity, Bell, ChevronRight, Home, LockKeyhole, Moon,
  Plus, ShieldCheck, Smartphone, UserRound, UsersRound,
  WalletCards, Wifi, Eye, CheckCircle2, AlertTriangle, Settings
} from 'lucide-react';
import './styles.css';

const onboarding = [
  {
    title: 'Your safety, always active',
    text: 'Stay protected with a simple hub that keeps your digital safety tools in one place.',
    icon: ShieldCheck
  },
  {
    title: 'See what matters',
    text: 'Track your protection score, recent activity and threats prevented at a glance.',
    icon: Activity
  },
  {
    title: 'Stay connected',
    text: 'Build a trusted care network and reach the right people quickly when you need help.',
    icon: UsersRound
  }
];

const timeline = [
  { time: '10:42 AM', title: 'Suspicious link blocked', detail: 'Message link was flagged before opening.', type: 'safe' },
  { time: '9:15 AM', title: 'Privacy scan completed', detail: 'No exposed personal information found.', type: 'safe' },
  { time: 'Yesterday', title: 'New login reviewed', detail: 'Chrome on Windows · Singapore', type: 'review' },
  { time: 'Monday', title: 'Password updated', detail: 'Credential wallet security improved.', type: 'safe' }
];

const contacts = [
  { name: 'Mum', role: 'Primary trusted contact', initials: 'M' },
  { name: 'Alicia', role: 'Close friend', initials: 'A' },
  { name: 'Mr Tan', role: 'School support', initials: 'T' }
];

function BrandMark({ large = false }) {
  return (
    <div className={`brand-mark ${large ? 'large' : ''}`}>
      <ShieldCheck size={large ? 52 : 28} strokeWidth={2.2} />
    </div>
  );
}

function Splash({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <section className="splash screen">
      <div className="splash-glow" />
      <BrandMark large />
      <h1>SafeClick</h1>
      <p>Protection that stays close.</p>
      <div className="loading-bar"><span /></div>
    </section>
  );
}

function Onboarding({ onFinish }) {
  const [step, setStep] = useState(0);
  const ItemIcon = onboarding[step].icon;
  return (
    <section className="onboarding screen">
      <button className="skip" onClick={onFinish}>Skip</button>
      <div className="orb-wrap">
        <div className="orb"><ItemIcon size={68} /></div>
      </div>
      <div className="onboarding-copy">
        <div className="dots">
          {onboarding.map((_, i) => <span key={i} className={i === step ? 'active' : ''} />)}
        </div>
        <h2>{onboarding[step].title}</h2>
        <p>{onboarding[step].text}</p>
        <button className="primary-btn" onClick={() => step === 2 ? onFinish() : setStep(step + 1)}>
          {step === 2 ? 'Enter Safety Hub' : 'Continue'} <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Header({ title, subtitle }) {
  return (
    <header className="page-header">
      <div>
        <p className="eyebrow">{subtitle}</p>
        <h1>{title}</h1>
      </div>
      <button className="icon-btn"><Bell size={20} /></button>
    </header>
  );
}

function HomeScreen() {
  return (
    <div className="page">
      <Header title="Safety Hub" subtitle="Good afternoon, Junkai" />
      <section className="hero-card">
        <div className="ring-wrap">
          <div className="protection-ring">
            <div className="ring-inner">
              <ShieldCheck size={28} />
              <strong>92</strong>
              <span>Protection Score</span>
            </div>
          </div>
        </div>
        <div className="hero-copy">
          <span className="status-pill">Excellent protection</span>
          <h2>You are well protected today.</h2>
          <p>All key safety checks are active.</p>
        </div>
      </section>

      <div className="stats-grid">
        <article className="stat-card">
          <div className="stat-icon cyan"><ShieldCheck size={20} /></div>
          <strong>18</strong><span>Threats prevented</span>
        </article>
        <article className="stat-card">
          <div className="stat-icon green"><CheckCircle2 size={20} /></div>
          <strong>4</strong><span>Checks completed</span>
        </article>
      </div>

      <section className="section-block">
        <div className="section-title"><h3>Today’s summary</h3><button>View all</button></div>
        <div className="summary-card">
          <div><Wifi size={22} /><span>Network scan</span></div><b>Secure</b>
          <div><Eye size={22} /><span>Privacy exposure</span></div><b>None found</b>
          <div><LockKeyhole size={22} /><span>Credential health</span></div><b>Strong</b>
        </div>
      </section>

      <section className="section-block">
        <div className="section-title"><h3>Quick actions</h3></div>
        <div className="quick-grid">
          <button><Smartphone /><span>Device scan</span></button>
          <button><UsersRound /><span>Care network</span></button>
          <button><WalletCards /><span>Credentials</span></button>
          <button><AlertTriangle /><span>Report issue</span></button>
        </div>
      </section>
    </div>
  );
}

function ActivityScreen() {
  return (
    <div className="page">
      <Header title="Activity" subtitle="Your recent safety events" />
      <div className="filter-row">
        <button className="active">All</button><button>Blocked</button><button>Checks</button>
      </div>
      <section className="timeline">
        {timeline.map((item, i) => (
          <article className="timeline-item" key={i}>
            <div className={`timeline-icon ${item.type}`}>
              {item.type === 'safe' ? <CheckCircle2 size={20} /> : <AlertTriangle size={20} />}
            </div>
            <div className="timeline-content">
              <span>{item.time}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
            <ChevronRight size={18} />
          </article>
        ))}
      </section>
    </div>
  );
}

function NetworkScreen() {
  return (
    <div className="page">
      <Header title="Care Network" subtitle="People you trust" />
      <section className="network-banner">
        <UsersRound size={32} />
        <div><h2>Your support circle</h2><p>Trusted contacts can help when something feels wrong.</p></div>
      </section>
      <button className="add-contact"><Plus size={20} /> Add Trusted Contact</button>
      <div className="contact-list">
        {contacts.map((c) => (
          <article className="contact-card" key={c.name}>
            <div className="avatar">{c.initials}</div>
            <div><h3>{c.name}</h3><p>{c.role}</p></div>
            <button className="icon-btn"><ChevronRight size={18} /></button>
          </article>
        ))}
      </div>
    </div>
  );
}

function Toggle({ initial = true }) {
  const [on, setOn] = useState(initial);
  return <button className={`toggle ${on ? 'on' : ''}`} onClick={() => setOn(!on)}><span /></button>;
}

function ProfileScreen() {
  const rows = [
    [WalletCards, 'Credential Wallet', 'Manage saved credentials'],
    [LockKeyhole, 'Privacy Settings', 'Control what is shared'],
    [Bell, 'Notifications', 'Choose your safety alerts'],
    [Moon, 'Appearance', 'Light and display options'],
    [Settings, 'About', 'App information']
  ];
  return (
    <div className="page">
      <Header title="Profile" subtitle="Account and preferences" />
      <section className="profile-card">
        <div className="profile-avatar">J</div>
        <div><h2>Junkai</h2><p>Protection member</p></div>
        <button>Edit</button>
      </section>
      <section className="settings-card">
        {rows.map(([Icon, title, detail], i) => (
          <div className="setting-row" key={title}>
            <div className="setting-icon"><Icon size={20} /></div>
            <div className="setting-copy"><h3>{title}</h3><p>{detail}</p></div>
            {i === 2 ? <Toggle /> : i === 3 ? <Toggle initial={false} /> : <ChevronRight size={18} />}
          </div>
        ))}
      </section>
    </div>
  );
}

function BottomNav({ active, setActive }) {
  const items = [
    ['home', Home, 'Home'],
    ['activity', Activity, 'Activity'],
    ['network', UsersRound, 'Care'],
    ['profile', UserRound, 'Profile']
  ];
  return (
    <nav className="bottom-nav">
      {items.map(([id, Icon, label]) => (
        <button key={id} className={active === id ? 'active' : ''} onClick={() => setActive(id)}>
          <Icon size={21} /><span>{label}</span>
        </button>
      ))}
    </nav>
  );
}

function App() {
  const [stage, setStage] = useState('splash');
  const [active, setActive] = useState('home');

  if (stage === 'splash') return <PhoneShell><Splash onDone={() => setStage('onboarding')} /></PhoneShell>;
  if (stage === 'onboarding') return <PhoneShell><Onboarding onFinish={() => setStage('app')} /></PhoneShell>;

  const screens = {
    home: <HomeScreen />,
    activity: <ActivityScreen />,
    network: <NetworkScreen />,
    profile: <ProfileScreen />
  };

  return (
    <PhoneShell>
      <main className="app-shell">
        <div className="screen-content fade-in" key={active}>{screens[active]}</div>
        <BottomNav active={active} setActive={setActive} />
      </main>
    </PhoneShell>
  );
}

function PhoneShell({ children }) {
  return (
    <div className="desktop-stage">
      <div className="phone-frame">
        <div className="phone-speaker" />
        {children}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);

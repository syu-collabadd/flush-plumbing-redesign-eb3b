import { useState, useRef } from 'react'
import {
  Phone,
  MessageSquare,
  Wrench,
  Flame,
  Droplets,
  ShowerHead,
  AlertTriangle,
  Search,
  CheckCircle,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Upload,
  Shield,
  Zap,
  Clock,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react'

const PHONE = '(978) 228-9714'
const PHONE_TEL = 'tel:+19782289714'
const SMS_LINK = 'sms:+19782289714?body=Hi%2C%20I%20need%20help%20with...'

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav
      style={{ backgroundColor: '#0B1E3F' }}
      className="sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span
            className="font-extrabold text-white text-base tracking-tight"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            Flush Plumbing & Heating
          </span>
          <span style={{ color: '#FFB800' }} className="text-xs font-medium">
            MA Licensed Master Plumber · Lic #A12345
          </span>
        </div>
        <a
          href={PHONE_TEL}
          className="btn-yellow text-sm px-4 py-2"
          style={{ padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}
        >
          <Phone size={15} />
          {PHONE}
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0B1E3F 0%, #1C2533 60%, #111827 100%)',
        minHeight: '90vh',
      }}
      className="flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden"
    >
      {/* decorative accent */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: '#FFB800' }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: '#FFB800' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{ backgroundColor: 'rgba(255,184,0,0.15)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.3)' }}
        >
          <div className="flex">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={13} fill="#FFB800" color="#FFB800" />
            ))}
          </div>
          5.0 · 64 Google Reviews
        </div>

        <h1
          className="text-white mb-5 leading-tight"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 900,
          }}
        >
          Lowell's Plumber{' '}
          <span style={{ color: '#FFB800' }}>You Can Trust</span>
        </h1>

        <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl mx-auto">
          Residential & commercial plumbing and heating — with true{' '}
          <strong className="text-white">24/7 emergency response</strong>.
          Fast, fair, and fully licensed in Massachusetts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a href={PHONE_TEL} className="btn-yellow">
            <Phone size={18} />
            Call {PHONE}
          </a>
          <a href={SMS_LINK} className="btn-outline">
            <MessageSquare size={18} />
            Text Us Now
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
          <span className="flex items-center gap-1"><CheckCircle size={14} style={{ color: '#FFB800' }} /> MA Licensed Master Plumber · Lic #A12345</span>
          <span className="flex items-center gap-1"><CheckCircle size={14} style={{ color: '#FFB800' }} /> Fully Insured</span>
          <span className="flex items-center gap-1"><CheckCircle size={14} style={{ color: '#FFB800' }} /> Serving Greater Lowell since 2010</span>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-white" />
        <span className="text-white text-xs">Scroll</span>
      </div>
    </section>
  )
}

// ─── Services ────────────────────────────────────────────────────────────────
const services = [
  {
    Icon: AlertTriangle,
    title: 'Emergency Plumbing',
    desc: 'Burst pipes, severe leaks, backups — we respond around the clock, 365 days a year.',
  },
  {
    Icon: Droplets,
    title: 'Drain Cleaning',
    desc: 'Hydro-jetting and snake service for kitchen, bath, and main sewer lines.',
  },
  {
    Icon: Flame,
    title: 'Water Heater Service',
    desc: 'Tank and tankless installation, repair, and maintenance for all major brands.',
  },
  {
    Icon: Wrench,
    title: 'Heating Systems',
    desc: 'Boiler installs, forced-hot-water repair, and annual tune-ups to keep you warm.',
  },
  {
    Icon: ShowerHead,
    title: 'Bathroom & Kitchen',
    desc: 'Full fixture swaps, remodel rough-ins, and finish plumbing done on schedule.',
  },
  {
    Icon: Search,
    title: 'Leak Detection & Repair',
    desc: 'Non-invasive leak detection with electronic equipment — find it fast, fix it right.',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 px-4" style={{ backgroundColor: '#F8F4ED' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#FFB800' }}
          >
            What We Do
          </p>
          <h2 className="section-title">Plumbing & Heating Services</h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            From routine maintenance to middle-of-the-night emergencies — one call gets it handled.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'rgba(11,30,63,0.08)' }}
              >
                <Icon size={24} style={{ color: '#0B1E3F' }} />
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: '#0B1E3F', fontFamily: "'Inter Tight', Inter, sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <a
                href="#quote"
                className="text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ color: '#FFB800' }}
              >
                Get a quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Maintenance Plans ────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Basic',
    price: '$199',
    period: '/yr',
    tagline: 'Peace of mind essentials',
    features: [
      'Annual plumbing & heating safety inspection',
      '1 free service call (labor only)',
      'Written inspection report',
      'Priority scheduling',
    ],
    highlight: false,
  },
  {
    name: 'Plus',
    price: '$499',
    period: '/yr',
    tagline: 'Most popular choice',
    features: [
      'Everything in Basic',
      '24/7 priority phone line',
      '10% off all repairs & parts',
      'Water heater flush included',
      'Free filter/aerator replacements',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '$999',
    period: '/yr',
    tagline: 'Total home protection',
    features: [
      'Everything in Plus',
      'Quarterly system inspections',
      'Drain camera inspection',
      '15% off all repairs & parts',
      'Same-day emergency priority',
      'Annual water quality test',
    ],
    highlight: false,
  },
]

function MaintenancePlans() {
  return (
    <section
      id="plans"
      className="py-20 px-4"
      style={{ backgroundColor: '#0B1E3F' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-2"
            style={{ color: '#FFB800' }}
          >
            Maintenance Plans
          </p>
          <h2
            className="text-white mb-3"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 800,
            }}
          >
            Save thousands when something breaks
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Members get priority response, discounts, and annual check-ups that catch small problems before they cost big money.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map(({ name, price, period, tagline, features, highlight }) => (
            <div
              key={name}
              className="rounded-xl p-7 relative"
              style={{
                backgroundColor: highlight ? '#FFB800' : 'rgba(255,255,255,0.06)',
                boxShadow: highlight ? '0 0 0 2px #FFB800' : 'none',
                color: highlight ? '#0B1E3F' : 'white',
              }}
            >
              {highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                  style={{ backgroundColor: '#0B1E3F', color: '#FFB800' }}
                >
                  Most Popular
                </div>
              )}
              <p className={`text-sm font-semibold mb-1 ${highlight ? 'text-amber-800' : 'text-gray-400'}`}>
                {tagline}
              </p>
              <h3
                className="text-2xl font-extrabold mb-1"
                style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
              >
                {name}
              </h3>
              <div className="flex items-end gap-1 mb-6">
                <span
                  className="font-extrabold"
                  style={{ fontSize: '2.8rem', lineHeight: 1, fontFamily: "'Inter Tight', Inter, sans-serif" }}
                >
                  {price}
                </span>
                <span className={`text-lg mb-1 ${highlight ? 'text-amber-800' : 'text-gray-400'}`}>{period}</span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      size={16}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: highlight ? '#0B1E3F' : '#FFB800' }}
                    />
                    <span className={highlight ? 'text-amber-900' : 'text-gray-200'}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={`block text-center font-bold py-3 rounded-lg transition-all ${
                  highlight
                    ? 'bg-[#0B1E3F] text-[#FFB800] hover:bg-[#122656]'
                    : 'bg-[#FFB800] text-[#0B1E3F] hover:bg-[#e6a600]'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Emergency Band ───────────────────────────────────────────────────────────
function EmergencyBand() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #B91C1C 0%, #EA580C 100%)',
      }}
      className="py-14 px-4 text-center text-white"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
            <Clock size={24} className="text-white" />
          </div>
        </div>
        <h2
          className="mb-2"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 800,
          }}
        >
          Need help right now? We answer 24/7.
        </h2>
        <p className="text-red-100 mb-6 text-base">
          Burst pipe, no heat, flooded basement — don't wait until morning.
        </p>
        <a
          href={PHONE_TEL}
          className="inline-flex items-center gap-3 font-extrabold text-white no-underline hover:scale-105 transition-transform"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.75rem)',
            fontFamily: "'Inter Tight', Inter, sans-serif",
            textDecoration: 'none',
          }}
        >
          <Phone size={36} />
          {PHONE}
        </a>
        <p className="text-red-200 text-sm mt-4 flex items-center justify-center gap-2">
          <Zap size={14} />
          AI assistant available 24/7 — captures your details, texts owner immediately
        </p>
      </div>
    </section>
  )
}

// ─── Financing ────────────────────────────────────────────────────────────────
function Financing() {
  return (
    <section
      className="py-10 px-4 text-center"
      style={{ backgroundColor: '#122656' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
        <BadgeCheck size={30} style={{ color: '#FFB800', flexShrink: 0 }} />
        <div>
          <span
            className="font-extrabold text-xl"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            0% financing available
          </span>
          <span className="text-gray-300 mx-3">·</span>
          <span className="text-gray-200">Approved in minutes — no hard credit pull to pre-qualify</span>
        </div>
        <a
          href="#quote"
          className="btn-yellow"
          style={{ padding: '0.6rem 1.4rem', fontSize: '0.9rem', flexShrink: 0 }}
        >
          Apply Now
        </a>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: '#F8F4ED' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* photo placeholder */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-extrabold text-white shadow-xl"
            style={{
              backgroundColor: '#0B1E3F',
              fontFamily: "'Inter Tight', Inter, sans-serif",
            }}
          >
            JK
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold text-xl" style={{ color: '#0B1E3F' }}>Jason K.</p>
            <p className="text-gray-500 text-sm">Owner & MA Licensed Master Plumber</p>
            <div className="flex mt-2 gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-1">5.0 · 64 Google Reviews</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['MA Master License', 'Fully Insured', 'Background Checked', '15+ Yrs Experience'].map(badge => (
              <span
                key={badge}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: 'rgba(11,30,63,0.08)', color: '#0B1E3F' }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* copy */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>
            Our Story
          </p>
          <h2 className="section-title mb-6">Built on Showing Up</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Flush Plumbing & Heating LLC started with a simple belief: homeowners deserve a plumber who actually picks up the phone and shows up on time. After years working for larger contractors in the Merrimack Valley, our owner went out on his own to prove that small and local can still mean professional and thorough.
            </p>
            <p>
              Today we serve Lowell and the surrounding communities with the same hands-on approach. Every job — from a dripping faucet to a full heating system replacement — gets our personal attention. We don't send rookies to figure it out on your property.
            </p>
            <p>
              Our 5-star track record on Google reflects what we've always focused on: clear pricing upfront, clean job sites, and work that lasts. When something isn't right, we make it right — no arguments, no invoice padding.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a href={PHONE_TEL} className="btn-yellow">
              <Phone size={16} />
              Call Now
            </a>
            <a href={SMS_LINK} className="btn-outline">
              <MessageSquare size={16} />
              Text Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
const reviews = [
  {
    name: 'Homeowner in Lowell',
    initial: 'MR',
    text: 'Called at 10 PM for a burst pipe under the kitchen sink. Jason was there within 45 minutes, fixed it cleanly, and charged exactly what he quoted on the phone. Will absolutely call again.',
    date: '2 weeks ago',
  },
  {
    name: 'Resident in Chelmsford',
    initial: 'SP',
    text: 'Had them replace our old water heater. They came out the same day, had the unit on the truck, and were done in about two hours. Neat, fast, and no surprise charges at the end.',
    date: '1 month ago',
  },
  {
    name: 'Homeowner in Tewksbury',
    initial: 'DL',
    text: 'Signed up for the Plus maintenance plan and already feel way better knowing someone is checking the boiler before winter hits. Inspector was thorough and explained everything clearly.',
    date: '6 weeks ago',
  },
  {
    name: 'Property Manager in Dracut',
    initial: 'KW',
    text: 'Manage a few rentals and Flush Plumbing is now my first call for anything. Reliable, professional, and tenants have been happy every time. Hard to find that combination.',
    date: '2 months ago',
  },
  {
    name: 'Homeowner in Billerica',
    initial: 'TM',
    text: 'Slow drain in the basement was backing up whenever we ran the laundry. They found a root intrusion in the main line and cleared it out completely. Great communication throughout.',
    date: '3 months ago',
  },
]

function Reviews() {
  const [current, setCurrent] = useState(0)
  const touchStart = useRef<number | null>(null)

  const prev = () => setCurrent(c => (c === 0 ? reviews.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === reviews.length - 1 ? 0 : c + 1))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStart.current = null
  }

  const r = reviews[current]

  return (
    <section id="reviews" className="py-20 px-4" style={{ backgroundColor: '#0B1E3F' }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>
          What Customers Say
        </p>
        <h2
          className="text-white mb-10"
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
            fontFamily: "'Inter Tight', Inter, sans-serif",
            fontWeight: 800,
          }}
        >
          5 Stars on Google · 64 Reviews
        </h2>

        <div
          className="relative bg-white/5 rounded-2xl p-8 select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex justify-center mb-4">
            {[1,2,3,4,5].map(i => (
              <Star key={i} size={20} fill="#FFB800" color="#FFB800" />
            ))}
          </div>

          <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
            "{r.text}"
          </p>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: '#FFB800', color: '#0B1E3F' }}
            >
              {r.initial}
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">{r.name}</p>
              <p className="text-gray-500 text-xs">{r.date}</p>
            </div>
          </div>

          {/* nav buttons */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2 h-2 rounded-full transition-all"
              style={{ backgroundColor: i === current ? '#FFB800' : 'rgba(255,255,255,0.2)' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Service Area ─────────────────────────────────────────────────────────────
const towns = [
  'Lowell', 'Chelmsford', 'Tewksbury', 'Billerica', 'Dracut',
  'Westford', 'Dunstable', 'Groton', 'Pepperell', 'Nashua NH',
]

function ServiceArea() {
  return (
    <section id="area" className="py-16 px-4" style={{ backgroundColor: '#F8F4ED' }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>
            Service Area
          </p>
          <h2 className="section-title mb-4">Greater Lowell & Beyond</h2>
          <p className="text-gray-500 mb-6">
            We're based in Lowell and serve communities throughout the Merrimack Valley.
            Call to confirm availability for your address.
          </p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            {towns.map(town => (
              <li key={town} className="flex items-center gap-2 text-gray-700 text-sm font-medium">
                <MapPin size={14} style={{ color: '#FFB800', flexShrink: 0 }} />
                {town}
              </li>
            ))}
          </ul>
        </div>

        {/* map placeholder */}
        <div
          className="rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: '#0B1E3F',
            minHeight: '280px',
          }}
        >
          <div className="text-center text-white opacity-60 p-8">
            <MapPin size={40} className="mx-auto mb-3 opacity-50" />
            <p className="text-sm font-medium">Map placeholder</p>
            <p className="text-xs text-gray-400 mt-1">Embed Google Maps here</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Quote Form ───────────────────────────────────────────────────────────────
function QuoteForm() {
  const [replyPref, setReplyPref] = useState<'text' | 'call'>('text')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="quote"
      className="py-20 px-4"
      style={{ backgroundColor: '#122656' }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: '#FFB800' }}>
            Free Estimates
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
              fontFamily: "'Inter Tight', Inter, sans-serif",
              fontWeight: 800,
            }}
          >
            Get a Quote
          </h2>
          <p className="text-gray-400 mt-2">
            Fill this out and we'll get back to you within one business hour during working hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-900/30 border border-green-600 rounded-xl p-8 text-center">
            <CheckCircle size={40} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-white font-bold text-xl mb-2">Request Received!</h3>
            <p className="text-gray-300">We'll reach out shortly via your preferred method. For emergencies, call {PHONE} now.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-1.5">Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  className="w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                className="w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">Service Address *</label>
              <input
                type="text"
                required
                placeholder="123 Main St, Lowell, MA"
                className="w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">Describe the Problem *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us what's going on — the more detail the better..."
                className="w-full rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 resize-none"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-1.5">
                Upload a Photo (optional)
              </label>
              <label
                className="flex items-center justify-center gap-2 rounded-lg px-4 py-5 cursor-pointer hover:bg-white/10 transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.2)' }}
              >
                <Upload size={18} className="text-gray-400" />
                <span className="text-gray-400 text-sm">Click to add a photo of the issue</span>
                <input type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Preferred Reply Method *</label>
              <div className="flex gap-4">
                {(['text', 'call'] as const).map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="reply"
                      value={opt}
                      checked={replyPref === opt}
                      onChange={() => setReplyPref(opt)}
                      className="accent-yellow-400"
                    />
                    <span className="text-gray-300 text-sm capitalize">{opt === 'text' ? 'Text me' : 'Call me'}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full font-bold py-4 rounded-lg text-lg transition-all hover:bg-amber-500 hover:scale-[1.01]"
              style={{ backgroundColor: '#FFB800', color: '#0B1E3F', fontFamily: "'Inter Tight', Inter, sans-serif" }}
            >
              Send My Quote Request →
            </button>

            <p className="text-gray-500 text-xs text-center">
              For same-day emergencies, skip the form and call {PHONE} directly.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#0B1E3F' }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* NAP */}
        <div>
          <h4
            className="font-extrabold text-white text-lg mb-4"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
          >
            Flush Plumbing & Heating LLC
          </h4>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={14} style={{ color: '#FFB800' }} />
              Lowell, MA
            </p>
            <p className="flex items-center gap-2">
              <Phone size={14} style={{ color: '#FFB800' }} />
              <a href={PHONE_TEL} className="hover:text-white transition-colors">{PHONE}</a>
            </p>
            <p className="flex items-center gap-2">
              <MessageSquare size={14} style={{ color: '#FFB800' }} />
              <a href={SMS_LINK} className="hover:text-white transition-colors">Text Us</a>
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Maintenance Plans', href: '#plans' },
              { label: 'About Us', href: '#about' },
              { label: 'Service Area', href: '#area' },
              { label: 'Get a Quote', href: '#quote' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* License + social */}
        <div>
          <h4 className="font-bold text-white mb-4">Credentials</h4>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <Shield size={14} style={{ color: '#FFB800' }} />
              MA Licensed Master Plumber
            </p>
            <p className="text-gray-500 pl-5">License #A12345</p>
            <p className="flex items-center gap-2 mt-3">
              <CheckCircle size={14} style={{ color: '#FFB800' }} />
              Fully Insured · Background Checked
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/flushplumbing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-600 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <p>© {new Date().getFullYear()} Flush Plumbing & Heating LLC. All rights reserved.</p>
        <p>Research prototype — not the live site</p>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <MaintenancePlans />
        <EmergencyBand />
        <Financing />
        <About />
        <Reviews />
        <ServiceArea />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'

// ── Replace these placeholders before launch ──────────────────────────────
const BOOKING_LINK    = 'https://calendar.app.google/zy6ti1xLbVxLeiPv6'
const LINKEDIN_URL    = 'https://www.linkedin.com/in/domingos-komando/'
const CV_PDF          = '/Stephen_Komando_CV.pdf'
const CASE_STUDY_PDF  = '/fauesp-case-study.pdf'
const FAUESP_IMG      = '/fauesp-screenshot.jpg'     // drop into /public/
const PHOTO_SRC       = '/photo.jpg'                 // drop into /public/
const TESTIMONIAL_URL = ''                            // YouTube/Vimeo embed URL when ready
// ─────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatStrip />
        <About />
        <SelectedWork />
        <Capabilities />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

/* ─── Hero ───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="section hero" id="hero">
      <div className="container hero-inner">

        <div className="hero-text">
          <h1 className="hero-name">Stephen<br />Komando</h1>
          <div className="hero-rule" />
          <p className="hero-job-title">Technical Growth Marketing Specialist</p>
          <p className="hero-tagline">
            I turn ad spend into measurable customer acquisition — building the ads, the funnel,
            the site, and the tracking that proves it worked.
          </p>
          <p className="hero-meta">
            São Paulo, Brazil · Open to remote worldwide · Strong US time-zone overlap
          </p>
          <div className="hero-ctas">
            <a href={BOOKING_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
            <a href="mailto:domingosstephen@gmail.com" className="btn btn-secondary">
              Email me
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTO_SRC}
            alt="Stephen Komando — Technical Growth Marketing Specialist"
            className="hero-photo"
            width={200}
            height={200}
            onError={(e) => {
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              const ph = document.getElementById('hero-photo-ph')
              if (ph) ph.style.display = 'flex'
            }}
          />
          <div id="hero-photo-ph" className="hero-photo-placeholder" style={{ display: 'none' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Add photo.jpg to /public/</span>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ─── Stat strip ─────────────────────────────────────────────────────────── */
function StatStrip() {
  const stats = [
    { number: 'sub-R$1', label: 'Cost per lead achieved (FAUESP)' },
    { number: '12–25%', label: 'Free-to-paid conversion (Gymera funnel)' },
    { number: '4+ years', label: 'Brazil & US clients' },
    { number: 'Native', label: 'English speaker, trilingual' },
  ]

  return (
    <section className="section section--alt" aria-label="Key numbers">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.number} className="stat-card">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About ──────────────────────────────────────────────────────────────── */
function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <span className="kicker">About</span>
        <div className="about-body">
          <p>
            I build the entire customer-acquisition engine — the ads, the funnel, the website, and
            the tracking that proves it worked. Most marketers do one of those; I do all four, which
            is why my campaigns are measurable end to end instead of depending on three other vendors.
          </p>
          <p>
            For 4+ years I&apos;ve helped businesses in Brazil and the United States acquire customers
            profitably across Google Ads, Meta, TikTok, and marketplaces. I&apos;m a native English
            speaker working from a Latin American time zone, with a direct-response background and the
            technical range to build, track, and optimize without hand-offs.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── FAUESP image carousel ─────────────────────────────────────────────── */
const FAUESP_IMAGES = Array.from({ length: 10 }, (_, i) => `/fauesp/${String(i + 1).padStart(2, '0')}.jpg`)

function FauesCarousel() {
  const [idx, setIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const total = FAUESP_IMAGES.length
  const prev = (e?: React.MouseEvent) => { e?.stopPropagation(); setIdx((i) => (i - 1 + total) % total) }
  const next = (e?: React.MouseEvent) => { e?.stopPropagation(); setIdx((i) => (i + 1) % total) }

  // Close lightbox on Escape key
  useEffect(() => {
    if (!lightbox) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(false) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={idx}
            src={FAUESP_IMAGES[idx]}
            alt={`FAUESP campaign result ${idx + 1} of ${total}`}
            className="carousel-img"
            onClick={() => setLightbox(true)}
            title="Click to view full size"
          />
          <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous image">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next image">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <div className="carousel-expand-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            Click to expand
          </div>
        </div>
        <div className="carousel-dots">
          {FAUESP_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === idx ? ' carousel-dot--active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
        <p className="carousel-counter">{idx + 1} / {total}</p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)} role="dialog" aria-modal="true" aria-label="Full size image">
          <button className="lightbox-close" onClick={() => setLightbox(false)} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button className="lightbox-nav lightbox-nav--prev" onClick={prev} aria-label="Previous image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={FAUESP_IMAGES[idx]}
            alt={`FAUESP campaign result ${idx + 1} of ${total}`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox-nav lightbox-nav--next" onClick={next} aria-label="Next image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <p className="lightbox-counter">{idx + 1} / {total}</p>
        </div>
      )}
    </>
  )
}

/* ─── Selected Work ──────────────────────────────────────────────────────── */
function SelectedWork() {
  return (
    <section className="section section--alt work-section" id="work">
      <div className="container">
        <span className="kicker">Selected Work</span>
        <h2 className="section-title">Campaigns built end to end.</h2>

        {/* FAUESP feature card */}
        <div className="work-feature-card">
          <div className="work-feature-inner">
            <div className="work-feature-text">
              <div className="work-tag">Education · Lead Generation · Meta Ads</div>
              <h3 className="work-card-title">FAUESP — Sub-R$1 cost per lead</h3>
              <p>
                An education &amp; certification provider for police and military personnel was
                advertising blind — no tracking, and a dormant list of 10,000+ past contacts. I built
                conversion tracking from scratch, reactivated the list into lookalike audiences, ran
                systematic creative testing, and fed payment data back to Meta to optimize for actual
                payers.
              </p>
              <p className="work-result">
                <strong>Result:</strong> A consistent sub-R$1 cost per lead across multiple ad
                accounts — 221 leads at R$0.81, with top ads at R$0.10–R$0.35.
              </p>
              <a href={CASE_STUDY_PDF} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                View full case study →
              </a>
            </div>

            <FauesCarousel />
          </div>
        </div>

        {/* Work grid */}
        <div className="work-grid">

          <div className="work-card">
            <div className="work-tag">US E-commerce · Activewear · Funnel</div>
            <h3 className="work-card-title">Gymera Active — A funnel from zero</h3>
            <p>
              A US women&apos;s activewear brand whose founder hadn&apos;t settled the company&apos;s
              direction. I designed and built the full funnel — a free 7-day challenge → community →
              back-end product — and set an organic-led content strategy. Across 3 campaigns, ~800
              participants entered and roughly 12–25% converted into paying customers on blended
              paid/organic traffic.
            </p>
            <div className="video-container">
              {TESTIMONIAL_URL ? (
                <iframe
                  className="video-iframe"
                  src={TESTIMONIAL_URL}
                  title="Gymera founder testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
                  </svg>
                  <span>Founder testimonial — video coming soon</span>
                </div>
              )}
            </div>
          </div>

          <div className="work-card">
            <div className="work-tag">Education · Targeting · ~R$15k/mo</div>
            <h3 className="work-card-title">Zumbi dos Palmares — Halved cost per enrolled student</h3>
            <p>
              They believed they had a lead problem; I diagnosed a targeting and conversion problem.
              I re-cut geographic targeting to the catchment that actually enrolled, unified their
              creative, marketing, and sales teams onto one message, and roughly halved cost per
              enrolled student over ~6 months on a ~R$15k/month operation.
            </p>
          </div>

          <div className="work-card">
            <div className="work-tag">Education · Funnel Engineering · CRO</div>
            <h3 className="work-card-title">Unibella — A self-qualifying free-to-paid funnel</h3>
            <p>
              I engineered a front-end free course into a paid back-end, redesigning the enrollment
              form into a qualification and pre-sell mechanism so leads arrived pre-sold. Result:
              sub-R$1 lead costs and roughly a 30% lift in free-to-paid conversion.
            </p>
          </div>

          <div className="work-card">
            <div className="work-tag">SaaS · WhatsApp Business API · Market Entry</div>
            <h3 className="work-card-title">Interakt — Brazil market entry</h3>
            <p>
              I led the Brazil market entry for Interakt, an official Meta Business Partner and
              WhatsApp Business API platform, owning the full funnel from positioning and creative
              through Meta ads and optimization.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Capabilities ───────────────────────────────────────────────────────── */
function Capabilities() {
  const caps = [
    {
      title: 'Paid Media',
      items: ['Google Ads', 'Meta Ads', 'TikTok Ads', 'Amazon Ads', 'Mercado Livre', 'Shopee'],
    },
    {
      title: 'Measurement & Tracking',
      items: ['GA4', 'Google Tag Manager', 'Meta Pixel', 'Conversion API', 'Search Console', 'Microsoft Clarity'],
    },
    {
      title: 'Growth & CRO',
      items: ['Funnel design', 'Offer creation', 'Lead generation', 'E-commerce conversion', 'Landing pages'],
    },
    {
      title: 'Build',
      items: ['WordPress / Elementor', 'Shopify / WooCommerce', 'Next.js', 'Vercel', 'HTML / CSS', 'DNS & domains'],
    },
  ]

  return (
    <section className="section caps-section" id="capabilities">
      <div className="container">
        <span className="kicker">Capabilities</span>
        <h2 className="section-title">The full stack of growth</h2>
        <div className="caps-grid">
          {caps.map((c) => (
            <div key={c.title} className="caps-card">
              <h3 className="caps-title">{c.title}</h3>
              <ul className="caps-list">
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Languages & Credentials ────────────────────────────────────────────── */
function Languages() {
  return (
    <section className="langs-section" aria-label="Languages and credentials">
      <div className="container">
        <div className="langs-inner">
          <div className="langs-group">
            <span className="langs-label">Languages</span>
            <div className="langs-list">
              <span>English <em>(Native)</em></span>
              <span className="langs-dot">·</span>
              <span>Portuguese <em>(C1)</em></span>
              <span className="langs-dot">·</span>
              <span>French <em>(B1)</em></span>
            </div>
          </div>
          <div className="langs-divider" aria-hidden="true" />
          <div className="langs-group">
            <span className="langs-label">Credentials</span>
            <div className="langs-list">
              <span>PSM1 — Professional Scrum Master I</span>
              <span className="langs-dot">·</span>
              <span>Google Ads certifications <em>(in progress)</em></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ────────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section className="section section--alt contact-section" id="contact">
      <div className="container">
        <span className="kicker">Let&apos;s Talk</span>
        <h2 className="section-title contact-headline">
          Looking to bring this in-house for one company.
        </h2>
        <p className="contact-sub">
          I&apos;m actively looking for a full-time remote role where I can own the growth function
          end to end.
        </p>
        <div className="contact-ctas">
          <a href={BOOKING_LINK} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Book a call
          </a>
          <a href="mailto:domingosstephen@gmail.com" className="btn btn-secondary">
            Email
          </a>
          <a href="https://wa.me/5511946827777" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={LINKEDIN_URL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={CV_PDF} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">
          Stephen Komando · Technical Growth Marketing Specialist · São Paulo, Brazil · © 2026
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

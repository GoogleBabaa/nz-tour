"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  ChevronLeft,
  ChevronRight,
  Compass,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Search,
  Star,
  X,
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const heroImages = ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"];
const contactEmail = "nz_travel@hotmail.com";

function openMailComposer(subject: string, lines: string[]) {
  const body = lines.join("\n");
  const gmailQuery = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: contactEmail,
    su: subject,
    body,
  });
  const composer = window.open(`https://mail.google.com/mail/?${gmailQuery.toString()}`, "_blank");

  if (composer) {
    composer.opener = null;
    window.alert("Email draft opened in Gmail. Please press Send to complete your message.");
    return;
  }

  const mailQuery = new URLSearchParams({ subject, body });
  window.location.href = `mailto:${contactEmail}?${mailQuery.toString()}`;
}

const testimonials = [
  { name: "Glenn Mcdaniel", from: "Tourist From Spain", image: "/images/testimonial-1.png", stars: 5 },
  { name: "Raisa Barker", from: "Tourist From Thailand", image: "/images/testimonial-2.jpg", stars: 4 },
  { name: "Asad Xiong", from: "Tourist From China", image: "/images/testimonial-3.png", stars: 4 },
  { name: "Terrence Baker", from: "Tourist From France", image: "/images/testimonial-4.png", stars: 5 },
];

export function Header({ active = "home" }: { active?: "home" | "services" | "group" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header>
      <div className="topbar">
        <div className="shell topbar-inner">
          <a href="tel:04235871222"><Phone size={14} />042-35871222</a>
          <span><MapPin size={14} />M-55 Siddiq Trade Center Main Boulevared Gulberg ll Lahore</span>
        </div>
      </div>
      <div className="nav-wrap">
        <div className="shell navbar">
          <Link className="brand" href="/" aria-label="NZ Travel and Tours home">
            <Image src="/images/logo.png" alt="NZ Travel and Tours" width={651} height={383} priority />
          </Link>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
            <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
            <Link className={active === "home" ? "active" : ""} href="/">Home</Link>
            <a className={active === "services" ? "active" : ""} href="/services">NZ Travel &amp; Tours</a>
            <a className={active === "group" ? "active" : ""} href="/nz-group">NZ Overseas Employment</a>
          </nav>
          <div className="nav-actions">
            <button onClick={() => setSearchOpen((value) => !value)} aria-label="Search"><Search /></button>
            <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <div className="shell"><Search size={18} /><input autoFocus type="search" placeholder="Search..." /></div>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % heroImages.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {heroImages.map((image, index) => (
        <div key={image} className={index === active ? "hero-image active" : "hero-image"} style={{ backgroundImage: `url(${image})` }} />
      ))}
      <div className="hero-overlay" />
      <div className="shell hero-content">
        <h1>Journey to Your Dream<br />Destination</h1>
        <p>The phrase conveys a sense of adventure and discovery, encouraging travelers to step out of their comfort zones and embrace.</p>
        <a className="button button-primary" href="/services">Discover Now <ArrowRight size={17} /></a>
      </div>
      <div className="hero-dots" aria-label="Hero slides">
        {heroImages.map((_, index) => <button key={index} className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Show slide ${index + 1}`} />)}
      </div>
    </section>
  );
}

function ServiceStrip() {
  const items = [
    { icon: Compass, title: "Private Guide", text: "Expert-led tours tailored to your interests and preferences, ensuring personalized exploration." },
    { icon: BadgeDollarSign, title: "Affordable Price", text: "Great value without compromising quality, making luxury accessible for everyone." },
    { icon: Headphones, title: "Great Support", text: "Responsive assistance ensuring seamless experiences and satisfaction throughout your journey." },
  ];

  return <section className="service-strip"><div className="shell service-grid">{items.map(({ icon: Icon, title, text }) => <article key={title}><Icon className="service-watermark" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>;
}

function About() {
  return (
    <section className="section about-section">
      <div className="shell split about-grid">
        <div className="photo-frame"><Image src="/images/about.jpg" alt="Beautiful travel destination" fill sizes="(max-width: 800px) 100vw, 48vw" /></div>
        <div className="section-copy">
          <h2>About US</h2>
          <p>NZ Travel &amp; Tour started functioning since 2014 in Travel Trade and registered with the Security &amp; Exchange Commission of Pakistan (SECP) having DTS License No. 10131. NZ Travel &amp; Tours includes many companies attached with Tourism respectively &amp; daily approximately 150 visas are stamped through Drop Boxes.</p>
          <p>NZ Travel &amp; Tours also have IRAN VISA DROP BOX, Authorized Drop Box following:</p>
          <ul className="check-list"><li>Iran Consulate, Lahore</li><li>Vietnam Embassy Islamabad</li></ul>
          <p>We are top agent of Emirates &amp; Gulf Air; also Saudi Airline ranks us in their Agents, providing Tourism &amp; Ticketing services worldwide.</p>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="section principles">
      <div className="shell principle-grid">
        <div className="principle-copy">
          <article><h3>Mission</h3><p>Our mission is to provide ultimate superior quality services to seek long term returns &amp; to build a family of committed clients. We are committed to maintain customer satisfaction.</p></article>
          <article><h3>Vision</h3><p>We are top agent of Emirates &amp; Gulf Air; also Saudi Airline ranks us in their Agents, providing Tourism &amp; Ticketing services worldwide.</p></article>
          <article><h3>Values</h3><ul><li>Customer Commitment</li><li>Quality Services</li><li>Integrity</li><li>Team Work</li><li>A Strong will to Win</li><li>Innovation &amp; Creativity</li></ul></article>
        </div>
        <div className="principle-photo"><Image src="/images/destination.jpg" alt="Prime island destination" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
      </div>
    </section>
  );
}

function Founder() {
  return (
    <section className="section founder-section">
      <div className="shell split founder-grid">
        <div className="section-copy">
          <h2>Founder Message</h2>
          <p>Muhammad Naeem Akhtar (Late) of NZ Group of companies former of the company NZ Travel &amp; Tours, always kept a sight of building relationship and valuing his customers. He laid the foundation of NZ Group of Companies. “Establishing close relationships &amp; facilitating with the best to our clients &amp; partners is our initiative behind inception Of the NZ Group of Companies.”</p>
          <p>We raise each client relationship from the embryonic concept to completion, often maintaining this contact years after a service is finished. We believe a crowned consulting is achieved through a balance of significant experience, a working knowledge of today&apos;s best practices, and access to advance technology.</p>
          <p>We have been constantly examining the market to find new &amp; advance services, and try to be innovative by going after new ideas which are emerging in the international market, so that we can serve people with the auspicious quality services. We are proud of business and long-lasting client relationships.</p>
        </div>
        <div className="portrait founder"><Image src="/images/founder.png" alt="Muhammad Naeem Akhtar" fill sizes="(max-width: 800px) 80vw, 380px" /></div>
      </div>
    </section>
  );
}

function DestinationBanner() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setVideoOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [videoOpen]);

  return (
    <section className="destination-banner">
      <Image src="/images/destination.jpg" alt="Prime island destination" fill sizes="100vw" />
      <div className="destination-overlay" />
      <div className="shell destination-layout"><div className="destination-content"><h2>Embark on Adventures in Our Prime Destinations</h2><p>Begin thrilling journeys in top-notch locations, creating unforgettable experiences and memories.</p><a className="button button-outline" href="/services">Read More</a></div><button className="play-button" type="button" onClick={() => setVideoOpen(true)} aria-label="Play destination video"><Play fill="currentColor" /></button></div>
      {videoOpen && <div className="site-video-backdrop" role="presentation" onMouseDown={() => setVideoOpen(false)}><div className="site-video-dialog" role="dialog" aria-modal="true" aria-label="NZ Travel and Tours video" onMouseDown={(event) => event.stopPropagation()}><button className="site-video-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Close video"><X /></button><video src="/videos/nz-video.mp4" controls autoPlay playsInline preload="metadata" /></div></div>}
    </section>
  );
}

function Leadership() {
  return (
    <section className="section leadership">
      <div className="shell leadership-grid">
        <article className="leader-row ceo-row">
          <div className="leader-photo"><Image src="/images/director.png" alt="Muhammad Tariq Naeem" fill sizes="(max-width: 800px) 80vw, 360px" /></div>
          <div className="leader-copy"><h3>CEO Message</h3><h2>Muhammad Tariq Naeem</h2><p>We are here to build a great company. A company that has achieved the highest levels of customer satisfaction &amp; strong stability. A great place to work, a provider of exceptionally high quality service, a company that carries itself in the market place with the highest levels of business integrity and business ethics, a company composed of dedicated, accomplished professionals, committed to customer.</p><p>Chief Executive of NZ Group of Companies M. Tariq Naeem is the one with great efforts for NZ Travel &amp; Tour since 2014 its incorporation. He always strives to provide his customers with satisfaction in services. NZ Group of Companies is renowned in the market because of his generosity and affection in behavior.</p></div>
        </article>
        <article className="leader-row director-row">
          <div className="leader-copy"><h3>Director Message</h3><h2>Kalsoom Jafar</h2><p>Our current Executive Director Kalsoom Jafar aims to achieve the highest levels of customer satisfaction and strong stability and build up a company which carries itself in the market place with the highest levels of business integrity and business ethics, a company composed of dedicated, accomplished professionals, committed to customer.</p><p>We are identifying principles in respective area of all related activities and are hoping to bring in new business activities to replace traditional areas. We are always looking for new principles and have been quite successful in our endeavor to identify and establish partnerships around the world.</p></div>
          <div className="leader-photo director-photo"><Image src="/images/contact.png" alt="Kalsoom Jafar" fill sizes="(max-width: 800px) 80vw, 360px" /></div>
        </article>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const next = () => setActive((value) => (value + 1) % testimonials.length);
  const previous = () => setActive((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonials">
      <div className="shell">
        <div className="section-heading centered"><h2>Tourist Testimonials</h2><p>Personal accounts sharing memorable experiences and recommendations from satisfied travelers worldwide.</p></div>
        <div className="testimonial-wrap">
          <button className="slider-button left" onClick={previous} aria-label="Previous testimonial"><ChevronLeft /></button>
          <article className="testimonial-card">
            <Image src={testimonials[active].image} alt={testimonials[active].name} width={150} height={150} />
            <div className="stars">{Array.from({ length: testimonials[active].stars }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div>
            <p className="quote">“The private guides were interesting and knowledgeable. We felt that they were more than just guides.”</p>
            <h3>{testimonials[active].name}</h3><span>{testimonials[active].from}</span>
          </article>
          <button className="slider-button right" onClick={next} aria-label="Next testimonial"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    openMailComposer(String(fields.subject || "New enquiry from NZ Travel & Tours website"), [
      `Name: ${fields.name || ""}`,
      `Email: ${fields.email || ""}`,
      `Phone: ${fields.phone || ""}`,
      "",
      String(fields.message || ""),
    ]);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="shell contact-grid">
        <div className="contact-copy"><h2>Get In Touch</h2><p>Ready to embark on your next adventure? Contact us today to start planning your dream vacation. Our expert team will customize a tour package just for you.</p><div className="contact-list"><a href="tel:04235871222"><Phone />042-35871222</a><a href="tel:+923207660075"><Phone />+92-320-7660075</a><a href="mailto:info@nztraveltours.com"><Mail />info@nztraveltours.com</a><a href="mailto:nz_travel@hotmail.com"><Mail />nz_travel@hotmail.com</a><span><MapPin />M-55 Siddiq Trade Center Main Boulevared Gulberg ll Lahore</span></div></div>
        <form className="contact-form" onSubmit={submit}><div className="form-row"><input name="name" aria-label="Name" placeholder="Name" required /><input name="email" aria-label="Email" placeholder="Email" type="email" required /></div><div className="form-row"><input name="phone" aria-label="Phone" placeholder="Phone" type="tel" /><input name="subject" aria-label="Subject" placeholder="Subject" /></div><textarea name="message" aria-label="Message" placeholder="Message" rows={5} required /><button className="button button-primary" type="submit">Contact Us <Mail size={17} /></button></form>
      </div>
    </section>
  );
}

export function Footer() {
  const submitNewsletter = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget).entries());
    openMailComposer("Newsletter enquiry", [
      "Hi NZ Travel & Tours,",
      "",
      "I would like to receive your travel news and offers.",
      `My email: ${fields.email || ""}`,
    ]);
  };
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand"><Image src="/images/logo.png" alt="NZ Travel and Tours" width={180} height={106} /><p>Explore unforgettable destinations with our tailored tours. Immerse yourself in culture, adventure, and relaxation. Let us plan your dream getaway today!</p><div className="footer-socials"><a className="footer-social footer-facebook" href="https://www.facebook.com/share/1K8YCgynxG/" target="_blank" rel="noopener noreferrer" aria-label="NZ Travel and Tours on Facebook" title="Facebook"><svg viewBox="0 0 512 512" aria-hidden="true"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.7 226.4 209.3 245V327.7h-63V256h63v-54.6c0-62.2 37-96.5 93.7-96.5 27.1 0 55.5 4.8 55.5 4.8v61h-31.3c-30.8 0-40.4 19.1-40.4 38.7V256h68.8l-11 71.7h-57.8V501C413.3 482.4 504 379.8 504 256z" /></svg></a><a className="footer-social footer-whatsapp" href="https://wa.me/923207660075?text=Hi%2C%20I%20want%20to%20contact%20NZ%20Travel%20%26%20Tours." target="_blank" rel="noopener noreferrer" aria-label="Contact NZ Travel and Tours on WhatsApp" title="WhatsApp"><svg viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7A184.2 184.2 0 0 1 39.4 254c0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1a183.4 183.4 0 0 1 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></a></div></div>
        <div><h3>Quick Links</h3><Link href="/">Home</Link><a href="/services">NZ Travel &amp; Tours</a><a href="/nz-group">NZ Overseas Employment</a></div>
        <div><h3>Information</h3><a href="tel:04235871222">042-35871222</a><a href="tel:+923207660075">+92-320-7660075</a><a href="mailto:info@nztraveltours.com">info@nztraveltours.com</a><p>M-55 Siddiq Trade Center Main Boulevared Gulberg ll Lahore</p></div>
        <div><h3>Newsletter</h3><p>Get travel news and offers in your inbox.</p><form className="newsletter" onSubmit={submitNewsletter}><input name="email" type="email" aria-label="Newsletter email" placeholder="Email" required /><button type="submit" aria-label="Contact us by email"><Mail size={17} /> Contact Us</button></form></div>
      </div>
      <div className="copyright"><div className="shell">All Rights Reserved By NZ Travel &amp; Tours and Developed By <a href="https://roaslift.com/" target="_blank" rel="noreferrer">Roaslift</a></div></div>
    </footer>
  );
}

export function WhatsAppButton() {
  return <a className="whatsapp" href="https://wa.me/923207660075?text=Hi%2C%20I%20want%20to%20book%20a%20travel%20or%20visa%20service%20from%20NZ%20Travel%20%26%20Tours." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="WhatsApp"><svg viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7A184.2 184.2 0 0 1 39.4 254c0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1a183.4 183.4 0 0 1 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg></a>;
}

export default function HomePage() {
  return <><Header /><main><Hero /><ServiceStrip /><About /><Principles /><Founder /><DestinationBanner /><Leadership /><Testimonials /><Contact /></main><Footer /><WhatsAppButton /></>;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { Footer, Header } from "./HomePage";

type ServiceItem = {
  title: string;
  description: string;
  image: string;
  rating: string;
};

const dropBoxVisas: ServiceItem[] = [
  { title: "Iran", description: "Ancient Persia, rich culture, political complexity, oil.", image: "/images/services/iran-evisa.jpg", rating: "4.5" },
  { title: "Vietnam", description: "Vietnam: vibrant culture, war history, scenic landscapes, pho.", image: "/images/services/vietnam.jpg", rating: "4.5" },
];

const stickerVisas: ServiceItem[] = [
  { title: "Indonesian Sticker Visit", description: "Indonesian journey depicted in vibrant visit stickers.", image: "/images/services/indonesia.png", rating: "4.5" },
  { title: "Nepal Sticker Visit", description: "Nepal's beauty showcased in stunning visit stickers.", image: "/images/services/nepal.jpg", rating: "4.5" },
  { title: "Thailand Sticker Visit", description: "Explore Thailand with vibrant visit stickers.", image: "/images/services/thailand.jpg", rating: "4.7" },
  { title: "Malaysia Sticker Visit", description: "Discover Malaysia through colorful visit stickers.", image: "/images/services/malaysia-evisa.jpg", rating: "4.7" },
  { title: "Egypt Sticker Visit", description: "Explore Egypt's heritage with iconic visit stickers.", image: "/images/services/egypt.jpg", rating: "4.5" },
];

const eVisas: ServiceItem[] = [
  { title: "Azerbaijan E-Visa", description: "Azerbaijan's simple e-visa for hassle-free travel.", image: "/images/services/azerbaijan.jpg", rating: "4.2" },
  { title: "Malaysian E-Visa", description: "Effortless online visa process for Malaysian travelers.", image: "/images/services/malaysia-evisa.jpg", rating: "4.8" },
  { title: "Iran E-Visa", description: "Azerbaijan's simple e-visa for hassle-free travel.", image: "/images/services/iran-evisa.jpg", rating: "4.2" },
  { title: "Singapore E-Visa", description: "Streamlined e-visa for hassle-free travel to Singapore.", image: "/images/services/singapore.png", rating: "4.8" },
  { title: "Indonesian E-Visa", description: "Simple e-visa process for Indonesian travelers.", image: "/images/services/indonesia.png", rating: "4.2" },
  { title: "Cambodian E-Visa", description: "Convenient online visa for traveling to Cambodia.", image: "/images/services/cambodia.jpg", rating: "4.8" },
  { title: "Kenya E-Visa", description: "Effortless e-visa process for travel to Kenya.", image: "/images/services/egypt.jpg", rating: "4.2" },
  { title: "Sri Lanka E-Visa", description: "Streamlined e-visa for travel to Sri Lanka.", image: "/images/services/srilanka.jpg", rating: "4.8" },
  { title: "Vietnam E-Visa", description: "Vietnam Land of culture, beauty, and adventure.", image: "/images/services/vietnam-evisa.jpg", rating: "4.2" },
];

const insuranceSlides = ["/images/services/insurance-1.jpg", "/images/services/insurance-2.png", "/images/services/insurance-3.png", "/images/services/insurance-4.png"];
const ticketSlides = ["/images/services/ticket-1.png", "/images/services/ticket-2.png", "/images/services/ticket-3.png"];

function Rating({ value }: { value: string }) {
  return <span className="service-rating"><strong>{value}</strong><span>{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={13} fill="currentColor" />)}</span></span>;
}

function ServiceCard({ item, onBook }: { item: ServiceItem; onBook: (title: string) => void }) {
  return (
    <article className="visa-card">
      <div className="visa-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 760px) 100vw, 360px" /></div>
      <div className="visa-content"><div className="visa-title-row"><h3>{item.title}</h3><Rating value={item.rating} /></div><p>{item.description}</p><button className="book-button" onClick={() => onBook(item.title)}>Book Now <ArrowRight size={14} /></button></div>
    </article>
  );
}

function VisaSection({ title, description, items, columns = 3, rows = false, className = "" }: { title: string; description: string; items: ServiceItem[]; columns?: number; rows?: boolean; className?: string }) {
  const [selected, setSelected] = useState("");
  return (
    <section className={`visa-section ${className}`}>
      <div className="shell services-heading"><h2>{title}</h2><p>{description}</p></div>
      <div className={`shell visa-grid columns-${columns}${rows ? " row-layout" : ""}`}>{items.map((item) => <ServiceCard key={item.title} item={item} onBook={setSelected} />)}</div>
      {selected && <BookingModal service={selected} onClose={() => setSelected("")} />}
    </section>
  );
}

function BookingModal({ service, onClose }: { service: string; onClose: () => void }) {
  const submit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();
  return <div className="booking-backdrop" role="presentation" onMouseDown={onClose}><div className="booking-modal" role="dialog" aria-modal="true" aria-label={`Book ${service}`} onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={onClose} aria-label="Close"><X /></button><h2>Book Your Service</h2><p>Send your details and our team will contact you.</p><form onSubmit={submit}><input value={service} readOnly aria-label="Selected service" /><input placeholder="Name" aria-label="Name" required /><input placeholder="Email" type="email" aria-label="Email" required /><input placeholder="Phone" type="tel" aria-label="Phone" required /><textarea placeholder="Message" aria-label="Message" rows={4} /><button className="button button-primary" type="submit">Submit <ArrowRight size={15} /></button></form></div></div>;
}

function ImageGallery({ images, title }: { images: string[]; title: string }) {
  return <div className="service-gallery">{images.slice(0, 3).map((image, index) => <div className="gallery-frame" key={image}><Image src={image} alt={`${title} ${index + 1}`} fill sizes="(max-width: 760px) 100vw, 360px" /></div>)}</div>;
}

export default function ServicesPage() {
  return (
    <><Header active="services" /><main className="services-page">
      <section className="services-hero"><Image src="/images/services/hero.jpg" alt="Maldives water bungalows" fill priority sizes="100vw" /><div className="services-hero-overlay" /><h1>Services</h1></section>
      <VisaSection title="Drop Box Visas Available" description="Secure your visa effortlessly with our drop box service. Fast, reliable, and convenient - making your travel plans smoother and more manageable." items={dropBoxVisas} columns={2} />
      <VisaSection className="sticker-visas" title="Sticker Visas Available" description="A captivating series unveiling the world's cultural gems, historical landmarks, and natural wonders. Explore diverse destinations and enrich your wanderlust with intriguing insights and captivating narratives." items={stickerVisas} />
      <section className="services-cta"><Image src="/images/services/cta.jpg" alt="Prime destination" fill sizes="100vw" /><div className="services-cta-overlay" /><div className="shell services-cta-layout"><div><h2>Embark on Adventures in Our Prime Destinations</h2><p>Begin thrilling journeys in top-notch locations, creating unforgettable experiences and memories.</p><Link href="#evisas" className="button button-outline">Read More</Link></div><span className="service-play" aria-hidden="true" /></div></section>
      <div id="evisas"><VisaSection title="Evisas Available" description="Experience seamless travel with our e-visa services. Quick, convenient, and hassle-free - making your journey smoother from start to finish." items={eVisas} rows /></div>
      <section className="wide-service light"><div className="shell"><div className="wide-service-copy"><h2>Travel Insurance</h2><p>NZ TRAVEL &amp; TOURS best deal provide all countries Travel Insurance. Travel insurance is a type of insurance that provides cover for the cost of unexpected and unforeseen emergencies and incidents when you are travelling. It also connects travellers with an emergency assistance team that can provide advice and help arrange medical treatment and repatriation home.</p></div><ImageGallery images={insuranceSlides} title="Travel Insurance" /></div></section>
      <section className="wide-service"><div className="shell"><div className="wide-service-copy"><h2>International &amp; Domestic Tickets</h2><p>NZ TRAVEL &amp; TOURS is a leading online travel agency. Our services include Flights Reservation/Airline Tickets, Travel Insurance, Hotel Reservation System, Visa Services, Umrah and Hajj. All our rates are competitive rates. We are known for After Sale Services. We NZ TRAVEL &amp; TOURS are always working for the special deals to facilitate our valuable clients. These are the lowest and market competitive offers for UK, USA, Canada &amp; Australia based frequent Travelers.</p></div><ImageGallery images={ticketSlides} title="International and Domestic Tickets" /></div></section>
    </main><Footer /><a className="whatsapp" href="https://wa.me/923207660075" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a></>
  );
}

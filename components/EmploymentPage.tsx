"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { useState } from "react";
import { Footer, Header } from "./HomePage";

const workVisas = [
  { title: "Saudi Arabia Work Visa", description: "Work visa assistance for skilled, technical, construction, and service-sector opportunities.", image: "/images/employment/saudi-arabia.png", message: "Saudi Arabia" },
  { title: "Dubai Work Visa", description: "Employment visa support for hospitality, retail, logistics, construction, and office roles.", image: "/images/employment/uae.png", message: "Dubai" },
  { title: "Qatar Work Visa", description: "Guidance for employment documentation and work visa processing across key industries.", image: "/images/employment/qatar.png", message: "Qatar" },
  { title: "Oman Work Visa", description: "Application support for technical, driving, hospitality, and general employment visas.", image: "/images/employment/oman.png", message: "Oman" },
  { title: "Malaysia Work Visa", description: "Work permit guidance for manufacturing, services, construction, and professional roles.", image: "/images/employment/malaysia.png", message: "Malaysia" },
];

const achievements = [
  { src: "/images/employment/promoter.jpeg", alt: "NZ Travel and Tours promoter achievement" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.31.16-PM.jpeg", alt: "NZ Travel and Tours achievement document 1" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.31.01-PM.jpeg", alt: "NZ Travel and Tours achievement document 2" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.30.47-PM.jpeg", alt: "NZ Travel and Tours achievement document 3" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.30.32-PM.jpeg", alt: "NZ Travel and Tours achievement document 4" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.30.14-PM.jpeg", alt: "NZ Travel and Tours achievement document 5" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.29.54-PM.jpeg", alt: "NZ Travel and Tours achievement document 6" },
  { src: "/wordpress-media/2024/05/WhatsApp-Image-2024-05-18-at-6.29.36-PM.jpeg", alt: "NZ Travel and Tours achievement document 7" },
];

const whatsappLink = (country: string) =>
  `https://wa.me/923207660075?text=${encodeURIComponent(`Hi, I want information about a ${country} work visa.`)}`;

export default function EmploymentPage() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <Header active="group" />
      <main className="employment-page">
        <section className="employment-hero">
          <Image src="/images/hero-2.jpg" alt="Overseas employment opportunities" fill priority sizes="100vw" />
          <div className="employment-hero-overlay" />
          <div className="shell employment-hero-copy">
            <h1>NZ Overseas Employment</h1>
            <p>Professional guidance for overseas work visas, documentation, processing, and travel support.</p>
          </div>
        </section>

        <section className="employment-opportunities">
          <div className="shell employment-heading">
            <h2>NZ Overseas Employment</h2>
            <p>Explore overseas work visa opportunities with professional guidance for documentation, processing, and travel support.</p>
          </div>
          <div className="shell employment-grid">
            {workVisas.map((visa) => (
              <article className="employment-card" key={visa.title}>
                <div className="employment-card-image">
                  <Image src={visa.image} alt={`${visa.message} flag`} fill sizes="(max-width: 767px) 100vw, 360px" />
                </div>
                <div className="employment-card-body">
                  <h3>{visa.title}</h3>
                  <p>{visa.description}</p>
                  <a href={whatsappLink(visa.message)} target="_blank" rel="noopener noreferrer">
                    Contact Now <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="employment-video-band">
          <Image src="/images/destination.jpg" alt="Prime travel destination" fill sizes="100vw" />
          <div className="employment-video-overlay" />
          <div className="shell employment-video-layout">
            <div>
              <h2>Embark on Adventures in Our Prime Destinations</h2>
              <p>Begin thrilling journeys in top-notch locations, creating unforgettable experiences and memories.</p>
              <Link className="employment-outline-button" href="/">Read More</Link>
            </div>
            <button className="employment-play" type="button" onClick={() => setVideoOpen(true)} aria-label="Play NZ Travel and Tours video">
              <Play fill="currentColor" />
            </button>
          </div>
        </section>

        <section className="employment-achievements">
          <div className="shell employment-heading">
            <h2>Achievements</h2>
          </div>
          <div className="shell achievement-carousel" aria-label="Achievement documents">
            {achievements.map((achievement) => (
              <figure className="achievement-image" key={achievement.src}>
                <Image src={achievement.src} alt={achievement.alt} fill sizes="(max-width: 767px) 85vw, 360px" />
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <a className="whatsapp" href="https://wa.me/923207660075" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">WA</a>

      {videoOpen && (
        <div className="employment-video-modal" role="presentation" onMouseDown={() => setVideoOpen(false)}>
          <div className="employment-video-dialog" role="dialog" aria-modal="true" aria-label="NZ Travel and Tours video" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setVideoOpen(false)} aria-label="Close video"><X /></button>
            <video src="/videos/nz-video.mp4" controls autoPlay playsInline preload="metadata" />
          </div>
        </div>
      )}
    </>
  );
}

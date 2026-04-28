"use client";

import Image from "next/image";
import { FadeIn } from "@/components/global/FadeIn";
import { Header } from "@/components/global/Header";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ServiceTimeline } from "@/components/sections/ServiceTimeline";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { ImageComparisonSlider } from "@/components/sections/ImageComparisonSlider";
import { GoogleReviewCTA } from "@/components/sections/GoogleReviewCTA";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { useState } from "react";

const stats = [
  { value: 1500, suffix: "+", label: "Clientes Atendidos" },
  { value: 5, suffix: "★", label: "Anos de Experiência" },
  { value: 98, suffix: "%", label: "Satisfação" },
  { value: 500, suffix: "+", label: "Veículos Transformados" },
];

const timelineServices = [
  {
    title: "Lavagem Técnica",
    description: "Limpeza profunda com produtos especializados e técnicas de detalhamento premium.",
    image: "/images/hygiene-desktop.jpeg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Polimento",
    description: "Restauração do brilho original com compounds e polish de alta performance.",
    image: "/images/polishing-desktop.jpeg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Vitrificação",
    description: "Proteção de longo prazo com brilho intenso e hydrophobicidade extrema.",
    image: "/images/glazing-desktop.jpeg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Proteção Cerâmica",
    description: "Cobertura nanoparticleshield que protege e proporciona brilho Extra.",
    image: "/images/delivery-revelation-desktop.jpeg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const beforeAfterSlides = [
  {
    before: "/images/swirl-marks-before.jpeg",
    after: "/images/swirl-marks-after.jpeg",
    title: "Remoção de Marcas de Rodas",
  },
  {
    before: "/images/upholstered-before.jpeg",
    after: "/images/upholstered-after.jpeg",
    title: "Higienização Estofados",
  },
  {
    before: "/images/restauration-before.jpeg",
    after: "/images/restauration-after.jpeg",
    title: "Restauração de Pintura",
  },
  {
    before: "/images/polishing-mobile.jpeg",
    after: "/images/polishing-desktop.jpeg",
    title: "Polimento Profissional",
  },
];

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <main className="min-h-screen">
      <Header onOpenBooking={openBooking} />

      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-desktop.jpeg"
            alt="Apex Detail Studio - Detailagem Automotiva Premium"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>

        <div className="container-main relative z-10 px-4 py-32 md:py-0">
          <div className="max-w-xl">
            <FadeIn direction="up">
              <h1 className="heading-display text-text-primary mb-4 md:mb-6">
                Seu Veículo,
                <span className="text-gold"> Nossa Arte</span>
              </h1>
            </FadeIn>

            <FadeIn direction="up" delay={100}>
              <p className="text-lg md:text-xl text-text-secondary mb-8 md:mb-12">
                Estética automotiva premium em Belo Horizonte.
                Transformamos seu carro em uma obra de arte sobre rodas.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={openBooking} className="btn-primary">
                  Agendar Serviço
                </button>
                <a href="#resultados" className="btn-secondary text-center">
                  Ver Resultados
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn direction="up">
        <section className="section-padding bg-surface">
          <div className="container-main">
            <StatsCounter stats={stats} />
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={100}>
        <section id="resultados" className="section-padding">
          <div className="container-main">
            <h2 className="heading-section text-center mb-4">
              Resultados <span className="text-gold">Transformadores</span>
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
              Veja a diferença que nossas técnicas premium fazem.
            </p>

            <div className="space-y-8 md:space-y-0 md:columns-2 lg:columns-4 gap-8">
              {beforeAfterSlides.map((slide) => (
                <div
                  key={slide.title}
                  className="md:sticky md:top-20 break-inside-avoid mb-8 md:mb-0"
                >
                  <div className="rounded-2xl overflow-hidden bg-surface border border-border">
                    <h3 className="text-lg font-display font-semibold text-text-primary p-4 border-b border-border">
                      {slide.title}
                    </h3>
                    <ImageComparisonSlider
                      before={slide.before}
                      after={slide.after}
                      beforeAlt={`${slide.title} - Antes`}
                      afterAlt={`${slide.title} - Depois`}
                      className="rounded-b-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={200}>
        <section id="servicos" className="section-padding bg-surface">
          <div className="container-main">
            <h2 className="heading-section text-center mb-4">
              Nossa <span className="text-gold">Jornada</span>
            </h2>
            <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
              Cada etapa do processo é essencial para alcançar a excelência.
            </p>
            <ServiceTimeline services={timelineServices} />
          </div>
        </section>
      </FadeIn>

      <FadeIn direction="up" delay={300}>
        <FeedbackSection />
      </FadeIn>

      <FadeIn direction="up" delay={400}>
        <section className="section-padding bg-surface">
          <GoogleReviewCTA />
        </section>
      </FadeIn>

      <AppointmentForm isOpen={isBookingOpen} onClose={closeBooking} />
    </main>
  );
}
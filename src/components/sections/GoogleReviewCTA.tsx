"use client";

import { FadeIn } from "@/components/global/FadeIn";

interface GoogleReviewCTAProps {
  businessName?: string;
  reviewUrl?: string;
}

export function GoogleReviewCTA({
  businessName = "Apex Detail Studio",
  reviewUrl = "https://search.google.com/local/reviews?place_id=YOUR_PLACE_ID",
}: GoogleReviewCTAProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-main text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Já visitou o {businessName}?
        </h3>

        <p className="text-text-secondary max-w-xl mx-auto mb-8">
          Sua evaluación nos ajuda a melhorar constantemente. Conte como foi sua experiência e ajude outros clientes a encontrar o melhor serviço de detalhamento automotivo em Belo Horizonte.
        </p>

        <a
          href={reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-background font-semibold rounded-xl hover:bg-goldLight transition-colors duration-200"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"
              clipRule="evenodd"
            />
          </svg>
          Avaliar no Google
        </a>

        <p className="mt-6 text-text-muted text-sm">
          Leva menos de 1 minuto. Obrigado pela sua participação!
        </p>
      </div>
    </div>
  );
}
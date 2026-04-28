"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo",
    avatar: "/images/avatar-1.jpeg",
    text: "Serviço impecável! Meu carro ficou completamente novo. A equipe do Apex Detail Studio realmente entende do assunto. Recomendo para todos os donos de carros premium que querem manter o brilho original.",
    rating: 5,
  },
  {
    id: 2,
    name: "Juliana Martins",
    avatar: "/images/avatar-2.jpeg",
    text: "Nunca vi um trabalho tão detalhado. A higienização dos estofados superou todas as expectativas. Agora meu carro cheira novo por dentro há meses. Preço justo pelo qualidade entregue.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto Alves",
    avatar: "/images/avatar-3.jpeg",
    text: "Proteção cerâmica aplicada perfeitamente. O brilho está incrível e a hydrophobicidade durou mais do que o esperado. Time profissional e atendimento excelente do início ao fim.",
    rating: 5,
  },
  {
    id: 4,
    name: "Fernanda Costa",
    avatar: "/images/avatar-4.jpeg",
    text: "Minha terceira vez no Apex e sempre excepcional. O polimento removeu todas as marcas de roda. Meu carro estava sem vida e hoje está lindo como no dia que sai da concessionária.",
    rating: 5,
  },
  {
    id: 5,
    name: "Marcelo Souza",
    avatar: "/images/avatar-5.jpeg",
    text: "Atendimento personalizado e produtos de primeira linha. O detailing completo transformou meu BMW. Equipe técnica muito qualificada e ambiente super profissional.",
    rating: 5,
  },
  {
    id: 6,
    name: "Patrícia Lima",
    avatar: "/images/avatar-6.jpeg",
    text: "Excelente! Meu Jaguar ficou perfeito. O vidro recebeu tratamento especial e agora a água escorre completamente. Serviço diferenciado em BH.",
    rating: 5,
  },
];

interface FeedbackSectionProps {
  className?: string;
}

export function FeedbackSection({ className = "" }: FeedbackSectionProps) {
  return (
    <section id="depoimentos" className={`section-padding ${className}`}>
      <div className="container-main">
        <h2 className="heading-section text-center mb-4">
          O que dizem <span className="text-gold">Nossos Clientes</span>
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-xl mx-auto">
          A satisfação dos nossos clientes é nossa maior recompensa. Veja as avaliações.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-semibold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

interface ServiceTimelineProps {
  services: {
    title: string;
    description: string;
    image: string;
    icon: React.ReactNode;
  }[];
}

export function ServiceTimeline({ services }: ServiceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2" />

      <div className="space-y-12 md:space-y-0">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className={`w-full md:w-auto p-4 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-surface border-2 border-gold"
                    : "bg-surface/50 border-2 border-transparent hover:border-border"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activeIndex === index ? "bg-gold text-background" : "bg-gold/20 text-gold"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm text-text-secondary mt-1 transition-all duration-300 ${
                        activeIndex === index ? "block" : "hidden md:block"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </button>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <div
                className={`w-4 h-4 rounded-full border-4 border-background ${
                  activeIndex === index ? "bg-gold" : "bg-border"
                } transition-colors duration-300`}
              />
            </div>

            <div className="flex-1 w-full hidden md:block">
              <div
                className={`rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeIndex === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 absolute -z-10"
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 md:hidden rounded-2xl overflow-hidden">
        <Image
          src={services[activeIndex].image}
          alt={services[activeIndex].title}
          width={400}
          height={250}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
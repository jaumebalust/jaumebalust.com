"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const locations = [
  {
    city: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    label: "Born & raised",
    period: "",
  },
  {
    city: "Palo Alto",
    country: "California, USA",
    flag: "🇺🇸",
    label: "High school senior year",
    period: "",
  },
  {
    city: "Luxembourg",
    country: "Luxembourg",
    flag: "🇱🇺",
    label: "Electrical Engineer at Fallprotec",
    period: "2013 – 2015",
  },
  {
    city: "Eindhoven",
    country: "Netherlands",
    flag: "🇳🇱",
    label: "Full Stack Developer at Algebrakit",
    period: "2023 – 2024",
  },
  {
    city: "San Luis Potosí",
    country: "Mexico",
    flag: "🇲🇽",
    label: "Currently based here",
    period: "Present",
  },
];

export default function GlobalMobility() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Global <span className="text-indigo-500">Mobility</span>
          </h2>
          <p className="text-center text-[#8888a0] mb-16 max-w-2xl mx-auto">
            Lived and worked across 5 countries and 3 continents. Comfortable
            relocating and thriving in new environments.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-[#00e676]/30 to-transparent hidden md:block" />

          <div className="space-y-4">
            {locations.map((loc, i) => (
              <AnimatedSection key={loc.city} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 md:gap-6 bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-5 hover:border-indigo-500/20 transition-all duration-300 relative"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute -left-[calc(1.5rem+4.5px)] w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-[#0a0a0f]" />

                  <span className="text-3xl shrink-0">{loc.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h3 className="text-base font-semibold">
                        {loc.city}
                        <span className="text-[#8888a0] font-normal text-sm ml-2">
                          {loc.country}
                        </span>
                      </h3>
                      {loc.period && (
                        <span className="text-xs text-indigo-400 font-mono shrink-0">
                          {loc.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[#8888a0]">{loc.label}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap justify-center gap-3">
              {["Spanish", "English", "Catalan", "French"].map((lang) => (
                <span
                  key={lang}
                  className="text-sm px-4 py-2 rounded-full bg-[#00e676]/10 text-[#00e676] border border-[#00e676]/20 font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-[#8888a0] text-sm mt-4">
              Fluent in 4 languages · Open to international travel &amp; relocation
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

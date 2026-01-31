"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  {
    icon: "🧮",
    title: "Algebrakit — Scaling Math Education",
    description:
      "Building math widgets that serve the learning needs of students across the Netherlands, Belgium, Singapore, and more. Powering interactive math experiences for 100K+ students every day.",
    metrics: ["100K+ students/day", "Multiple countries", "TypeScript + React"],
    color: "#00e676",
  },
  {
    icon: "🏥",
    title: "Estimtrack — Transforming Hospital Operations",
    description:
      "Redesigned the entire system from 19 apps per hospital down to 6. Optimizing patient flow and OR coordination across 4 major hospitals in Catalonia.",
    metrics: ["350K+ staff tasks", "100 patients/day", "19 → 6 apps"],
    color: "#6366f1",
  },
  {
    icon: "⚖️",
    title: "Fiscalito — AI-Powered Legal Search",
    description:
      "Built a RAG-powered legal search platform for Mexican lawyers. An AI agent searches indexed court rulings and uses LLM to compare and determine relevance to active cases.",
    metrics: ["RAG + LLM", "AI Agents", "Real-world impact"],
    color: "#fbbf24",
  },
  {
    icon: "🚚",
    title: "Kiwi Last Mile — Logistics at Scale",
    description:
      "Built from scratch an orchestration app handling 40+ drivers and 500+ deliveries daily for a last-mile delivery provider in Barcelona.",
    metrics: ["500+ deliveries/day", "40+ drivers", "Built before coding agents"],
    color: "#f472b6",
  },
];

export default function ExceptionalWork() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Exceptional <span className="text-indigo-500">Work</span>
          </h2>
          <p className="text-center text-[#8888a0] mb-16 max-w-2xl mx-auto">
            Systems I&apos;ve built from scratch that create real-world impact at scale.
          </p>
        </AnimatedSection>

        <div className="space-y-6">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-8 hover:border-opacity-50 transition-all duration-300"
                style={{
                  borderColor: `${item.color}22`,
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-4xl shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-[#8888a0] leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="text-xs font-mono px-3 py-1.5 rounded-full border"
                          style={{
                            color: item.color,
                            borderColor: `${item.color}33`,
                            backgroundColor: `${item.color}0d`,
                          }}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

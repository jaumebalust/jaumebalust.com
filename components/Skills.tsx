"use client";

import AnimatedSection from "./AnimatedSection";
import TechRadar from "./TechRadar";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Tech <span className="text-indigo-500">Stack</span>
          </h2>
          <p className="text-center text-[#8888a0] text-sm mb-12">
            Interactive skill visualization — click categories to explore
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-8">
            <div className="text-center mb-6">
              <span className="inline-block px-3 py-1 text-xs font-mono text-[#00e676] bg-[#00e676]/10 rounded-full border border-[#00e676]/20">
                React Interactive Demo
              </span>
            </div>
            <TechRadar />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

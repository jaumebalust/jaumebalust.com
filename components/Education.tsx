"use client";

import AnimatedSection from "./AnimatedSection";

const education = [
  {
    school: "UPC Barcelona — ETSEIB",
    degree: "Industrial Engineering",
    period: "2008 — 2013",
    icon: "🎓",
  },
  {
    school: "Stanford University (Online)",
    degree: "Foundations of Information Security — XACS101",
    period: "2019",
    icon: "🔐",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="text-indigo-500">Education</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.school} delay={i * 0.15}>
              <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300">
                <div className="text-3xl mb-4">{edu.icon}</div>
                <span className="text-xs text-indigo-400 font-mono">
                  {edu.period}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-1">{edu.degree}</h3>
                <p className="text-[#8888a0] text-sm">{edu.school}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

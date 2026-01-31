"use client";

import AnimatedSection from "./AnimatedSection";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  tech?: string;
  details?: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Algebrakit",
    period: "Nov 2023 – Present",
    tech: "TypeScript, React, Docker, Kubernetes, Redis, GraphQL, WebSockets",
    details: [
      "Building math widgets serving 100K+ students daily across the Netherlands, Belgium, Singapore, and more",
      "Scaling educational technology for international markets",
    ],
  },
  {
    role: "CTO → Consultant",
    company: "Estimtrack",
    period: "May 2019 – Present",
    tech: "Technical lead: DB, Backend, Frontend",
    details: [
      "Acquired by Diractive May 2024, currently consulting",
      "Redesigned system from 19 apps per hospital down to 6",
      "Spin-off of Hospital Clínic, optimizes patient flow / OR coordination",
      "Impact: 100 patients/day, 300+ happier relatives/day, 350K+ staff tasks since 2016",
      "Hospitals: Clínic de Barcelona, Sant Pau, Igualada, Mollet",
    ],
  },
  {
    role: "CTO",
    company: "Meetaitech",
    period: "Feb 2020 – Aug 2022",
    details: [
      "Designed entire system from scratch. DB, Serverless, Backend, Frontend.",
      "Meeting optimization startup.",
    ],
  },
  {
    role: "CTO",
    company: "Kiwi Last Mile",
    period: "Apr 2018 – May 2019",
    details: ["Built app from scratch: 40+ drivers, 500+ deliveries daily. Barcelona."],
  },
  {
    role: "PHP Developer",
    company: "Inbenta",
    period: "Mar 2017 – Apr 2018",
    details: ["Knowledge team, FAQ sites, patented search algorithm."],
  },
  {
    role: "PHP Developer",
    company: "Estimtrack",
    period: "Nov 2015 – Mar 2017",
  },
  {
    role: "Electrical Engineer",
    company: "Fallprotec, Luxembourg",
    period: "Jul 2013 – Nov 2015",
    details: [
      "Ropeclimber electrical systems + PM first batch of 20 units.",
      "Battery hoist, 240kg, people-certified.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
            <span className="text-indigo-500">Experience</span>
          </h2>
        </AnimatedSection>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2a3a] md:-translate-x-px" />
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className={`relative flex flex-col md:flex-row mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1.5 mt-1.5 ring-4 ring-[#0a0a0f] z-10" />
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6 hover:border-indigo-500/30 transition-colors duration-300">
                    <span className="text-xs text-indigo-400 font-mono">{exp.period}</span>
                    <h3 className="text-lg font-semibold mt-1">{exp.role}</h3>
                    <p className="text-[#8888a0] text-sm mb-3">{exp.company}</p>
                    {exp.tech && <p className="text-xs text-indigo-300/70 mb-3 font-mono">{exp.tech}</p>}
                    {exp.details && (
                      <ul className={`space-y-1 text-sm text-[#8888a0] ${i % 2 === 0 ? "" : "md:text-right"}`}>
                        {exp.details.map((detail, j) => (
                          <li key={j} className="leading-relaxed">{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

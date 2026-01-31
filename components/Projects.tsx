"use client";

import AnimatedSection from "./AnimatedSection";

interface Project {
  name: string;
  url: string;
  icon: string;
  description: string;
  tech: string[];
  highlight?: boolean;
}

const projects: Project[] = [
  {
    name: "Fiscalito.com.mx",
    url: "https://fiscalito.com.mx",
    icon: "⚖️",
    description:
      "Mexican legal search platform. Indexed sentencias (court rulings) with RAG so lawyers can search them. AI agent searches via RAG and compares sentencias using LLM to determine relevance to a case.",
    tech: ["RAG", "LLM", "AI Agents", "Python"],
    highlight: true,
  },
  {
    name: "Photo-Merger.com",
    url: "https://photo-merger.com",
    icon: "📸",
    description: "Photo merging tool built with a modern Python backend and React frontend.",
    tech: ["FastAPI", "React", "Python"],
  },
  {
    name: "AgentAbode.com",
    url: "https://agentabode.com",
    icon: "🏠",
    description: "Real estate platform with LLM integration for intelligent property matching.",
    tech: ["LLM Integration", "Full Stack"],
  },
  {
    name: "ShareChess.com",
    url: "https://sharechess.com",
    icon: "♟️",
    description:
      "Share your favorite chess board positions via WhatsApp.",
    tech: ["JavaScript", "Web APIs"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Side <span className="text-indigo-500">Projects</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-[#1a1a24] border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 h-full ${
                  project.highlight
                    ? "border-indigo-500/30 hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                    : "border-[#2a2a3a] hover:border-[#3a3a4a]"
                }`}
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                <p className="text-[#8888a0] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-full bg-indigo-500/10 text-indigo-400/70 border border-indigo-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-block mt-4 text-sm text-indigo-400 hover:text-indigo-300">
                  Visit site →
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

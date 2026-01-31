"use client";

import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            About <span className="text-indigo-500">Me</span>
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">🎓 Background</h3>
              <p className="text-[#8888a0] leading-relaxed">
                Studied Industrial Engineering (Electrical) at UPC Barcelona. Worked 2 years
                as an Electrical Engineer before switching to development.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">💻 Development</h3>
              <p className="text-[#8888a0] leading-relaxed">
                Since 2015 building fullstack apps, leading teams, and designing systems from scratch.
                Multiple CTO positions owning DB architecture to frontend delivery.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">🚀 Currently</h3>
              <p className="text-[#8888a0] leading-relaxed">
                Currently at Algebrakit, working with TypeScript, React, Docker, Kubernetes,
                Redis, GraphQL, and WebSockets.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="bg-[#1a1a24] border border-[#2a2a3a] rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-indigo-400">🌍 Languages</h3>
              <p className="text-[#8888a0] leading-relaxed">
                Fluent in Spanish (native), English (fluent), and Catalan (native).
                Based in San Luis Potosí, Mexico — originally from Barcelona.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

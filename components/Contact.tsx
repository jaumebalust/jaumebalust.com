"use client";

import AnimatedSection from "./AnimatedSection";

const links = [
  {
    label: "balust.jaume@gmail.com",
    href: "mailto:balust.jaume@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jaumebalust",
    icon: "💼",
  },
  {
    label: "Telegram",
    href: "https://t.me/theofficialjimmy",
    icon: "💬",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-[#8888a0] mb-12 text-lg">
            Interested in working together? Let&apos;s talk.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#1a1a24] border border-[#2a2a3a] rounded-xl text-[#e4e4ed] hover:border-indigo-500/30 hover:translate-x-1 transition-all duration-300"
              >
                <span className="text-xl">{link.icon}</span>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

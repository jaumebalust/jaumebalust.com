"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight">
            Jaume <span className="text-indigo-500">Balust</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#8888a0] max-w-2xl mx-auto mb-4 leading-relaxed">
            Full Stack Developer since 2015. Industrial Engineer turned developer.
            100% committed to increasing efficiency in everything I touch.
          </p>
          <p className="text-sm text-[#8888a0] mb-4">
            📍 San Luis Potosí, Mexico · Originally from Barcelona
          </p>
          <p className="text-sm text-[#8888a0] mb-10">
            Fluent in Spanish, English, Catalan, and French.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-lg bg-[#00e676] text-[#0a0a0f] hover:bg-[#00c853] transition-colors shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:shadow-[0_0_30px_rgba(0,230,118,0.5)]"
            >
              Get in Touch
            </a>
            <a
              href="#experience"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold rounded-lg border border-[#2a2a3a] text-[#e4e4ed] hover:bg-[#1a1a24] transition-colors"
            >
              View Experience
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20"
        >
          <a href="#about" className="inline-block animate-bounce text-[#8888a0]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

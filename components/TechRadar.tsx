"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: "🎨",
    color: "#818cf8",
    skills: [
      { name: "TypeScript", level: 100 },
      { name: "React", level: 100 },
      { name: "Next.js", level: 100 },
      { name: "Vue.js", level: 100 },
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    color: "#6366f1",
    skills: [
      { name: "Laravel", level: 100 },
      { name: "FastAPI", level: 100 },
      { name: "Python", level: 100 },
      { name: "PHP", level: 100 },
    ],
  },
  {
    name: "Infrastructure",
    icon: "☁️",
    color: "#00e676",
    skills: [
      { name: "AWS", level: 100 },
      { name: "Docker", level: 100 },
      { name: "Kubernetes", level: 100 },
      { name: "Serverless", level: 100 },
    ],
  },
  {
    name: "Data & APIs",
    icon: "🗄️",
    color: "#f472b6",
    skills: [
      { name: "SQL", level: 100 },
      { name: "Redis", level: 100 },
      { name: "GraphQL", level: 100 },
      { name: "REST APIs", level: 100 },
    ],
  },
  {
    name: "AI / ML",
    icon: "🤖",
    color: "#fbbf24",
    skills: [
      { name: "RAG", level: 100 },
      { name: "LLM Integration", level: 100 },
      { name: "AI Agents", level: 100 },
    ],
  },
  {
    name: "Real-time",
    icon: "⚡",
    color: "#22d3ee",
    skills: [
      { name: "WebSockets", level: 100 },
      { name: "Real-time Analytics", level: 100 },
    ],
  },
];

export default function TechRadar() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <div className="w-full">
      {/* Category selector */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat, i) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeCategory === i
                ? "bg-[#1a1a24] border-indigo-500/50 text-white shadow-lg"
                : "bg-transparent border-[#2a2a3a] text-[#8888a0] hover:text-white hover:border-[#3a3a4a]"
            } border`}
          >
            <span className="mr-2">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {categories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-[#e4e4ed]">
                  {skill.name}
                </span>
                <span className="text-xs text-[#8888a0] font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-[#1a1a24] rounded-full overflow-hidden border border-[#2a2a3a]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${categories[activeCategory].color}88, ${categories[activeCategory].color})`,
                    boxShadow: `0 0 10px ${categories[activeCategory].color}44`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

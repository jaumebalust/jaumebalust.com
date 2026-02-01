export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#2a2a3a] text-center space-y-2">
      <p className="text-[#8888a0] text-sm">
        © 2027 Jaume Balust. Built with React, Next.js &
        TypeScript.
      </p>
      <p className="text-[#8888a0]/60 text-xs">
        Powered by{" "}
        <a
          href="https://openclaw.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400/60 hover:text-indigo-400 transition-colors"
        >
          OpenClaw
        </a>
      </p>
    </footer>
  );
}

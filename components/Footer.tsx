export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#2a2a3a] text-center space-y-2">
      <p className="text-[#8888a0] text-sm">
        Greetings from the Netherlands 🇳🇱
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

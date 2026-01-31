export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-[#2a2a3a] text-center">
      <p className="text-[#8888a0] text-sm">
        © {new Date().getFullYear()} Jaume Balust. Built with React, Next.js &
        TypeScript.
      </p>
    </footer>
  );
}

import { Mail } from "lucide-react";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/syedreehan/" },
  { name: "Instagram", href: "https://www.instagram.com/thesyedreehan" },
  { name: "X", href: "https://x.com/TheSyedReehan" },
  { name: "GitHub", href: "https://github.com/syed-reehan" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      <div className="relative z-10 rounded-2xl border border-white/15 bg-white/5 p-8 md:p-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-white/75 text-lg">
          Currently open to collaborations with fellow builders and founders.
        </p>

        <a
          href="mailto:syedreehan.id@gmail.com"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 hover:bg-white hover:text-black transition-colors"
        >
          <Mail className="h-4 w-4" />
          syedreehan.id@gmail.com
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          {socials.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
            >
              {name}
            </a>
          ))}
        </div>

        <footer className="mt-14 border-t border-white/15 pt-8">
          <p className="font-display text-2xl font-bold">SYED REEHAN</p>
          <p className="mt-2 text-white/75">syedreehan.id@gmail.com</p>
          <p className="mt-6 text-sm text-white/55">© 2026 Syed Reehan. Engineering Student &amp; Developer.</p>
          <p className="mt-2 text-sm text-white/55">Education + Execution.</p>
        </footer>
      </div>
    </section>
  );
}

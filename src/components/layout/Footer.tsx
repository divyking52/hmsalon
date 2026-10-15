import Image from "next/image";
import { footerLinks, site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-champagne/20 bg-mist">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt="Hair Masters"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <p className="font-serif text-3xl text-ink">
              Hair <span className="italic text-champagne">Masters</span>
            </p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-taupe">
            Luxury beauty and wellness across India — one exquisite makeover at
            a time.
          </p>
        </div>

        <div>
          <p className="micro-label mb-4 text-champagne">Explore</p>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-ink/80 transition hover:text-champagne"
                  data-cursor="hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="micro-label mb-4 text-champagne">Contact</p>
          <p className="text-sm text-ink/80">{site.phonesFooter[0]}</p>
          <p className="mt-1 text-sm text-ink/80">{site.phonesFooter[1]}</p>
          <p className="mt-4 text-sm leading-relaxed text-taupe">
            {site.addressFull}
          </p>
        </div>
      </div>

      <div className="border-t border-champagne/15">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-4 py-6 text-[0.7rem] tracking-[0.16em] uppercase text-taupe sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026. All rights reserved by Hair Masters Salon</span>
          <span>Silk & Champagne Editorial</span>
        </div>
      </div>
    </footer>
  );
}

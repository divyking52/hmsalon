import MagneticButton from "@/components/ui/MagneticButton";
import { bookAppointment, franchise } from "@/data/content";

export default function FranchiseBanner() {
  return (
    <section id="franchise" className="bg-mist px-4 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-4 lg:grid-cols-2">
        <article className="relative overflow-hidden border border-champagne/25 bg-surface p-8 shadow-sm md:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-champagne/10 blur-3xl" />
          <p className="micro-label text-champagne">Partnership</p>
          <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-5xl">
            {franchise.headline}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-taupe">
            {franchise.copy}
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.2em] text-ink/70">
            {franchise.hours}
          </p>
          <MagneticButton href="#contact" className="mt-8">
            {franchise.cta}
          </MagneticButton>
        </article>

        <article
          id="contact"
          className="relative overflow-hidden border border-champagne/25 bg-ink p-8 text-cream md:p-12"
        >
          <p className="micro-label text-champagne">Concierge</p>
          <h2 className="mt-4 font-serif text-4xl font-light md:text-5xl">
            {bookAppointment.headline}
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-taupe">
            {bookAppointment.copy}
          </p>
          <p className="mt-6 text-sm text-cream/85">{bookAppointment.location}</p>
          <p className="mt-2 text-sm text-champagne">{bookAppointment.hotline}</p>
          <MagneticButton
            href="tel:+01145511560"
            variant="filled"
            className="mt-8 !bg-cream !text-ink hover:!bg-champagne"
          >
            {bookAppointment.cta}
          </MagneticButton>
        </article>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { news } from "@/data/content";

export default function HMNews() {
  return (
    <section id="news" className="bg-alabaster px-4 py-28 sm:px-8 md:py-36">
      <div className="mx-auto max-w-[1600px]">
        <p className="micro-label text-champagne">HM News</p>
        <h2 className="mt-4 font-serif text-4xl font-light text-ink md:text-6xl">
          Latest from the <span className="italic text-champagne">Journal</span>
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {news.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden border border-champagne/20 bg-surface shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="micro-label text-taupe">{article.meta}</p>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-ink">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-taupe">
                  {article.excerpt}
                </p>
                <a
                  href="#news"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-[0.7rem] uppercase tracking-[0.22em] text-champagne transition group-hover:gap-3"
                  data-cursor="hover"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

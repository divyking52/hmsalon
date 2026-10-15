"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { site } from "@/data/content";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="glass w-[min(90vw,320px)] rounded-2xl p-5 shadow-2xl"
          >
            <p className="micro-label text-champagne">WhatsApp Us</p>
            <h3 className="mt-2 font-serif text-2xl text-ink">
              Start a Conversation
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-taupe">
              WhatsApp Us for Instant Support
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink"
              data-cursor="hover"
            >
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/35 bg-surface text-ink shadow-xl transition hover:border-champagne hover:text-champagne"
        aria-label="WhatsApp concierge"
        data-cursor="hover"
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <MessageCircle className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}

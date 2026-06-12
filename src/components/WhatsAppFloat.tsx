"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/data";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Hello Pramukh Group, I would like to know more about your projects."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pramukh Group on WhatsApp"
      className="fixed bottom-7 right-7 z-[90] flex h-14 w-14 items-center justify-center rounded-full border border-gold-soft bg-charcoal/90 text-gold shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur transition-colors hover:bg-gold hover:text-charcoal"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2.4, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a9.9 9.9 0 0 0-8.5 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5v-.5c0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5 0-.7.3a3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4 15 15 0 0 0 1.5.6 3.7 3.7 0 0 0 1.7.1 2.8 2.8 0 0 0 1.8-1.3c.2-.4.2-1 .2-1.1l-.1-.3Z" />
      </svg>
    </motion.a>
  );
}

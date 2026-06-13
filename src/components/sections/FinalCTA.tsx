"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref} id="contact">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40 animate-gradient-xy opacity-50 mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          {/* Inner glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready To Grow Your <br className="hidden md:block" /> Business Online?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let&apos;s create a website that attracts customers, drives results, and elevates your brand above the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="text-lg px-8 h-14 w-full sm:w-auto shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="text-lg px-8 h-14 w-full sm:w-auto bg-white/5 hover:bg-white/10 border-white/20">
                Start Your Project
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

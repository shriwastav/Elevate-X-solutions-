"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function LeadGeneration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-border" ref={ref}>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Get a Free <span className="text-gradient">Website Audit</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discover how your website can generate more leads and sales. We&apos;ll analyze your current setup and provide a custom strategy.
            </p>

            <div className="space-y-6">
              {[
                "Comprehensive UI/UX analysis",
                "Performance and speed testing",
                "SEO opportunity report",
                "Actionable conversion advice",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 border border-white/10"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Business Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Company Ltd"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Website URL</label>
                  <input
                    type="url"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="https://example.com"
                  />
                </div>
              </div>



              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Project Details</label>
                <textarea
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all min-h-[120px]"
                  placeholder="Tell us about your project goals..."
                />
              </div>

              <Button size="lg" className="w-full mt-4 gap-2">
                Get My Free Audit <Send size={18} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

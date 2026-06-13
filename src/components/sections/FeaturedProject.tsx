"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FeaturedProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" id="portfolio" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Project</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover how we helped FashionLoop revolutionize the online fashion marketplace.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Button variant="outline" className="gap-2">
              View All Projects <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-3xl glass p-1 border border-white/10 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8 bg-zinc-900/80 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-foreground w-max">
                E-Commerce Platform
              </div>
              <h3 className="text-4xl font-bold text-foreground">FashionLoop</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A modern fashion marketplace platform featuring seller dashboards, product management, advanced search functionality, and highly responsive shopping experiences. We built this from the ground up to handle massive scale.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {["Next.js", "React", "Tailwind CSS", "Supabase"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-black/50 border border-white/5 text-sm font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                <Button size="lg" className="gap-2">
                  View Case Study <ArrowRight size={18} />
                </Button>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden glass-card group">
              {/* Abstract Representation of the mockup */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-blue-900/40 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-500" />
              
              {/* Desktop Frame */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-black rounded-t-xl border border-white/10 border-b-0 shadow-2xl overflow-hidden flex flex-col"
                initial={{ y: "10%" }}
                whileInView={{ y: "-50%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="h-6 bg-zinc-900 flex items-center px-3 gap-1.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <div className="flex-1 p-4 grid grid-cols-3 gap-2">
                  <div className="col-span-3 h-8 rounded bg-white/5 mb-2" />
                  <div className="col-span-1 h-24 rounded bg-gradient-to-br from-purple-500/20 to-transparent" />
                  <div className="col-span-1 h-24 rounded bg-gradient-to-br from-blue-500/20 to-transparent" />
                  <div className="col-span-1 h-24 rounded bg-gradient-to-br from-pink-500/20 to-transparent" />
                </div>
              </motion.div>

              {/* Mobile Frame */}
              <motion.div 
                className="absolute bottom-4 right-4 w-24 md:w-32 h-48 md:h-64 bg-black rounded-[1.5rem] border-4 border-zinc-800 shadow-2xl overflow-hidden"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-zinc-800 rounded-b-xl" />
                <div className="p-2 pt-8 space-y-2">
                  <div className="h-4 rounded bg-white/10" />
                  <div className="h-20 rounded bg-gradient-to-b from-purple-500/20 to-transparent" />
                  <div className="h-8 rounded bg-white/5" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

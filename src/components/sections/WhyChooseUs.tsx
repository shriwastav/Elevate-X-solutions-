"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Search, Smartphone, Paintbrush, Lock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Optimized for lightning-fast load times and smooth interactions.",
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-500/10 to-blue-500/10",
    bgImage: "/images/fast_performance.png"
  },
  {
    icon: Search,
    title: "SEO Optimized",
    desc: "Built to rank higher on search engines.",
    className: "md:col-span-1",
    bgImage: "/images/seo_optimized.png"
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    desc: "Looks perfect on all devices.",
    className: "md:col-span-1",
    bgImage: "/images/mobile_responsive.png"
  },
  {
    icon: Paintbrush,
    title: "Modern Design",
    desc: "Premium aesthetics that WOW users.",
    className: "md:col-span-1",
    bgImage: "/images/modern_design.png"
  },
  {
    icon: Lock,
    title: "Secure Architecture",
    desc: "Enterprise-grade security built-in.",
    className: "md:col-span-1",
    bgImage: "/images/secure_architecture.png"
  },
  {
    icon: TrendingUp,
    title: "Scalable Development",
    desc: "Grows effortlessly with your business.",
    className: "md:col-span-2 bg-gradient-to-br from-pink-500/10 to-orange-500/10",
    bgImage: "/images/scalable_development.png"
  },
];

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Clients <span className="text-gradient">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just build websites; we engineer digital experiences that give you a competitive edge.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`relative glass-card p-6 rounded-2xl flex flex-col justify-between ${feature.className} border border-white/5 hover:border-white/10 transition-colors group cursor-default overflow-hidden`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-500" 
                style={{ backgroundImage: `url(${feature.bgImage})` }} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/90" />
              
              <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-md shadow-lg border border-white/10">
                <feature.icon className="w-6 h-6 text-foreground drop-shadow-md" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{feature.title}</h3>
                <p className="text-gray-200 text-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

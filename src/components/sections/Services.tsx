"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Smartphone, ShoppingCart, LayoutTemplate, Megaphone, Palette, Film, Camera } from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description: "Designed to maximize conversions and turn clicks into customers.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Monitor,
    title: "Business Websites",
    description: "Professional websites that build trust and establish authority.",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    description: "Sell products online with ease using high-performance platforms.",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Smartphone,
    title: "Custom Web Applications",
    description: "Dashboards, portals, and SaaS platforms tailored to your needs.",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Megaphone,
    title: "Meta Ads & Marketing",
    description: "Data-driven ad campaigns designed to maximize ROI and scale your business.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Stunning visuals, logos, and branding materials that capture your unique identity.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional post-production to create engaging, high-retention video content.",
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Camera,
    title: "Video Production",
    description: "End-to-end video shoots and production for commercials, social media, and more.",
    color: "from-teal-500/20 to-emerald-500/20",
    iconColor: "text-teal-400",
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Services That Drive <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive digital solutions to elevate your brand and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.a
              href="#contact"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative h-full rounded-2xl glass-card p-6 overflow-hidden border border-white/10 hover:border-white/20 transition-colors block cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

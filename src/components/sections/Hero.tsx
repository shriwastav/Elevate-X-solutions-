"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Rocket, Star, Zap, CheckCircle, Smartphone, Layout } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Mouse-following glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.05), transparent 40%)`,
        }}
      />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-gradient-xy" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px] animate-gradient-xy" style={{ animationDelay: "2s" }} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djI2SDI0VjM0SDBWMjRoMjRWMEgzNnYyNGgyNnYxMEgzNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/30 text-purple-300 text-sm font-medium"
          >
            <Rocket size={16} />
            <span>Trusted Digital Growth Partner</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Websites That Turn <br className="hidden md:block" /> Visitors Into{" "}
            <span className="text-gradient">Customers</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Elevate X Solutions builds high-converting websites, landing pages, and custom web applications designed to grow your business, generate leads, and increase revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/book">
              <Button size="lg" className="text-lg w-full sm:w-auto">
                Book Free Strategy Call
              </Button>
            </Link>
            <Link href="#portfolio">
              <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto">
                View Portfolio
              </Button>
            </Link>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-4">
            {[
              { icon: Zap, text: "Fast Delivery" },
              { icon: Star, text: "SEO Optimized" },
              { icon: Smartphone, text: "Mobile First" },
              { icon: Layout, text: "Modern UI/UX" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <CheckCircle size={18} className="text-purple-500" />
                <span className="font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:h-[600px] rounded-2xl glass-card p-4 border border-white/10 shadow-2xl overflow-hidden hidden md:block"
        >
          {/* Abstract Canvas Background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30" />
          
          {/* Main IDE / Code Window */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-10 left-8 right-8 lg:left-12 lg:right-12 h-[280px] bg-[#0d1117]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 h-10 bg-white/5 border-b border-white/5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-muted-foreground font-mono">ElevateX.tsx</div>
            </div>
            <div className="p-6 font-mono text-sm text-purple-300 opacity-90 leading-loose">
              <div><span className="text-pink-400">export default function</span> <span className="text-blue-400">Agency</span>() {'{'}</div>
              <div className="pl-4 text-gray-300">return (</div>
              <div className="pl-8 text-green-400">&lt;DigitalGrowth&gt;</div>
              <div className="pl-12 text-foreground">
                &lt;StunningWebsites /&gt;<br/>
                &lt;MetaAdsCampaigns /&gt;<br/>
                &lt;HighConversionRates /&gt;
              </div>
              <div className="pl-8 text-green-400">&lt;/DigitalGrowth&gt;</div>
              <div className="pl-4 text-gray-300">);</div>
              <div>{'}'}</div>
            </div>
          </motion.div>

          {/* Floating Marketing Chart Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute bottom-12 right-8 lg:right-12 w-64 p-5 bg-black/60 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-semibold text-white">Traffic Growth</div>
              <div className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">+342%</div>
            </div>
            <div className="h-24 border-b border-l border-white/20 relative flex items-end">
                <motion.svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-purple-500"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 100 Q 20 80, 40 50 T 70 30 T 100 10 L 100 100 Z"
                    fill="url(#gradientHero)"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradientHero" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </motion.svg>
            </div>
          </motion.div>

          {/* Floating UI Notification */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-72 left-8 lg:left-12 w-60 p-4 bg-black/60 rounded-xl border border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] backdrop-blur-xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">New Client Lead!</div>
              <div className="text-xs text-muted-foreground">Just booked a strategy call</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

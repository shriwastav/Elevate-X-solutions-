"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Camera, Briefcase, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.div 
                className="text-2xl font-black tracking-tighter flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Elevate</span>
                <motion.span 
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="mx-1.5 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                >
                  X
                </motion.span>
                <span className="text-white/90">Solutions</span>
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-lg mb-6 max-w-sm">
              Building Digital Experiences That Drive Growth
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors p-2 glass-card rounded-full">
                <Camera size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors p-2 glass-card rounded-full">
                <Briefcase size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors p-2 glass-card rounded-full">
                <Code size={20} />
              </a>
              <a href="#" className="hover:text-foreground transition-colors p-2 glass-card rounded-full">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Landing Pages
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  E-Commerce Stores
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Web Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-foreground">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <Link href="#portfolio" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-foreground transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Elevate X Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

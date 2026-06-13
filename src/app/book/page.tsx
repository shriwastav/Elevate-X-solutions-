"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function BookConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Consultation request received! We will confirm with you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-24 px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-gradient">Free Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project goals, timelines, and how we can help elevate your digital presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-6 md:p-10 rounded-[2rem] border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <User size={18} />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <Mail size={18} />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Preferred Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <Calendar size={18} />
                  </div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white/80"
                    required
                  />
                </div>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground ml-1">Preferred Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                    <Clock size={18} />
                  </div>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none"
                    required
                  >
                    <option value="" disabled className="bg-zinc-900">Select a time slot</option>
                    <option value="morning" className="bg-zinc-900">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon" className="bg-zinc-900">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening" className="bg-zinc-900">Evening (4 PM - 7 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground ml-1">Project Details (Optional)</label>
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3 pointer-events-none text-muted-foreground">
                  <MessageSquare size={18} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Tell us a little bit about what you're looking to build..."
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full text-lg h-14 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                Confirm Booking
              </Button>
            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
              * If you have a Calendly link or scheduling app, we can easily swap this form out with an embed widget!
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

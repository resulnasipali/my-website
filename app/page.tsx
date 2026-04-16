"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar, Stethoscope, HeartPulse, Activity, Eye, Smile, Sparkles, UserCheck } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  { 
    id: 1, 
    title: "Oncology Center", 
    icon: Activity, 
    image: "https://images.unsplash.com/photo-1579152276503-34e85741f237",
    description: "Advanced personalized cancer treatments with state-of-the-art technology.",
    href: "/services/oncology"
  },
  { 
    id: 2, 
    title: "Organ Transplantation", 
    icon: HeartPulse, 
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136",
    description: "World-class transplant surgeries offering a renewed chance at life.",
    href: "/services/organ-transplantation"
  },
  { 
    id: 3, 
    title: "Dental Aesthetics & Implants", 
    icon: Smile, 
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95",
    description: "Recreate your smile like Hollywood stars. Painless implant and zirconium applications.",
    href: "/services/dental"
  },
  { 
    id: 4, 
    title: "Plastic & Aesthetic Surgery", 
    icon: Sparkles, 
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6",
    description: "Achieve your dream look with our expert surgeons in breast, nose aesthetics, and body shaping.",
    href: "/services/aesthetic"
  },
  { 
    id: 5, 
    title: "Advanced Hair Restoration (FUE/DHI)", 
    icon: UserCheck, 
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
    description: "Permanent, natural-looking hair transplant with DHI and FUE methods. VIP transfer included.",
    href: "/services/hair-transplant"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-primary">
        {/* Background gradient/overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c81] via-[#153e66] to-[#0A2643] opacity-90 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Premium Medical Tourism
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                A <span className="text-accent italic">Flawless</span> Experience <br/> 
                For Your Health
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                In the heart of Istanbul, world-class luxury healthcare meets VIP accommodation and transfer benefits. Take the first step towards a new you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" className="text-base font-semibold gap-2">
                  <Phone size={20} />
                  Book Free Consultation
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:text-white border border-white/30 hover:bg-white/10 text-base font-semibold gap-2">
                  <Calendar size={20} />
                  Explore Treatments
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "10K+", label: "Happy Patients" },
              { number: "50+", label: "Expert Doctors" },
              { number: "3", label: "Fully Equipped Hospitals" },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-color-background-light">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary text-sm font-bold uppercase tracking-wider mb-3">Our Treatments</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-main leading-tight">
                Entrust Your Beauty and Health <br/>
                to the <span className="text-accent italic">Experts</span>
              </h3>
            </div>
            <Button variant="outline" className="shrink-0 w-fit">
              View All Treatments
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard 
                key={idx}
                title={service.title}
                description={service.description}
                icon={<service.icon size={28} />}
                image={service.image}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MapPinned, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

const hospitals = [
  {
    name: "Acibadem Hospital Group",
    location: "Maslak, Altunizade (Istanbul)",
    description: "JCI-accredited, Turkey's leading private healthcare institution. Offers the latest robotic surgery technology and comfortable patient rooms.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
    features: ["JCI Accreditation", "VIP Rooms", "International Patient Dept"],
  },
  {
    name: "Memorial Sisli Hospital",
    location: "Sisli (Istanbul)",
    description: "Located in the center of Istanbul, a prestigious hospital known for its patient-oriented approach, providing world-class service in every branch of medicine.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
    features: ["Advanced Imaging", "Translator Support", "Central Location"],
  },
  {
    name: "Liv Hospital Ulus",
    location: "Ulus (Istanbul)",
    description: "A healthcare center with luxury architecture and a 360-degree quality understanding, featuring an expert staff of doctors.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    features: ["Premium Accommodation", "Robotic Surgery", "Personalized Service"],
  }
];

export default function HospitalsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-text-main pt-20 pb-20 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Partner <span className="text-accent italic">Hospitals</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Our technological partners holding the world's most respected international certificates (JCI) to ensure your treatment goes flawlessly.
          </motion.p>
        </div>
      </section>

      {/* List */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-col gap-12">
            {hospitals.map((hospital, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow flex items-center gap-1.5 text-xs font-bold text-green-700">
                    <ShieldCheck size={16} /> ISO & JCI 
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                    <MapPinned size={16} className="text-accent" />
                    {hospital.location}
                  </div>
                  
                  <h2 className="text-3xl font-serif font-bold text-text-main mb-4">
                    {hospital.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {hospital.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {hospital.features.map(feature => (
                      <span key={feature} className="bg-primary/5 text-primary text-xs font-bold px-3 py-1.5 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button variant="secondary" className="gap-2">
                      <PhoneCall size={18} />
                      Get Detailed Info
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

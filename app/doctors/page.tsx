"use client";

import { motion } from "framer-motion";
import { Star, Award, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

const doctors = [
  {
    name: "Op. Dr. Ahmet Yilmaz",
    specialty: "Plastic and Reconstructive Surgeon",
    experience: "15+ Years",
    hospitals: ["Acibadem", "Memorial"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Prof. Dr. Ayse Demir",
    specialty: "Hair Transplant and Medical Aesthetics",
    experience: "20+ Years",
    hospitals: ["Voguemed Clinic"],
    image: "https://images.unsplash.com/photo-1594824419586-ddcb2409540c?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Dt. Canan Kaya",
    specialty: "Aesthetic Dentist",
    experience: "12 Years",
    hospitals: ["Dentalium"],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Op. Dr. Mehmet Oz",
    specialty: "Bariatric & Metabolic Surgeon",
    experience: "18 Years",
    hospitals: ["Liv Hospital"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  }
];

export default function DoctorsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Page Header */}
      <section className="bg-primary pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 mix-blend-overlay" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Our Expert <span className="text-accent italic">Doctors</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            A reliable treatment process awaits you with Turkey's most distinguished and experienced surgeons. The perfect harmony of modern medicine and aesthetics.
          </motion.p>
        </div>
      </section>

      {/* Rota (Breadcrumb) could go here */}

      {/* Doctors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm text-xs font-bold text-primary flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      4.9/5
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-text-main mb-1">{doc.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{doc.specialty}</p>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center text-sm text-gray-600">
                      <Award size={16} className="text-accent shrink-0 mr-3" />
                      <span>{doc.experience} Experience</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-600">
                      <MapPin size={16} className="text-accent shrink-0 mr-3 mt-0.5" />
                      <span>{doc.hospitals.join(", ")}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full justify-center">
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Smile, Activity, HeartPulse, Eye, Scissors, Dna, Bone, Stethoscope } from "lucide-react";

const allServices = [
  {
    category: "Dental & Oral Health",
    items: [
      { title: "Implant Treatment", description: "Restores your missing teeth to a natural look with artificial roots.", icon: Smile, href: "#" },
      { title: "Zirconium Crown", description: "Aesthetic, durable, and tissue-friendly perfect smile design.", icon: Smile, href: "#" },
      { title: "Hollywood Smile", description: "A flawless harmony of gum and dental aesthetics with porcelain lamina.", icon: Smile, href: "#" }
    ]
  },
  {
    category: "Hair Transplant Center",
    items: [
      { title: "FUE Hair Transplant", description: "Painless, scarless, and maximum graft extraction with a micro motor.", icon: Scissors, href: "#" },
      { title: "DHI Hair Transplant", description: "Unshaven, denser, and natural-looking pen technique.", icon: Scissors, href: "#" },
      { title: "PRP Hair Treatment", description: "Cell renewal using plasma obtained from your own blood.", icon: Dna, href: "#" }
    ]
  },
  {
    category: "Aesthetic & Plastic Surgery",
    items: [
      { title: "Rhinoplasty", description: "Natural nose design tailored to your facial features.", icon: HeartPulse, href: "#" },
      { title: "Breast Aesthetics", description: "Ideal body proportions with augmentation, reduction, and lift.", icon: HeartPulse, href: "#" },
      { title: "Liposuction", description: "Get rid of stubborn regional fat and shape your body contours.", icon: Activity, href: "#" }
    ]
  },
  {
    category: "Eye Surgery",
    items: [
      { title: "No-Touch Laser", description: "Clear vision in seconds without touching your eye.", icon: Eye, href: "#" },
      { title: "Smart Lens", description: "Cataract treatment and a lifetime without glasses.", icon: Eye, href: "#" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-primary pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#0A2643] opacity-90" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            All <span className="text-accent italic">Our Treatments</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Our leading doctors offer personalized treatment options in JCI-approved hospitals equipped with the most modern technological facilities.
          </motion.p>
        </div>
      </section>

      {/* Categories & Services */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-4 lg:px-8">
          
          {allServices.map((categoryGroup, index) => (
            <div key={index} className="mb-20 last:mb-0">
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px bg-primary/20 flex-grow max-w-[50px] md:max-w-[100px]"></div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-text-main text-center">
                  {categoryGroup.category}
                </h2>
                <div className="h-px bg-primary/20 flex-grow"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.items.map((service, idx) => (
                  <ServiceCard 
                    key={idx}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                    delay={idx * 0.1}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

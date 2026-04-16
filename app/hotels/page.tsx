"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Coffee, Wifi, Car } from "lucide-react";
import { Button } from "@/components/ui/Button";

const hotels = [
  {
    name: "Raffles Istanbul",
    stars: 5,
    location: "Zorlu Center, Besiktas",
    description: "Experience comfort in Istanbul's most prestigious location during your treatment process, with luxury rooms overlooking the Bosphorus and a flawless approach to hospitality.",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d14abace?q=80&w=800&auto=format&fit=crop",
    amenities: ["Bosphorus View", "Spa & Wellness", "VIP Transfer"],
  },
  {
    name: "Hilton Istanbul Bosphorus",
    stars: 5,
    location: "Sisli",
    description: "A legendary hotel that stands out for its proximity to our hospital locations, historical texture, and peaceful lush gardens.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    amenities: ["Outdoor Pool", "Central Location", "Private Assistant"],
  },
  {
    name: "Divan Istanbul",
    stars: 5,
    location: "Taksim",
    description: "A comfortable and stylish accommodation alternative in the heart of Istanbul, combining traditional Turkish hospitality with modern luxury.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c0d13c23?q=80&w=800&auto=format&fit=crop",
    amenities: ["Gourmet Restaurant", "Fitness Center", "Free Wi-Fi"],
  }
];

export default function HotelsPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-primary/5 pt-20 pb-20 relative overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-text-main mb-6"
          >
            Luxurious and Comfortable <span className="text-primary italic">Accommodation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            So you can solely focus on your treatment, we organize your stay in Istanbul's most exclusive 5-star hotels along with your VIP transfer processes.
          </motion.p>
        </div>
      </section>

      {/* List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {hotels.map((hotel, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1.5 rounded-lg flex items-center gap-1">
                    {[...Array(hotel.stars)].map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-3">
                    <MapPin size={16} className="text-accent" />
                    {hotel.location}
                  </div>
                  
                  <h2 className="text-2xl font-serif font-bold text-text-main mb-4 group-hover:text-primary transition-colors">
                    {hotel.name}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">
                    {hotel.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 mb-6">
                    <div className="flex flex-col items-center gap-1 text-gray-500">
                      <Wifi size={20} className="text-primary/70" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">Wi-Fi</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-500">
                      <Coffee size={20} className="text-primary/70" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">Breakfast</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-gray-500">
                      <Car size={20} className="text-primary/70" />
                      <span className="text-[10px] uppercase font-bold tracking-wider">Transfer</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-primary/20 hover:border-primary">
                    Reservation Details
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

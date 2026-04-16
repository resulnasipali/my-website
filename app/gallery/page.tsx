"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const categories = ["All", "Hair Transplant", "Dental Aesthetics", "Aesthetic Surgery"];

const galleryItems = [
  { id: 1, category: "Hair Transplant", before: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=600&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop" },
  { id: 2, category: "Dental Aesthetics", before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop&blur=5", after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop" }, // Dummy conceptual images
  { id: 3, category: "Aesthetic Surgery", before: "https://images.unsplash.com/photo-1512413913076-79cbf2ab8e6f?q=80&w=600&auto=format&fit=crop&blur=5", after: "https://images.unsplash.com/photo-1512413913076-79cbf2ab8e6f?q=80&w=600&auto=format&fit=crop" },
  { id: 4, category: "Hair Transplant", before: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=600&auto=format&fit=crop", after: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop" },
  { id: 5, category: "Dental Aesthetics", before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop&blur=2", after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-primary/5 pt-20 pb-16 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6"
          >
            Before & <span className="text-primary italic">After</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Take a look at the successful outcomes of hundreds of our patients whose lives were changed by the touch of experts. We design the exact same results for you.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-md" 
                    : "bg-white text-gray-600 hover:bg-white hover:text-primary hover:shadow"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-background-light flex-grow">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group"
                >
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden cursor-crosshair">
                     {/* B/A Wrapper concept (Side by side for demo purposes) */}
                     <div className="absolute inset-0 flex">
                        <div className="w-1/2 h-full relative border-r-2 border-white">
                          <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                          <div className="absolute top-3 left-3 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-[10px] font-bold uppercase tracking-wider">
                            Before
                          </div>
                        </div>
                        <div className="w-1/2 h-full relative">
                          <img src={item.after} alt="After" className="w-full h-full object-cover" />
                          <div className="absolute top-3 right-3 bg-accent/90 backdrop-blur px-2 py-1 rounded text-white text-[10px] font-bold uppercase tracking-wider">
                            After
                          </div>
                        </div>
                     </div>
                     {/* Hover Overlay */}
                     <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-primary transform scale-50 group-hover:scale-100 transition-transform duration-300">
                          <Search size={20} />
                        </div>
                     </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-text-main text-sm">{item.category}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

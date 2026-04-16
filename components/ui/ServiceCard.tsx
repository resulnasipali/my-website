"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
  image?: string;
}

export function ServiceCard({ title, description, icon: Icon, href, delay = 0, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={href} className="group block h-full">
        <div className="bg-white border border-gray-100 rounded-2xl h-full shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
          
          {image && (
            <div className="relative w-full h-56 overflow-hidden shrink-0">
               <Image 
                 src={image} 
                 fill 
                 alt={title} 
                 className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
               <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300 z-10">
                  <Icon size={24} />
               </div>
            </div>
          )}
          
          <div className="p-6 md:p-8 flex flex-col flex-1 relative bg-white">
            {!image && (
              <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon size={28} />
              </div>
            )}
            
            <h3 className="text-xl font-serif font-bold text-text-main mb-3 group-hover:text-primary transition-colors mt-2">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-6 line-clamp-3 flex-1">
              {description}
            </p>
            
            <div className="flex items-center text-accent font-medium mt-auto">
              <span>İncele</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

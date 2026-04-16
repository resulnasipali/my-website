"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "What is a Dental Implant and How is it Done?",
    excerpt: "All details about implant treatment, the most reliable method for treating missing teeth. Recovery process and aesthetic expectations...",
    category: "Dentistry",
    date: "12 Nov 2023",
    author: "Dt. Canan Kaya",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "10 Golden Rules to Consider After a Hair Transplant",
    excerpt: "A guide on the critical steps to take and avoid during the recovery process, directly affecting the success of your operation.",
    category: "Hair Transplant",
    date: "05 Oct 2023",
    author: "Prof. Dr. Ayse Demir",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1594824419586-ddcb2409540c?q=80&w=800&auto=format&fit=crop", // placeholder
  },
  {
    title: "Hollywood Smile: Latest Trends in Aesthetic Dentistry",
    excerpt: "Achieving a whiter, more proportional, and radiant smile is now much easier. New year trends with porcelain laminas and zirconium crowns.",
    category: "Aesthetics",
    date: "28 Sep 2023",
    author: "Dt. Canan Kaya",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Who is Bariatric Surgery Suitable For?",
    excerpt: "Get rid of obesity in months with gastric sleeve and gastric bypass surgery. Conditions of the procedure and postpartum nutrition process.",
    category: "Surgery",
    date: "14 Aug 2023",
    author: "Op. Dr. Mehmet Oz",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
  }
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      
      {/* Header */}
      <section className="bg-text-main pt-20 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-4 py-1.5 rounded-full bg-white/10 text-accent text-sm font-semibold mb-6 tracking-widest uppercase"
          >
            Knowledge Base
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-white mb-6"
          >
            Answers to <span className="text-accent italic">All Your Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            The most reliable and up-to-date information right from the pen of our expert doctors on processes, recovery details, and treatment trends.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group flex flex-col"
              >
                {/* Image */}
                <Link href="#" className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-6 shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                    {post.category}
                  </div>
                </Link>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="text-accent" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-accent" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-accent" />
                    {post.readTime}
                  </div>
                </div>

                {/* Content */}
                <Link href="#">
                  <h2 className="text-2xl font-serif font-bold text-text-main mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link href="#" className="inline-flex items-center text-sm font-bold text-primary group-hover:text-accent transition-colors mt-auto">
                  Read More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-600 font-medium hover:border-primary hover:text-primary transition-colors">
              Load More Posts
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

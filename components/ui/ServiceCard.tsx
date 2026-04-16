import Image from 'next/image';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

export default function ServiceCard({ title, description, icon, image }: ServiceCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Görsel Alanı - Mobilde yüksekliği 48, masaüstünde 56 */}
      {image && (
        <div className="relative w-full h-48 sm:h-56">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      {/* Metin ve İkon Alanı */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-blue-600 p-2 bg-blue-50 rounded-lg">{icon}</div>}
          <h3 className="text-xl font-bold text-gray-900 leading-tight">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
}

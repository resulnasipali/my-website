import ServiceCard from '@/components/ui/ServiceCard';
import { Activity, HeartPulse, Smile, Sparkles, UserCheck, Scale } from 'lucide-react';

export const metadata = {
  title: 'Medical Treatments | Voguemed Istanbul',
  description: 'Premium healthcare services in Istanbul, Turkey.',
};

const services = [
  {
    id: 1,
    title: "Weight Loss & Bariatric Surgery",
    description: "Sleeve Gastrectomy, Mini Gastric Bypass, RNY Gastric Bypass, SADI-S, Transit Bipartition, Gastric Balloon (6-month) & Removal, Gastric Botox.",
    icon: <Scale className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Dental Aesthetics & Implants",
    description: "Hollywood Smile design, advanced implant technologies, zirconium crowns, and comprehensive oral and maxillofacial surgery.",
    icon: <Smile className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Plastic & Aesthetic Surgery",
    description: "Rhinoplasty, breast aesthetics, body contouring, liposuction, and reconstructive surgeries tailored to your unique beauty.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Hair Restoration (FUE & DHI)",
    description: "Advanced Sapphire FUE and DHI hair transplant techniques for natural, dense, and permanent results with VIP accommodation.",
    icon: <UserCheck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Oncology Center",
    description: "Comprehensive cancer care including Medical Oncology and Radiation Oncology utilizing the latest global protocols.",
    icon: <Activity className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1579152276503-34e85741f237?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Organ Transplantation",
    description: "Specialized kidney and liver transplantation centers featuring internationally renowned surgical professors.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4 tracking-tight">Our Medical Centers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience world-class healthcare with Voguemed Istanbul. We combine advanced medical technology with luxury hospitality.
          </p>
        </div>

        {/* Responsive Grid Yapısı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

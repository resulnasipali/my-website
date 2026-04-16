import ServiceCard from '@/components/ui/ServiceCard';
import { Activity, HeartPulse, Smile, Sparkles, UserCheck, Scale, Thermometer, Microscope } from 'lucide-react';

export const metadata = {
  title: 'Medical Treatments | Voguemed Istanbul',
  description: 'Premium healthcare services in Istanbul, Turkey.',
};

const allServices = [
  {
    id: 1,
    title: "Bariatric & Metabolic Surgery",
    description: "Comprehensive weight loss solutions: Sleeve Gastrectomy, Mini Gastric Bypass, RNY Gastric Bypass, SADI-S, and Transit Bipartition for long-term metabolic health.",
    icon: <Scale className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Non-Surgical Weight Loss",
    description: "Endoscopic Gastric Balloon (6-month) and its safe removal, plus Gastric Botox injections for appetite control without surgery.",
    icon: <Thermometer className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Dental Aesthetics & Implants",
    description: "Hollywood Smile design, Zirconium crowns, and high-success rate dental implants using the latest European and JDM technologies.",
    icon: <Smile className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Plastic & Aesthetic Surgery",
    description: "Premium Body Contouring, Rhinoplasty, Liposuction, and Breast Aesthetics performed by internationally certified surgeons.",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Advanced Hair Restoration",
    description: "Sapphire FUE and DHI hair transplant techniques. High-density results with professional graft management and VIP aftercare.",
    icon: <UserCheck className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Oncology & Cancer Care",
    description: "State-of-the-art Medical and Radiation Oncology services following global protocols for diagnosis and treatment.",
    icon: <Activity className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1579152276503-34e85741f237?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    title: "Organ Transplantation",
    description: "Elite center for Kidney and Liver transplantation, led by top-tier professors and specialized clinical teams.",
    icon: <HeartPulse className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    title: "Advanced Check-up & Diagnosis",
    description: "Whole-body MRI and Genetic Profiling for early detection and personalized health management.",
    icon: <Microscope className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1581594632702-f232329b1cc1?auto=format&fit=crop&q=80"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-6 tracking-tight">
            Premium Treatments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Voguemed Istanbul offers a curated selection of high-end medical procedures. 
            From metabolic surgery to advanced aesthetics, we prioritize your health and comfort.
          </p>
        </div>

        {/* Responsive Grid: Mobilde 1, Tablette 2, Masaüstünde 3 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allServices.map((service) => (
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

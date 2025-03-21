import { Button } from "@/components/ui/button";
import {
  ChefHat,
  Flame,
  Hammer,
  PenTool,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <PenTool className='h-10 w-10 text-primary' />,
    title: "Custom Design",
    description:
      "Our expert designers work with you to create the perfect outdoor kitchen layout tailored to your space and needs.",
  },
  {
    icon: <Hammer className='h-10 w-10 text-primary' />,
    title: "Professional Installation",
    description:
      "Our skilled craftsmen handle every aspect of installation with precision and care.",
  },
  {
    icon: <Flame className='h-10 w-10 text-primary' />,
    title: "Premium Appliances",
    description:
      "We offer top-of-the-line grills, smokers, pizza ovens, and more from trusted brands.",
  },
  {
    icon: <ChefHat className='h-10 w-10 text-primary' />,
    title: "Cooking Islands",
    description:
      "Custom-built cooking islands with countertops, storage, and seating options.",
  },
  {
    icon: <Wrench className='h-10 w-10 text-primary' />,
    title: "Maintenance & Repair",
    description:
      "Keep your outdoor kitchen in top condition with our maintenance and repair services.",
  },
  {
    icon: <ShieldCheck className='h-10 w-10 text-primary' />,
    title: "Warranty Protection",
    description:
      "All our installations come with comprehensive warranty coverage for your peace of mind.",
  },
];

export default function Services() {
  return (
    <div className='container'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Services</h2>
        <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
        <p className='max-w-2xl mx-auto text-muted-foreground'>
          From design to installation, we provide comprehensive outdoor kitchen
          solutions to bring your culinary dreams to life.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-primary/20 bg-card dark:bg-card/90 hover:border-primary/50 hover:translate-y-[-5px]'
          >
            <div className='mb-4 bg-primary/10 p-3 rounded-full inline-block'>
              {service.icon}
            </div>
            <h3 className='text-xl font-bold mb-3 text-primary/90'>
              {service.title}
            </h3>
            <p className='text-muted-foreground dark:text-gray-300'>
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-16 text-center'>
        <Button asChild size='lg' className='bg-primary hover:bg-primary/90'>
          <a href='#contact'>Request a Service</a>
        </Button>
      </div>
    </div>
  );
}

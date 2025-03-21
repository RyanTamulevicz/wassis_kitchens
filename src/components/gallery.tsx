import { Button } from "@/components/ui/button";
import React from "react";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className='container'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Work</h2>
        <div className='w-20 h-1 bg-primary mx-auto mb-6'></div>
        <p className='max-w-2xl mx-auto text-muted-foreground'>
          Browse through our portfolio of stunning outdoor kitchen projects
          we've completed for satisfied customers.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {images.map((image, index) => (
          <div
            key={index}
            className='relative group overflow-hidden rounded-lg'
          >
            <div className='aspect-[4/3] relative'>
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <p className='text-white text-center px-4'>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-12 text-center'>
        <Button asChild size='lg' className='bg-primary hover:bg-primary/90'>
          <a href='#contact'>Get Your Dream Kitchen</a>
        </Button>
      </div>
    </div>
  );
}

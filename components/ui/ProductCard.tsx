import React from 'react';
import Image from 'next/image';
import { Button } from './Button';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  isNew?: boolean;
  isSpicy?: boolean;
}

export const ProductCard = ({ title, description, price, imageUrl, isNew, isSpicy }: ProductCardProps) => {
  return (
    <article className="bg-card rounded-xl overflow-hidden border border-white/5 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-64 w-full bg-background/50">
        <Image 
          src={imageUrl} 
          alt={`Imagen de ${title}`} 
          fill 
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Nuevo</span>}
          {isSpicy && <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Picante 🌶️</span>}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-bold text-textMain m-0">{title}</h3>
          <span className="text-xl font-bold text-primary">{price}</span>
        </div>
        <p className="text-textMuted text-sm leading-relaxed">{description}</p>
        <div className="mt-2">
          <Button variant="secondary" className="w-full text-sm py-2">Añadir al Pedido</Button>
        </div>
      </div>
    </article>
  );
};


import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '@/utils/data';
import { cn } from '@/lib/utils';
import { useFadeIn } from '@/utils/animations';

interface CategoryCardProps {
  category: Category;
  className?: string;
  index?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, className, index = 0 }) => {
  const [ref, isVisible] = useFadeIn();

  return (
    <Link 
      // @ts-ignore
      ref={ref}
      to={`/category/${category.id}`} 
      className={cn(
        "group relative flex flex-col bg-white rounded-xl overflow-hidden subtle-shadow hover-lift",
        "border border-quickit-silver/20 h-40",
        isVisible ? "animate-scale-in" : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${index * 80}ms`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-quickit-black/20 to-quickit-black/60 z-10" />
      
      <img 
        src={category.image} 
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="relative z-20 mt-auto p-4 text-white">
        <h3 className="font-medium">{category.name}</h3>
        <p className="text-sm text-white/80 mt-1">{category.productsCount} products</p>
      </div>
    </Link>
  );
};

export default CategoryCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Product } from '@/utils/data';
import { useCart } from '@/context/CartContext';
import { useFadeIn } from '@/utils/animations';

interface ProductCardProps {
  product: Product;
  className?: string;
  index?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className, index = 0 }) => {
  const { addToCart } = useCart();
  const [ref, isVisible] = useFadeIn();
  
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount 
    ? (product.price - (product.price * (product.discount! / 100))).toFixed(2) 
    : null;

  return (
    <div 
      // @ts-ignore
      ref={ref} 
      className={cn(
        "flex flex-col bg-white rounded-xl overflow-hidden subtle-shadow hover-lift",
        "transition-all duration-300 group",
        isVisible ? "animate-scale-in" : "opacity-0",
        className
      )}
      style={{
        animationDelay: `${index * 80}ms`,
        transformOrigin: 'center'
      }}
    >
      <Link to={`/product/${product.id}`} className="relative overflow-hidden rounded-t-xl aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {hasDiscount && (
          <Badge className="absolute top-2 right-2 bg-red-500 border-0">
            {product.discount}% OFF
          </Badge>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-medium text-quickit-black truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.weight}</p>
          </Link>
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline space-x-1.5">
            {hasDiscount ? (
              <>
                <span className="font-medium text-quickit-black">${discountedPrice}</span>
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium text-quickit-black">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="h-8 w-8 rounded-full bg-quickit-gray hover:bg-quickit-mint hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

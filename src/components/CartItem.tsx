
import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  weight?: string;
  discount?: number;
  className?: string;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  quantity,
  weight,
  discount,
  className,
}) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const hasDiscount = discount && discount > 0;
  const discountedPrice = hasDiscount 
    ? (price - (price * (discount / 100))).toFixed(2) 
    : null;
  
  const itemTotal = hasDiscount 
    ? parseFloat(discountedPrice || '0') * quantity 
    : price * quantity;

  return (
    <div className={cn(
      "flex items-start space-x-4 py-4 animate-fade-in",
      className
    )}>
      <div className="relative h-20 w-20 rounded-md overflow-hidden bg-quickit-gray flex-shrink-0">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      
      <div className="flex-grow min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-quickit-black truncate pr-4">{name}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{weight}</p>
          </div>
          
          <Button
            variant="ghost" 
            size="icon"
            className="h-8 w-8 text-muted-foreground hover:text-red-500 -mt-1 -mr-2"
            onClick={() => removeFromCart(id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-baseline space-x-1.5">
            {hasDiscount ? (
              <>
                <span className="font-medium text-quickit-black">${discountedPrice}</span>
                <span className="text-sm text-muted-foreground line-through">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-medium text-quickit-black">${price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-quickit-gray"
              onClick={() => updateQuantity(id, quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center font-medium">{quantity}</span>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full bg-quickit-gray"
              onClick={() => updateQuantity(id, quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

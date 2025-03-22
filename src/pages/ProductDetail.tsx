
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Share2, 
  Heart,
  Truck,
  Clock,
  ShieldCheck
} from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { products } from '@/utils/data';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen bg-quickit-light-gray">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-2xl font-bold text-quickit-black">Product not found</h1>
          <Button 
            className="mt-4" 
            variant="outline"
            onClick={() => navigate('/')}
          >
            Go back to home
          </Button>
        </div>
      </div>
    );
  }
  
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount 
    ? (product.price - (product.price * (product.discount / 100))).toFixed(2) 
    : null;
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-quickit-light-gray">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-quickit-black hover:text-quickit-mint transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span>Back</span>
        </button>
        
        <div className="bg-white rounded-2xl subtle-shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-quickit-gray rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              {hasDiscount && (
                <Badge className="absolute top-4 left-4 bg-red-500 border-0">
                  {product.discount}% OFF
                </Badge>
              )}
              
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/80 backdrop-blur-sm hover:bg-white">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <div>
                <span className="text-sm text-muted-foreground">{product.weight}</span>
                <h1 className="text-2xl font-bold text-quickit-black mt-1">{product.name}</h1>
                
                <div className="flex items-baseline mt-3">
                  {hasDiscount ? (
                    <>
                      <span className="text-2xl font-bold text-quickit-black">${discountedPrice}</span>
                      <span className="ml-2 text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="text-2xl font-bold text-quickit-black">${product.price.toFixed(2)}</span>
                  )}
                </div>
                
                <Separator className="my-6" />
                
                <div className="prose text-quickit-black">
                  <p>{product.description}</p>
                </div>
                
                <Separator className="my-6" />
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center p-3 rounded-lg bg-quickit-gray/50">
                    <Truck className="h-5 w-5 text-quickit-mint mb-2" />
                    <span className="text-xs text-center">Free Delivery</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-quickit-gray/50">
                    <Clock className="h-5 w-5 text-quickit-mint mb-2" />
                    <span className="text-xs text-center">10 Min Delivery</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-lg bg-quickit-gray/50">
                    <ShieldCheck className="h-5 w-5 text-quickit-mint mb-2" />
                    <span className="text-xs text-center">Quality Assured</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-quickit-silver rounded-full overflow-hidden">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="rounded-none h-10 w-10"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-medium">{quantity}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="rounded-none h-10 w-10"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <span className="text-sm text-muted-foreground">
                    {product.stock} available
                  </span>
                </div>
                
                <Button 
                  className="w-full mt-6 bg-quickit-mint hover:bg-quickit-mint/90 text-white"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-quickit-black mb-6">You might also like</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

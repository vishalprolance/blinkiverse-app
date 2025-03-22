
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import Header from '@/components/Header';
import CartItem from '@/components/CartItem';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { toast } from "sonner";

const Cart = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;
  
  const handleCheckout = () => {
    toast.success("Order placed successfully!");
    clearCart();
    setTimeout(() => navigate('/'), 1500);
  };

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
        
        <h1 className="text-2xl font-bold text-quickit-black mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-2xl subtle-shadow p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-quickit-gray flex items-center justify-center mx-auto">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="mt-6 text-xl font-medium text-quickit-black">Your cart is empty</h2>
            <p className="mt-2 text-muted-foreground">Add items to your cart to see them here.</p>
            <Button 
              className="mt-6 bg-quickit-mint hover:bg-quickit-mint/90 text-white"
              onClick={() => navigate('/')}
            >
              Start Shopping
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl subtle-shadow overflow-hidden">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-quickit-black mb-4">Cart Items ({items.length})</h2>
                  
                  <div className="divide-y divide-quickit-silver/20">
                    {items.map((item, index) => (
                      <CartItem 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                        weight={item.weight}
                        discount={item.discount}
                        className={index === 0 ? 'pt-0' : ''}
                      />
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full hover:bg-red-50 hover:text-red-500 hover:border-red-200"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl subtle-shadow overflow-hidden sticky top-20">
                <div className="p-6">
                  <h2 className="text-lg font-medium text-quickit-black mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                    
                    <Button 
                      className="w-full mt-4 bg-quickit-mint hover:bg-quickit-mint/90 text-white"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                    
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Free delivery for orders above $20
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

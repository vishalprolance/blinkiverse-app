
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Home, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const { itemCount } = useCart();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  // Change header appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const NavLinks = () => (
    <>
      <Link to="/" className={cn(
        "relative font-medium px-3 py-2 text-sm transition-colors hover:text-quickit-mint",
        location.pathname === "/" ? "text-quickit-mint" : "text-quickit-black"
      )}>
        Home
      </Link>
      <Link to="/categories" className={cn(
        "relative font-medium px-3 py-2 text-sm transition-colors hover:text-quickit-mint",
        location.pathname === "/categories" ? "text-quickit-mint" : "text-quickit-black"
      )}>
        Categories
      </Link>
      <Link to="/offers" className={cn(
        "relative font-medium px-3 py-2 text-sm transition-colors hover:text-quickit-mint",
        location.pathname === "/offers" ? "text-quickit-mint" : "text-quickit-black"
      )}>
        Offers
      </Link>
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-8",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-white py-4"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/" className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100">
                    <Home className="h-5 w-5" />
                    <span>Home</span>
                  </Link>
                  <Link to="/categories" className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100">
                    <Search className="h-5 w-5" />
                    <span>Categories</span>
                  </Link>
                  <Link to="/offers" className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100">
                    <span>🏷️</span>
                    <span>Offers</span>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          )}
          
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-quickit-mint h-9 w-9 rounded-md flex items-center justify-center">
              <span className="font-bold text-white">Q</span>
            </div>
            <span className="font-bold text-xl tracking-tight">Quickit</span>
          </Link>
          
          {!isMobile && (
            <nav className="hidden md:flex items-center ml-10 space-x-4">
              <NavLinks />
            </nav>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-quickit-mint text-white">
                  {itemCount}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

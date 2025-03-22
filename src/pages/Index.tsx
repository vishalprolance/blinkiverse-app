
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories, featuredProducts, products } from '@/utils/data';
import { useFadeIn } from '@/utils/animations';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [heroRef, heroVisible] = useFadeIn();
  const [searchRef, searchVisible] = useFadeIn();
  const [bestSellerRef, bestSellerVisible] = useFadeIn();
  
  return (
    <div className="min-h-screen bg-quickit-light-gray pb-20">
      <Header />
      
      {/* Hero Section */}
      <section 
        // @ts-ignore
        ref={heroRef} 
        className={`relative py-12 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
          heroVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-white p-6 md:p-10 subtle-shadow overflow-hidden relative">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 z-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-quickit-black leading-tight">
                  Groceries delivered in 10 minutes
                </h1>
                <p className="mt-4 text-muted-foreground text-lg">
                  Fresh groceries, everyday essentials, and more delivered to your doorstep.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Button className="bg-quickit-mint hover:bg-quickit-mint/90 text-white">
                    Shop Now
                  </Button>
                  <Button variant="outline">
                    Browse Categories
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=720&auto=format&fit=crop" 
                  alt="Fresh grocery items" 
                  className="rounded-xl mx-auto md:ml-auto object-cover h-auto max-h-80 w-full subtle-shadow"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full subtle-shadow">
                  <span className="font-bold text-quickit-mint">10 min</span>
                  <span className="text-quickit-black"> delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section 
        // @ts-ignore
        ref={searchRef} 
        className={`px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
          searchVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for groceries, fruits, vegetables..."
              className="w-full pl-11 py-6 rounded-xl subtle-shadow border-0 focus-visible:ring-quickit-mint"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="mt-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-quickit-black">Categories</h2>
            <Link to="/categories" className="text-quickit-mint hover:text-quickit-mint/80 flex items-center text-sm font-medium">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section 
        // @ts-ignore
        ref={bestSellerRef} 
        className={`mt-16 px-4 sm:px-6 lg:px-8 transition-opacity duration-500 ${
          bestSellerVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-quickit-black">Best Sellers</h2>
            <Link to="/products" className="text-quickit-mint hover:text-quickit-mint/80 flex items-center text-sm font-medium">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {products.slice(0, 10).map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Products Banner */}
      <section className="mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-r from-[#4CD964]/10 to-[#4CD964]/5 p-6 md:p-8 subtle-shadow overflow-hidden relative">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-quickit-black">Special Offers</h2>
              <p className="mt-2 text-muted-foreground">
                Limited-time discounts on these premium products
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featuredProducts.map((product, index) => (
                  <div 
                    key={product.id}
                    className="bg-white rounded-xl p-4 flex items-center space-x-4 animate-fade-in subtle-shadow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-quickit-gray flex-shrink-0">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-quickit-black line-clamp-1">{product.name}</h3>
                      <div className="flex items-baseline space-x-1.5 mt-1">
                        {product.discount ? (
                          <>
                            <span className="font-medium text-quickit-mint">
                              ${(product.price - (product.price * (product.discount / 100))).toFixed(2)}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="font-medium text-quickit-black">${product.price.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

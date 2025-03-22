
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  weight?: string;
  stock: number;
  discount?: number;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  image: string;
  productsCount: number;
}

export const categories: Category[] = [
  {
    id: "c1",
    name: "Fruits & Vegetables",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 142,
  },
  {
    id: "c2",
    name: "Dairy & Breakfast",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 86,
  },
  {
    id: "c3",
    name: "Snacks",
    image: "https://images.unsplash.com/photo-1621939514649-eef1e1a46d5b?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 72,
  },
  {
    id: "c4",
    name: "Beverages",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 124,
  },
  {
    id: "c5",
    name: "Home & Cleaning",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 56,
  },
  {
    id: "c6",
    name: "Personal Care",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=300&h=300&auto=format&fit=crop",
    productsCount: 78,
  },
];

export const products: Product[] = [
  {
    id: "p1",
    name: "Fresh Organic Avocado",
    description: "Ripe, ready-to-eat avocados with a creamy texture and rich flavor.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=300&auto=format&fit=crop",
    category: "c1",
    weight: "1 unit (approx. 200g)",
    stock: 48,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: "p2",
    name: "Organic Blueberries",
    description: "Sweet and juicy blueberries, packed with antioxidants.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=300&auto=format&fit=crop",
    category: "c1",
    weight: "125g pack",
    stock: 36,
    discount: 10,
    tags: ["organic", "fresh", "fruit"],
  },
  {
    id: "p3",
    name: "Artisanal Sourdough Bread",
    description: "Handcrafted sourdough with a crispy crust and soft interior.",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1555951015-6da916b36e09?q=80&w=300&auto=format&fit=crop",
    category: "c2",
    weight: "450g loaf",
    stock: 24,
    tags: ["bakery", "artisanal", "breakfast"],
  },
  {
    id: "p4",
    name: "Greek Yogurt",
    description: "Creamy, protein-rich Greek yogurt with a smooth texture.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=300&auto=format&fit=crop",
    category: "c2",
    weight: "500g tub",
    stock: 42,
    discount: 15,
    tags: ["dairy", "breakfast", "protein"],
  },
  {
    id: "p5",
    name: "Organic Honey",
    description: "Pure, unfiltered honey with a rich, amber color.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=300&auto=format&fit=crop",
    category: "c2",
    weight: "340g jar",
    stock: 18,
    tags: ["organic", "breakfast", "natural"],
  },
  {
    id: "p6",
    name: "Dark Chocolate Sea Salt",
    description: "Premium dark chocolate with a hint of sea salt.",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=300&auto=format&fit=crop",
    category: "c3",
    weight: "100g bar",
    stock: 56,
    tags: ["snack", "sweet", "gourmet"],
  },
  {
    id: "p7",
    name: "Kettle Cooked Chips",
    description: "Crunchy, hand-cooked potato chips with sea salt.",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?q=80&w=300&auto=format&fit=crop",
    category: "c3",
    weight: "150g bag",
    stock: 64,
    discount: 5,
    tags: ["snack", "savory", "chips"],
  },
  {
    id: "p8",
    name: "Cold Brew Coffee",
    description: "Smooth, low-acidity coffee brewed cold for 12 hours.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1560704429-1b7f08738bf4?q=80&w=300&auto=format&fit=crop",
    category: "c4",
    weight: "330ml bottle",
    stock: 32,
    tags: ["beverage", "coffee", "cold"],
  },
  {
    id: "p9",
    name: "Sparkling Water 6-Pack",
    description: "Refreshing sparkling water with natural flavors.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1578508053004-88c3c7344ec8?q=80&w=300&auto=format&fit=crop",
    category: "c4",
    weight: "6 x 330ml cans",
    stock: 28,
    discount: 20,
    tags: ["beverage", "sparkling", "refreshing"],
  },
  {
    id: "p10",
    name: "Natural Dish Soap",
    description: "Plant-based dish soap that's tough on grease but gentle on hands.",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1550963295-fabdd8e66dcf?q=80&w=300&auto=format&fit=crop",
    category: "c5",
    weight: "500ml bottle",
    stock: 45,
    tags: ["cleaning", "eco-friendly", "kitchen"],
  },
  {
    id: "p11",
    name: "Bamboo Toothbrush",
    description: "Eco-friendly bamboo toothbrush with soft bristles.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=300&auto=format&fit=crop",
    category: "c6",
    weight: "1 unit",
    stock: 38,
    tags: ["personal care", "eco-friendly", "bathroom"],
  },
  {
    id: "p12",
    name: "Organic Shampoo",
    description: "Gentle, sulfate-free shampoo made with organic ingredients.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1604231775368-9256928a9451?q=80&w=300&auto=format&fit=crop",
    category: "c6",
    weight: "250ml bottle",
    stock: 27,
    discount: 15,
    tags: ["personal care", "organic", "hair"],
  },
];

export const featuredProducts = products.filter(p => p.id === "p2" || p.id === "p4" || p.id === "p9" || p.id === "p12");

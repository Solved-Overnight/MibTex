export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isNewArrival: boolean;
  isPopular: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Classic Knit Sweater",
    category: "men",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1631541410976-c2816b83d771?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium wool blend knit sweater in classic fit",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Women's Turtleneck Knit Top",
    category: "women",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Soft ribbed turtleneck in seasonal colors",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 3,
    name: "Kids' Cozy Hoodie",
    category: "kids",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comfortable cotton blend hoodie for children",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 4,
    name: "Men's Slim Fit Denim Jeans",
    category: "men",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Premium stretch denim in modern slim fit",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 5,
    name: "Women's Knit Cardigan",
    category: "women",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Versatile button-up cardigan for layering",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 6,
    name: "Unisex Oversized Hoodie",
    category: "men",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Streetwear-inspired oversized hoodie",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 7,
    name: "Women's High-Waist Denim",
    category: "women",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic high-waisted jeans with perfect fit",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 8,
    name: "Kids' Knit Sweater Dress",
    category: "kids",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Adorable sweater dress for little ones",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 9,
    name: "Men's Cable Knit Pullover",
    category: "men",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Traditional cable knit pattern in modern cut",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 10,
    name: "Women's Knit Pencil Skirt",
    category: "women",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant ribbed knit pencil skirt",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 11,
    name: "Kids' Denim Overalls",
    category: "kids",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Playful and durable denim overalls",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 12,
    name: "Men's Denim Jacket",
    category: "men",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic denim jacket with modern details",
    isNewArrival: false,
    isPopular: true,
  }
];

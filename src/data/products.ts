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
    name: "Men's Crewneck Sweatshirt",
    category: "men",
    price: 12.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_dropsholder1.jpg",
    description: "Perfect for cool weather layering.",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 2,
    name: "Women's Knit Cardigan",
    category: "women",
    price: 19.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/woman_item4.jpg",
    description: "Slim fit, stylish for cooler days.",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 3,
    name: "Men's Polo Shirt",
    category: "men",
    price: 10.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_poloshirt2.jpg",
    description: "Short sleeves and a slim fit",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 4,
    name: "Drop Shoulder Sweatshirt",
    category: "men",
    price: 15.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_dropsholder2.jpg",
    description: "Ideal for casual outings and cozy layers",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 5,
    name: "Women's Crewneck Sweatshirt",
    category: "women",
    price: 12.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/woman_item5.jpg",
    description: "Stylish and cozy for everyday wear",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 6,
    name: "Men's Quarter-Zip Sweatshirt",
    category: "men",
    price: 12.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_chain1.jpg",
    description: "Perfect for layering or wearing solo",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 7,
    name: "Women's High-Waist Denim",
    category: "women",
    price: 18.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/women_denim_1.jpg",
    description: "Classic high-waisted jeans with perfect fit",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 8,
    name: "Men's Denim Streetwear Jacket",
    category: "men",
    price: 24.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/men_denim_1.jpg",
    description: "For a bold, street-ready look",
    isNewArrival: true,
    isPopular: false,
  },
  {
    id: 9,
    name: "Unisex Oversized Hoodie",
    category: "men",
    price: 14.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_hoodie1.jpg",
    description: "Streetwear-inspired oversized hoodie",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 10,
    name: "Men's 'DESIGNER' Graphic Tee",
    category: "men",
    price: 9.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/man_tshirt1.jpg",
    description: "Slim fit and ultra-soft cotton for everyday",
    isNewArrival: false,
    isPopular: true,
  },
  {
    id: 11,
    name: "Kids' Summer Playwear Set",
    category: "kids",
    price: 20.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/child_denim_1.jpg",
    description: "Offers comfort and charm in every step",
    isNewArrival: true,
    isPopular: true,
  },
  {
    id: 12,
    name: "Women's Ribbed Cardigan",
    category: "women",
    price: 14.99,
    image: "https://raw.githubusercontent.com/Solved-Overnight/MibTex/refs/heads/main/img/collections/woman_item3.jpg",
    description: "A cozy essential with timeless style.",
    isNewArrival: false,
    isPopular: true,
  }
];

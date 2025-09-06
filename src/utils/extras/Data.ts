import prods from '../../../DataWithCategories.json';
import prods2 from '../../../csvjson.json';
import { v4 as uuidv4 } from 'uuid';

export interface Product {
  id: string;
  name: string;
  main_category: string;
  sub_category: string;
  image: string;
  link: string;
  ratings: number;
  no_of_ratings: number;
  discount_price: string;
  actual_price: string;
  real_category?: string | null;
  quantity: number;
  warranty: number;
}

const normalizeProduct = (p: any): Product => ({
  id: uuidv4(),
  name: p.name || "Unknown",
  main_category: p.main_category || "All",
  sub_category: p.sub_category || "All",
  image: p.image || "",
  link: p.link,
  ratings: typeof p.ratings === "number" ? p.ratings : parseFloat(p.ratings) || 0,
  no_of_ratings: typeof p.no_of_ratings === "number" 
    ? p.no_of_ratings 
    : typeof p.no_of_ratings === "string"
      ? parseInt(p.no_of_ratings.replace(/,/g, '')) || 0
      : 0,
  discount_price: p.discount_price?.toString().replace(/[₹,]/g, '') || p.actual_price.toString().replace(/[₹,]/g, ''),
  actual_price: p.actual_price?.toString().replace(/[₹,]/g, '') || "3000",
  real_category: p.real_category || null,
  quantity: 1,
  warranty: 1,
});

export const TestProducts: Product[] = (prods as any[]).slice(0, 200).map(normalizeProduct);
export const TestProducts2: Product[] = (prods2 as any[]).slice(0, 200).map(normalizeProduct);

export const allProducts: Product[] = [...TestProducts, ...TestProducts2];


export const locations = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Moscow",
  "Rio de Janeiro",
  "Cape Town",
  "Toronto",
  "Dubai",
  "Singapore",
  "Barcelona",
  "Rome",
  "Amsterdam",
  "Mumbai",
  "Seoul",
  "Buenos Aires",
  "Mexico City",
  "Cairo",
  "Bangkok",
  "Istanbul",
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Hong Kong",
  "Lagos",
  "Lisbon",
  "Stockholm",
  "Vienna",
  "Jakarta",
  "Kuala Lumpur",
  "Athens",
  "Helsinki",
  "Budapest",
  "Warsaw",
  "Prague",
  "Melbourne",
  "Brussels",
  "Vancouver",
  "Montreal",
  "Dublin",
  "Zurich",
  "Oslo",
  "Copenhagen",
  "Auckland",
  "Manila",
  "Lima",
  "Bogotá",
];


export const BUSINESS_NAME = "Flovey";
export const DOMAIN = "flovey.in";
export const WHATSAPP_NUMBER = "918374927539"; 
export const INSTAGRAM_HANDLE = "flovey.in";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  altText: string;
}

export const CATEGORIES = [
  "All",
  "Roses",
  "Birthday",
  "Anniversary",
  "Wedding",
  "Custom"
];

export const PRODUCTS: Product[] = [
  {
    id: "FLV-BQ-001",
    name: "Blush & Peony Pastel Bouquet",
    price: 950,
    category: "Anniversary",
    description: "A dreamy hand-tied bouquet featuring soft blush peonies and ivory roses wrapped in premium silk paper.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800&auto=format&fit=crop",
    altText: "Pastel peony and rose bouquet delivery Bengaluru - Flovey"
  },
  {
    id: "FLV-BQ-002",
    name: "Wildflower Meadow Bouquet",
    price: 650,
    category: "Birthday",
    description: "An effortless mix of seasonal field flowers and daisies, perfect for a rustic morning surprise.",
    image: "https://images.unsplash.com/photo-1596434448565-f938f99e691d?q=80&w=800&auto=format&fit=crop",
    altText: "Rustic wildflower hand-tied bouquet Bangalore - Flovey"
  },
  {
    id: "FLV-BQ-003",
    name: "Lavender Orchid Dream",
    price: 1200,
    category: "Anniversary",
    description: "Elegant lavender orchids paired with white spray roses for a sophisticated floral statement.",
    image: "https://images.unsplash.com/photo-1522673607200-16488321499b?q=80&w=800&auto=format&fit=crop",
    altText: "Purple orchid and white rose bouquet Bengaluru - Flovey"
  },
  {
    id: "FLV-BQ-004",
    name: "Sunshine Gerbera Bouquet",
    price: 799,
    category: "Birthday",
    description: "A bright and cheerful arrangement of yellow and orange gerberas to celebrate milestones.",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&auto=format&fit=crop",
    altText: "Yellow gerbera flower bouquet delivery Bangalore - Flovey"
  },
  {
    id: "FLV-BQ-005",
    name: "Classic White Lily Bouquet",
    price: 899,
    category: "Wedding",
    description: "Stunning white oriental lilies and baby's breath, embodying purity and elegance.",
    image: "https://images.unsplash.com/photo-1525310238833-28682979269d?q=80&w=800&auto=format&fit=crop",
    altText: "White lily wedding bouquet Bengaluru - Flovey"
  },
  {
    id: "FLV-BQ-006",
    name: "Peach Sorbet Rose Bouquet",
    price: 999,
    category: "Roses",
    description: "12 premium peach-colored roses with silver-dollar eucalyptus for a modern aesthetic.",
    image: "https://images.unsplash.com/photo-1533616688419-b7a585564566?q=80&w=800&auto=format&fit=crop",
    altText: "Peach rose and eucalyptus bouquet delivery Bengaluru - Flovey"
  },
  {
    id: "FLV-BQ-007",
    name: "Minimalist Baby's Breath",
    price: 499,
    category: "Custom",
    description: "A large, airy cloud of fresh baby's breath wrapped in eco-friendly brown craft paper.",
    image: "https://images.unsplash.com/photo-1523694553227-b182df09965d?q=80&w=800&auto=format&fit=crop",
    altText: "Minimalist baby's breath bouquet Bangalore - Flovey"
  },
  {
    id: "FLV-BQ-008",
    name: "Ruby Velvet Rose Bouquet",
    price: 1450,
    category: "Roses",
    description: "Deep red velvet roses meticulously arranged for the ultimate romantic gesture.",
    image: "https://images.unsplash.com/photo-1550505393-8c4749383675?q=80&w=800&auto=format&fit=crop",
    altText: "Red velvet rose romantic bouquet Bengaluru - Flovey"
  }
];

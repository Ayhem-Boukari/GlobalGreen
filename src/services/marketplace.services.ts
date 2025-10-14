interface MarketplaceItem {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: "HydroCoins" | "BioCoins" | "LogiCoins" | "CarbonCredits";
  image: string;
  rating: number;
  stock: number;
  isFeatured?: boolean;
}

export async function getMarketplaceItems(): Promise<MarketplaceItem[]> {
  // Fake delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      name: "Drip Irrigation Kit",
      description: "Efficient water-saving irrigation system.",
      price: 500,
      currency: "HydroCoins",
      image: "images/products/drip-irrigation-kit.jpg",
      rating: 4.5,
      stock: 10,
      isFeatured: true,
    },
    {
      id: 2,
      name: "Organic Fertilizer Pack",
      description: "High-quality organic fertilizers for healthy crops.",
      price: 300,
      currency: "BioCoins",
      image: "images/products/organic-fertilizer-pack.avif",
      rating: 4.0,
      stock: 5,
    },
    {
      id: 3,
      name: "Electric Delivery Vehicle",
      description: "Eco-friendly vehicle for farm logistics.",
      price: 1000,
      currency: "LogiCoins",
      image: "images/products/electric-delivery-vehicle.avif",
      rating: 5.0,
      stock: 2,
    },
    {
      id: 4,
      name: "Solar-Powered Water Pump",
      description: "Sustainable water pump powered by solar energy.",
      price: 800,
      currency: "CarbonCredits",
      image: "images/products/solar-powered-water-pump.jpg",
      rating: 4.2,
      stock: 0,
    },
    {
      id: 5,
      name: "Compost Bin",
      description: "Convert waste into nutrient-rich compost.",
      price: 200,
      currency: "BioCoins",
      image: "images/products/compost-bin.webp",
      rating: 3.8,
      stock: 15,
    },
    {
      id: 6,
      name: "Rainwater Harvesting System",
      description: "Collect and store rainwater for irrigation.",
      price: 600,
      currency: "HydroCoins",
      image: "images/products/rainwater-harvesting-system.jpg",
      rating: 4.7,
      stock: 8,
    },
  ];
}

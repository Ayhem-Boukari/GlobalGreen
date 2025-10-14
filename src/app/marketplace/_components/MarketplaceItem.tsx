import { Droplet, Leaf, Truck, Cloud, Star } from "lucide-react";

interface MarketplaceItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    currency: "HydroCoins" | "BioCoins" | "LogiCoins" | "CarbonCredits";
    image: string;
    rating: number;
    stock: number;
    isFeatured?: boolean;
  };
}

export function MarketplaceItem({ item }: MarketplaceItemProps) {
  const {
    name,
    description,
    price,
    currency,
    image,
    rating,
    stock,
    isFeatured,
  } = item;

  // Icon for the currency
  const currencyIcon = {
    HydroCoins: <Droplet className="h-5 w-5 text-blue-500" />,
    BioCoins: <Leaf className="h-5 w-5 text-green-500" />,
    LogiCoins: <Truck className="h-5 w-5 text-orange-500" />,
    CarbonCredits: <Cloud className="h-5 w-5 text-gray-500" />,
  }[currency];

  return (
    <div className="group relative rounded-lg bg-white p-4 shadow-lg transition-transform dark:bg-gray-dark dark:shadow-card">
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute right-2 top-2 z-99 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-white">
          Featured
        </div>
      )}

      {/* Item Image */}
      <div className="mb-4 h-60 w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

      {/* Item Details */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-dark dark:text-white">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating ? "text-yellow-400" : "text-gray-300"
              }`}
              fill={index < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Price and Stock */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {currencyIcon}
            <p className="text-lg font-bold text-dark dark:text-white">
              {price} {currency}
            </p>
          </div>
          <p
            className={`text-sm ${
              stock > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stock > 0 ? `${stock} in stock` : "Out of stock"}
          </p>
        </div>

        {/* Buy Button */}
        <button
          disabled={stock === 0}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {stock > 0 ? "Buy Now" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
}

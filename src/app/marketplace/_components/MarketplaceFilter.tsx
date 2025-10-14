"use client";
import { useState } from "react";
import { Droplet, Leaf, Truck, Cloud } from "lucide-react";

export function MarketplaceFilter() {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("price"); // Default sort by price

  const currencies = [
    { type: "HydroCoins", icon: <Droplet className="h-4 w-4 text-blue-500" /> },
    { type: "BioCoins", icon: <Leaf className="h-4 w-4 text-green-500" /> },
    { type: "LogiCoins", icon: <Truck className="h-4 w-4 text-orange-500" /> },
    {
      type: "CarbonCredits",
      icon: <Cloud className="h-4 w-4 text-gray-500" />,
    },
  ];

  const sortOptions = [
    { value: "price", label: "Price" },
    { value: "rating", label: "Rating" },
    { value: "popularity", label: "Popularity" },
  ];

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-dark dark:shadow-card">
      <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
        Filters
      </h3>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2.5 text-sm focus:border-primary focus:outline-none dark:border-dark-3 dark:focus:border-primary"
        />
      </div>

      {/* Currency Filter */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-medium text-dark dark:text-white">
          Currency
        </h4>
        <div className="flex flex-wrap gap-2">
          {currencies.map((currency) => (
            <button
              key={currency.type}
              onClick={() =>
                setSelectedCurrencies((prev) =>
                  prev.includes(currency.type)
                    ? prev.filter((c) => c !== currency.type)
                    : [...prev, currency.type],
                )
              }
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCurrencies.includes(currency.type)
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-dark hover:bg-gray-200 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-4"
              }`}
            >
              {currency.icon}
              <span>{currency.type}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h4 className="mb-3 text-sm font-medium text-dark dark:text-white">
          Sort By
        </h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-lg border border-stroke bg-transparent px-4 py-2.5 text-sm focus:border-primary focus:outline-none dark:border-dark-3 dark:focus:border-primary"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={() => {
          setSelectedCurrencies([]);
          setSearchQuery("");
          setSortBy("price"); // Reset sort to default
        }}
        className="w-full rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-dark transition-colors hover:bg-gray-200 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-4"
      >
        Reset Filters
      </button>
    </div>
  );
}

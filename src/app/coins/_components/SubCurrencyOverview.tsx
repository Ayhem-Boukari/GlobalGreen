import { getCoinBalances } from "@/services/coins.services";
import { Droplet, Leaf, Truck, Cloud } from "lucide-react";

export async function SubCurrencyOverview() {
  const balances = await getCoinBalances();
  const subCurrencies = balances.filter(
    (balance) => balance.type !== "EcoCoins",
  );

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-6 text-xl font-bold text-dark dark:text-white">
        Sub-Currency Breakdown
      </h2>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        These are the points contributing to your EcoCoins balance. They are
        calculated based on your sustainable farming actions.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {subCurrencies.map((balance, index) => (
          <div
            key={index}
            className={`rounded-[10px] p-6 ${
              balance.type === "HydroCoins"
                ? "bg-gradient-to-r from-blue-500 to-blue-600"
                : balance.type === "BioCoins"
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                  : balance.type === "LogiCoins"
                    ? "bg-gradient-to-r from-orange-500 to-orange-600"
                    : "bg-gradient-to-r from-gray-500 to-gray-600"
            }`}
          >
            <div className="flex items-center justify-between">
              {/* Coin Icon */}
              {balance.type === "HydroCoins" ? (
                <Droplet className="size-8 text-white" />
              ) : balance.type === "BioCoins" ? (
                <Leaf className="size-8 text-white" />
              ) : balance.type === "LogiCoins" ? (
                <Truck className="size-8 text-white" />
              ) : (
                <Cloud className="size-8 text-white" />
              )}

              {/* Coin Amount */}
              <p className="text-2xl font-bold text-white">
                {balance.amount} <span className="text-xl">Points</span>
              </p>
            </div>

            {/* Coin Details */}
            <div className="mt-4">
              <p className="text-lg font-medium text-white">{balance.type}</p>
              <p className="text-sm text-white/80">{balance.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

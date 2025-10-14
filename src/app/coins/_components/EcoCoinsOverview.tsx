import { Coins, ArrowRight } from "lucide-react";
import { getCoinBalances } from "@/services/coins.services";

export async function EcoCoinsOverview() {
  const balances = await getCoinBalances();
  const ecoCoins = balances.find((balance) => balance.type === "EcoCoins");

  return (
    <div className="rounded-[10px] bg-gradient-to-r from-purple-500 to-purple-600 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Coins className="h-12 w-12 text-white" />
          <div>
            <p className="text-2xl font-bold text-white">
              {ecoCoins?.amount} EcoCoins
            </p>
            <p className="text-sm text-white/80">
              Your blockchain-based sustainable farming currency
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <button className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          Go to Marketplace <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Blockchain Actions */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          Transfer EcoCoins
        </button>
        <button className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          Sell EcoCoins
        </button>
        <button className="flex-1 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          View Transactions
        </button>
      </div>
    </div>
  );
}

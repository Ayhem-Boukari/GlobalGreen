import { Suspense } from "react";
import {
  CoinTransactionsSkeleton,
  EcoCoinsOverviewSkeleton,
  SubCurrencyOverviewSkeleton,
  GreenLoanOverviewSkeleton,
  CoinEarningsSkeleton,
} from "./_components/skeletons";
import { EcoCoinsOverview } from "./_components/EcoCoinsOverview";
import { SubCurrencyOverview } from "./_components/SubCurrencyOverview";
import { GreenLoanOverview } from "./_components/GreenLoanOverview";
import { CoinEarnings } from "./_components/CoinEarnings";
import { CoinTransactionsTable } from "./_components/CoinTransactionsTable";

export default function CoinsPage() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">
        Coin Management
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="space-y-6 lg:col-span-2">
          {/* EcoCoins Overview */}
          <div>
            <Suspense fallback={<EcoCoinsOverviewSkeleton />}>
              <EcoCoinsOverview />
            </Suspense>
          </div>

          {/* Sub-Currency Overview */}
          <div>
            <Suspense fallback={<SubCurrencyOverviewSkeleton />}>
              <SubCurrencyOverview />
            </Suspense>
          </div>

          {/* Coin Transactions Table */}
          <div>
            <Suspense fallback={<CoinTransactionsSkeleton />}>
              <CoinTransactionsTable />
            </Suspense>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:col-span-1">
          {/* Green Loan Overview */}
          <div>
            <Suspense fallback={<GreenLoanOverviewSkeleton />}>
              <GreenLoanOverview />
            </Suspense>
          </div>

          {/* Coin Earnings */}
          <div>
            <Suspense fallback={<CoinEarningsSkeleton />}>
              <CoinEarnings />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

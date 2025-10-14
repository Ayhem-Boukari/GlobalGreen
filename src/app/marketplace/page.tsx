import { Suspense } from "react";
import {
  MarketplaceItemSkeleton,
  MarketplacePaginationSkeleton,
} from "./_components/skeletons";
import { MarketplaceItem } from "./_components/MarketplaceItem";
import { getMarketplaceItems } from "@/services/marketplace.services";
import { MarketplaceFilter } from "./_components/MarketplaceFilter";
import { Pagination } from "./_components/Pagination";
import { MarketplaceBanner } from "./_components/MarketplaceBanner";

export default function MarketplacePage() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="mb-8 text-4xl font-bold text-dark dark:text-white">
        Marketplace
      </h1>

      {/* Banner */}
      <MarketplaceBanner />

      {/* Filter and Products Grid */}
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Marketplace Items Grid */}
        <div className="w-full space-y-8 lg:w-3/4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<MarketplaceItemSkeleton />}>
              <MarketplaceItems />
            </Suspense>
          </div>

          {/* Pagination Skeleton */}
          <Suspense fallback={<MarketplacePaginationSkeleton />}>
            <Pagination currentPage={1} totalPages={5} />
          </Suspense>
        </div>

        {/* Filter Section (Sticky on larger screens) */}
        <div className="w-full lg:sticky lg:top-6 lg:h-screen lg:w-1/4 lg:overflow-y-auto">
          <MarketplaceFilter />
        </div>
      </div>
    </div>
  );
}

async function MarketplaceItems() {
  const items = await getMarketplaceItems();

  return (
    <>
      {items.map((item) => (
        <MarketplaceItem key={item.id} item={item} />
      ))}
    </>
  );
}

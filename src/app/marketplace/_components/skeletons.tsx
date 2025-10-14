export function MarketplaceItemSkeleton() {
  return (
    <div className="group relative rounded-lg bg-white p-4 shadow-lg transition-transform dark:bg-gray-dark dark:shadow-card">
      {/* Image Skeleton */}
      <div className="mb-4 h-60 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700"></div>

      {/* Item Details Skeleton */}
      <div className="space-y-3">
        {/* Title Skeleton */}
        <div className="h-6 w-3/4 rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        {/* Description Skeleton */}
        <div className="h-4 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>

        {/* Rating Skeleton */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full bg-gray-200 dark:bg-gray-700"
            ></div>
          ))}
        </div>

        {/* Price and Stock Skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-4 w-16 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Buy Button Skeleton */}
        <div className="h-10 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}

export function MarketplacePaginationSkeleton() {
  return (
    <div className="mt-8 flex justify-center gap-2">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="h-10 w-10 rounded-lg bg-gray-200 dark:bg-gray-700"
        ></div>
      ))}
    </div>
  );
}

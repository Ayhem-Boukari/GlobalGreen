export function EcoCoinsOverviewSkeleton() {
  return (
    <div className="rounded-[10px] bg-gray-200 p-6 dark:bg-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          <div className="space-y-2">
            <div className="h-6 w-32 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          </div>
        </div>
        <div className="h-10 w-32 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="mt-4">
        <div className="h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="mt-6 flex gap-4">
        <div className="h-10 flex-1 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
        <div className="h-10 flex-1 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
        <div className="h-10 flex-1 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </div>
  );
}

export function SubCurrencyOverviewSkeleton() {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-700">
      <div className="mb-6 h-6 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      <div className="mb-6 h-4 w-64 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="rounded-[10px] bg-gray-200 p-6 dark:bg-gray-600"
          >
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-gray-300 dark:bg-gray-500"></div>
              <div className="h-6 w-20 rounded-lg bg-gray-300 dark:bg-gray-500"></div>
            </div>
            <div className="mt-4">
              <div className="h-4 w-24 rounded-lg bg-gray-300 dark:bg-gray-500"></div>
              <div className="mt-2 h-3 w-32 rounded-lg bg-gray-300 dark:bg-gray-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GreenLoanOverviewSkeleton() {
  return (
    <div className="rounded-[10px] bg-gray-200 p-6 dark:bg-gray-700">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-6 w-32 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          <div className="mt-2 h-4 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
        </div>
        <div className="h-10 w-24 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      </div>
      <div className="mt-6 space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <div className="h-4 w-24 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
              <div className="mt-2 h-3 w-32 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="h-6 w-20 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoinEarningsSkeleton() {
  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-700">
      <div className="mb-6 h-6 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-4 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
              <div className="h-4 w-16 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CoinTransactionsSkeleton() {
  return (
    <div className="rounded-[10px] bg-white p-4 shadow-1 dark:bg-gray-700 sm:p-7.5">
      <div className="mb-6 flex items-center justify-between">
        <div className="h-6 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
        <div className="flex items-center gap-4">
          <div className="h-10 w-48 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          <div className="h-10 w-24 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
        </div>
      </div>
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="h-4 w-24 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-16 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-16 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-16 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
            <div className="h-4 w-16 rounded-lg bg-gray-300 dark:bg-gray-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

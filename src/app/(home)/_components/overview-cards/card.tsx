import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp } from "lucide-react"; // Import Lucide icons
import type { LucideProps } from "lucide-react"; // Import LucideProps for type safety
import type { JSX } from "react";

type PropsType = {
  label: string;
  data: {
    value: number | string;
    growthRate: number;
  };
  Icon: React.ComponentType<LucideProps>; // Updated type to accept Lucide icons
};

export function OverviewCard({ label, data, Icon }: PropsType) {
  const isDecreasing = data.growthRate < 0;

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      {/* Render the Lucide icon */}
      <Icon className="h-10 w-10 text-primary" />{" "}
      {/* Customize icon size and color */}
      <div className="mt-6 flex items-end justify-between">
        {/* Main value and label */}
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>
          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>

        {/* Growth rate with arrow icon */}
        <dl
          className={cn(
            "text-sm font-medium",
            isDecreasing ? "text-red-500" : "text-green-500", // Use Tailwind's red and green colors
          )}
        >
          <dt className="flex items-center gap-1.5">
            {data.growthRate}%
            {isDecreasing ? (
              <ArrowDown className="h-4 w-4" aria-hidden /> // Lucide arrow down icon
            ) : (
              <ArrowUp className="h-4 w-4" aria-hidden /> // Lucide arrow up icon
            )}
          </dt>

          {/* Screen reader text for accessibility */}
          <dd className="sr-only">
            {label} {isDecreasing ? "Decreased" : "Increased"} by{" "}
            {data.growthRate}%
          </dd>
        </dl>
      </div>
    </div>
  );
}

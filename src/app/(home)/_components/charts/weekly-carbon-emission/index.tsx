import { PeriodPicker } from "@/components/period-picker";
import { cn } from "@/lib/utils";
import { WeeklyCarbonEmissionChart } from "./chart";
import { getWeeklyCarbonEmissionData } from "@/app/(home)/fetch";

type PropsType = {
  timeFrame?: string;
  className?: string;
};

export async function WeeklyCarbonEmission({
  className,
  timeFrame,
}: PropsType) {
  const data = await getWeeklyCarbonEmissionData(timeFrame);

  return (
    <div
      className={cn(
        "rounded-[10px] bg-white px-7.5 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-body-2xlg font-bold text-dark dark:text-white">
          Carbon Emissions {timeFrame || "this week"}
        </h2>

        <PeriodPicker
          items={["this week", "last week"]}
          defaultValue={timeFrame || "this week"}
          sectionKey="weekly_carbon_emission"
        />
      </div>

      <WeeklyCarbonEmissionChart data={data} />
    </div>
  );
}

import { Suspense } from "react";
import { createTimeFrameExtractor } from "@/utils/timeframe-extractor";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { ChatsCard } from "./_components/chats-card";
import { WaterUsageOverview } from "./_components/charts/water-usage";
import { WeeklyCarbonEmission } from "./_components/charts/weekly-carbon-emission";
import { SoilHealthDistribution } from "./_components/charts/soil-health-distribution";
import Socket from "./_components/socket";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <WaterUsageOverview
          className="col-span-12 xl:col-span-7"
          key={extractTimeFrame("water_usage")}
          timeFrame={extractTimeFrame("water_usage")?.split(":")[1]}
        />

        <WeeklyCarbonEmission
          key={extractTimeFrame("weekly_carbon_emission")}
          timeFrame={extractTimeFrame("weekly_carbon_emission")?.split(":")[1]}
          className="col-span-12 xl:col-span-5"
        />

        <SoilHealthDistribution
          className="col-span-12 xl:col-span-5"
          key={extractTimeFrame("soil_health_distribution")}
          timeFrame={
            extractTimeFrame("soil_health_distribution")?.split(":")[1]
          }
        />

        <Suspense fallback={null}>
          <ChatsCard />
        </Suspense>
      </div>
    </>
  );
}

"use client";

import { useEffect, useState } from "react";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { OverviewCard } from "./card";
import { Droplet, Leaf, HeartPulse, Cloud, Sun } from "lucide-react";

type SensorData = {
  water: {
    current_value: number;
    growthRate?: number;
  };
  carbon: {
    current_value: number;
    growthRate?: number;
  };
  light: {
    current_value: number;
    growthRate?: number;
  };
};

export function OverviewCardsGroup() {
  const [data, setData] = useState<SensorData | null>(null);
  const [previousData, setPreviousData] = useState<SensorData | null>(null);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5050/sensor_data");

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);

      // Calculate growth rates
      if (data) {
        const waterGrowthRate = calculateGrowthRate(
          data.water.current_value,
          newData.water.current_value,
        );
        const carbonGrowthRate = calculateGrowthRate(
          data.carbon.current_value,
          newData.carbon.current_value,
        );
        const lightGrowthRate = calculateGrowthRate(
          data.light.current_value,
          newData.light.current_value,
        );

        newData.water.growthRate = waterGrowthRate;
        newData.carbon.growthRate = carbonGrowthRate;
        newData.light.growthRate = lightGrowthRate;
      }

      setPreviousData(data); // Store the previous data
      setData(newData); // Update the current data
    };

    eventSource.onerror = () => {
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [data]);

  const calculateGrowthRate = (previousValue: number, currentValue: number) => {
    if (previousValue === 0) return 0; // Avoid division by zero
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-5 2xl:gap-7.5">
      {/* Water Saved Card */}
      <OverviewCard
        label="Water Saved"
        data={{
          value: standardFormat(data.water.current_value) + "L",
          growthRate: data.water.growthRate
            ? parseFloat(standardFormat(data.water.growthRate))
            : 0, // Handle undefined growthRate
        }}
        Icon={Droplet}
      />

      {/* Soil Health Card */}
      <OverviewCard
        label="Soil Health"
        data={{
          value: 85 + "%",
          growthRate: -5, // Example growth rate
        }}
        Icon={Leaf}
      />

      <OverviewCard
        label="Carbon Credits"
        data={{
          value: compactFormat(data.carbon.current_value) + " CT",
          growthRate: data.carbon.growthRate
            ? parseFloat(standardFormat(data.carbon.growthRate))
            : 0, // Handle undefined growthRate
        }}
        Icon={Cloud}
      />

      <OverviewCard
        label="Light Intensity"
        data={{
          value: compactFormat(data.light.current_value) + " LUX",
          growthRate: data.light.growthRate
            ? parseFloat(standardFormat(data.light.growthRate))
            : 0, // Handle undefined growthRate
        }}
        Icon={Sun}
      />

      {/* EcoScore Card */}
      <OverviewCard
        label="EcoScore"
        data={{
          value: 850,
          growthRate: 3, // Example growth rate
        }}
        Icon={HeartPulse}
      />
    </div>
  );
}

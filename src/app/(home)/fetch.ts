export async function getOverviewData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    waterSaved: {
      value: 15000,
      growthRate: 12,
    },
    soilHealth: {
      value: 85,
      growthRate: -5,
    },
    carbonCredits: {
      value: 1200,
      growthRate: 8,
    },
    ecoScore: {
      value: 850,
      growthRate: 3,
    },
  };
}

export async function getWaterUsageData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "yearly") {
    return {
      consumed: [
        { x: 2020, y: 45000 },
        { x: 2021, y: 42000 },
        { x: 2022, y: 40000 },
        { x: 2023, y: 38000 },
        { x: 2024, y: 35000 },
      ],
      saved: [
        { x: 2020, y: 5000 },
        { x: 2021, y: 8000 },
        { x: 2022, y: 10000 },
        { x: 2023, y: 12000 },
        { x: 2024, y: 15000 },
      ],
    };
  }

  return {
    consumed: [
      { x: "Jan", y: 4000 },
      { x: "Feb", y: 3800 },
      { x: "Mar", y: 3500 },
      { x: "Apr", y: 3200 },
      { x: "May", y: 3000 },
      { x: "Jun", y: 2800 },
      { x: "Jul", y: 2500 },
      { x: "Aug", y: 2300 },
      { x: "Sep", y: 2000 },
      { x: "Oct", y: 1800 },
      { x: "Nov", y: 1500 },
      { x: "Dec", y: 1200 },
    ],
    saved: [
      { x: "Jan", y: 500 },
      { x: "Feb", y: 600 },
      { x: "Mar", y: 700 },
      { x: "Apr", y: 800 },
      { x: "May", y: 900 },
      { x: "Jun", y: 1000 },
      { x: "Jul", y: 1100 },
      { x: "Aug", y: 1200 },
      { x: "Sep", y: 1300 },
      { x: "Oct", y: 1400 },
      { x: "Nov", y: 1500 },
      { x: "Dec", y: 1600 },
    ],
  };
}

export async function getWeeklyCarbonEmissionData(
  timeFrame?: "this week" | "last week" | (string & {}),
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (timeFrame === "last week") {
    return {
      emissions: [
        { x: "Mon", y: 120 },
        { x: "Tue", y: 150 },
        { x: "Wed", y: 130 },
        { x: "Thu", y: 140 },
        { x: "Fri", y: 160 },
        { x: "Sat", y: 170 },
        { x: "Sun", y: 180 },
      ],
      target: [
        { x: "Mon", y: 100 },
        { x: "Tue", y: 100 },
        { x: "Wed", y: 100 },
        { x: "Thu", y: 100 },
        { x: "Fri", y: 100 },
        { x: "Sat", y: 100 },
        { x: "Sun", y: 100 },
      ],
    };
  }

  return {
    emissions: [
      { x: "Mon", y: 100 },
      { x: "Tue", y: 120 },
      { x: "Wed", y: 110 },
      { x: "Thu", y: 130 },
      { x: "Fri", y: 140 },
      { x: "Sat", y: 150 },
      { x: "Sun", y: 160 },
    ],
    target: [
      { x: "Mon", y: 100 },
      { x: "Tue", y: 100 },
      { x: "Wed", y: 100 },
      { x: "Thu", y: 100 },
      { x: "Fri", y: 100 },
      { x: "Sat", y: 100 },
      { x: "Sun", y: 100 },
    ],
  };
}

export async function getSoilHealthDistributionData(
  timeFrame?: "monthly" | "yearly" | (string & {}),
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = [
    {
      name: "Healthy Soil",
      percentage: 0.65,
      amount: 65,
    },
    {
      name: "Moderate Soil",
      percentage: 0.2,
      amount: 20,
    },
    {
      name: "Poor Soil",
      percentage: 0.1,
      amount: 10,
    },
    {
      name: "Unknown",
      percentage: 0.05,
      amount: 5,
    },
  ];

  if (timeFrame === "yearly") {
    data[0].amount = 70;
    data[1].amount = 15;
    data[2].amount = 10;
    data[3].amount = 5;
  }

  return data;
}

export function getChatTasks() {
  const mockChatsData = [
    {
      name: "AgriWealth AI",
      profile: "/images/bot/ai-bot.jpg",
      isActive: true,
      lastMessage: {
        content:
          "Reduce water pressure to save 500L water and earn 50 HydroTokens.",
        type: "text",
        timestamp: "2024-12-19T14:30:00Z",
        isRead: false,
      },
      unreadCount: 1,
      task: {
        action: "Reduce water pressure by 10%",
        reward: 50,
        status: "pending",
      },
    },
    {
      name: "AgriWealth AI",
      profile: "/images/bot/ai-bot.jpg",
      isActive: true,
      lastMessage: {
        content:
          "Switch to drip irrigation to save 1000L water and earn 100 HydroTokens.",
        type: "text",
        timestamp: "2024-12-18T10:15:00Z",
        isRead: true,
      },
      unreadCount: 0,
      task: {
        action: "Switch to drip irrigation",
        reward: 100,
        status: "accepted",
      },
    },
    {
      name: "AgriWealth AI",
      profile: "/images/bot/ai-bot.jpg",
      isActive: true,
      lastMessage: {
        content:
          "Adjust fertilizer usage to improve soil health and earn 75 HydroTokens.",
        type: "text",
        timestamp: "2024-12-17T09:30:00Z",
        isRead: true,
      },
      unreadCount: 0,
      task: {
        action: "Adjust fertilizer usage",
        reward: 75,
        status: "completed",
      },
    },
  ];

  return mockChatsData;
}

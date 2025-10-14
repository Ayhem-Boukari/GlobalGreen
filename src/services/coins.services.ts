// data.services.js
export async function getCoinBalances() {
  // Fake delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      type: "EcoCoins",
      description: "Main blockchain-based currency for sustainable farming",
      amount: 5000,
    },
    {
      type: "HydroCoins",
      description: "Earned by saving water through efficient irrigation",
      amount: 1250,
    },
    {
      type: "BioCoins",
      description: "Earned by using bio-fertilizers and organic farming",
      amount: 750,
    },
    {
      type: "LogiCoins",
      description: "Earned by reducing harvest waste and optimizing logistics",
      amount: 600,
    },
    {
      type: "CarbonCredits",
      description: "Earned by reducing CO₂ emissions",
      amount: 300,
    },
  ];
}

export async function getCoinTransactions() {
  // Fake delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      date: "2024-12-19",
      type: "HydroCoins",
      amount: 50,
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-12-18",
      type: "BioCoins",
      amount: 100,
      status: "Pending",
    },
    {
      id: 3,
      date: "2024-12-17",
      type: "LogiCoins",
      amount: 75,
      status: "Failed",
    },
    {
      id: 4,
      date: "2024-12-16",
      type: "CarbonCredits",
      amount: 30,
      status: "Completed",
    },
    {
      id: 5,
      date: "2024-12-15",
      type: "EcoCoins",
      amount: 255,
      status: "Completed",
    },
  ];
}

export async function getEarningsTasks() {
  // Fake delay to simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      name: "Save 1000 liters of water",
      coins: 50,
      type: "HydroCoins",
      progress: 60,
    },
    {
      id: 2,
      name: "Use organic fertilizers for 1 month",
      coins: 100,
      type: "BioCoins",
      progress: 30,
    },
    {
      id: 3,
      name: "Reduce harvest waste by 10%",
      coins: 75,
      type: "LogiCoins",
      progress: 80,
    },
    {
      id: 4,
      name: "Reduce CO₂ emissions by 1 ton",
      coins: 30,
      type: "CarbonCredits",
      progress: 50,
    },
  ];
}

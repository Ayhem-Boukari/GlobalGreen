import { getEarningsTasks } from "@/services/coins.services";

export async function CoinEarnings() {
  const tasks = await getEarningsTasks();

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-6 text-xl font-bold text-dark dark:text-white">
        Earn More Coins
      </h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-dark dark:text-white">{task.name}</p>
              <p className="font-bold text-green-500">+{task.coins} Coins</p>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-dark-3">
              <div
                className="h-2 rounded-full bg-blue-500"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { getCoinTransactions } from "@/services/coins.services";
import dayjs from "dayjs";
import { Download, Eye, Trash2, Search, Filter } from "lucide-react";

export async function CoinTransactionsTable() {
  const transactions = await getCoinTransactions();

  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      {/* Table Header with Search and Filter */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-dark dark:text-white">
          Recent Transactions
        </h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="rounded-lg border border-stroke bg-transparent py-2 pl-10 pr-4 dark:border-dark-3"
            />
          </div>
          <button className="flex items-center gap-2 rounded-lg border border-stroke bg-transparent px-4 py-2 dark:border-dark-3">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Transactions Table */}
      <Table>
        <TableHeader>
          <TableRow className="border-none bg-[#F7F9FC] dark:bg-dark-2 [&>th]:py-4 [&>th]:text-base [&>th]:text-dark [&>th]:dark:text-white">
            <TableHead className="min-w-[155px] xl:pl-7.5">Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right xl:pr-7.5">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="border-[#eee] dark:border-dark-3">
              <TableCell className="min-w-[155px] xl:pl-7.5">
                <p className="text-dark dark:text-white">
                  {dayjs(transaction.date).format("MMM DD, YYYY")}
                </p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">{transaction.type}</p>
              </TableCell>

              <TableCell>
                <p className="text-dark dark:text-white">
                  {transaction.amount} Coins
                </p>
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "max-w-fit rounded-full px-3.5 py-1 text-sm font-medium",
                    {
                      "bg-[#219653]/[0.08] text-[#219653]":
                        transaction.status === "Completed",
                      "bg-[#D34053]/[0.08] text-[#D34053]":
                        transaction.status === "Failed",
                      "bg-[#FFA70B]/[0.08] text-[#FFA70B]":
                        transaction.status === "Pending",
                    },
                  )}
                >
                  {transaction.status}
                </div>
              </TableCell>

              <TableCell className="xl:pr-7.5">
                <div className="flex items-center justify-end gap-x-3.5">
                  <button className="hover:text-primary">
                    <span className="sr-only">View Details</span>
                    <Eye />
                  </button>

                  <button className="hover:text-red">
                    <span className="sr-only">Delete Transaction</span>
                    <Trash2 />
                  </button>

                  <button className="hover:text-primary">
                    <span className="sr-only">Download Receipt</span>
                    <Download />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Summary Row */}
      <div className="mt-6 flex justify-end">
        <div className="rounded-lg bg-[#F7F9FC] px-4 py-2 dark:bg-dark-2">
          <p className="text-dark dark:text-white">
            Total Transactions: {transactions.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export function GreenLoanOverview() {
  const loans = [
    {
      type: "Solar Panel Loan",
      amount: "$10,000",
      interestRate: "3%",
      description: "For installing solar panels on your farm",
    },
    {
      type: "EV Logistics Loan",
      amount: "$5,000",
      interestRate: "4%",
      description: "For purchasing electric vehicles for logistics",
    },
    {
      type: "Organic Farming Loan",
      amount: "$7,000",
      interestRate: "5%",
      description: "For transitioning to organic farming practices",
    },
  ];

  return (
    <div className="rounded-[10px] bg-gradient-to-r from-green-500 to-green-600 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-2xl font-bold text-white">Green Loans</p>
          <p className="text-sm text-white/80">
            Low-interest loans for sustainable farming
          </p>
        </div>
        <button className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          Apply Now
        </button>
      </div>

      {/* Loan List */}
      <div className="mt-6 space-y-4">
        {loans.map((loan, index) => (
          <div key={index} className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-white">{loan.type}</p>
              <p className="text-sm text-white/80">{loan.description}</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-white">{loan.amount}</p>
              <p className="text-sm text-white/80">
                Interest Rate: {loan.interestRate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { getBadgeVariant } from "@/app/helpers";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import TableData from "@/components/ui/table/TableData";
import TableHead from "@/components/ui/table/TableHead";
import TableRow from "@/components/ui/table/TableRow";
import TableWrapper from "@/components/ui/table/TableWrapper";
import { useState } from "react";

export default function OverviewTab() {
  //   interface DashboardSummary {
  //     totalBalance: number;
  //     totalCredits: number;
  //     totalDebits: number;
  //     transactionCount: number;
  //     balanceChange: number;
  //     creditsChange: number;
  //     debitsChange: number;
  //     transactionChange: number;
  //   }
    const dashboardSummary = [
      { title: "Total Balance", totalBalance: 12650, balanceChange: 2 },
      { title: "Total Credits", totalBalance: 7890, balanceChange: 3 },
      { title: "Total Debits", totalBalance: 4455, balanceChange: -2 },
      { title: "Transactions", totalBalance: 150, balanceChange: 10 },
    ];
    interface Transaction {
      id: string;
      date: string;
      remark: string;
      amount: number;
      currency: string;
      type: "Credit" | "Debit";
    }

    const transactionList: Transaction[] = [
      {
        id: "23",
        date: "2023-10-01",
        remark: "Salary",
        amount: 3000,
        currency: "USD",
        type: "Credit",
      },
      {
        id: "23",
        date: "2023-10-02",
        remark: "Groceries",
        amount: 150,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-03",
        remark: "Gym Membership",
        amount: 50,
        currency: "USD",
        type: "Credit",
      },
      {
        id: "23",
        date: "2023-10-04",
        remark: "Dinner",
        amount: 40,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-05",
        remark: "Movie Tickets",
        amount: 30,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-06",
        remark: "Rent",
        amount: 1200,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-07",
        remark: "Utilities",
        amount: 100,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-08",
        remark: "Car Payment",
        amount: 400,
        currency: "USD",
        type: "Debit",
      },
      {
        id: "23",
        date: "2023-10-09",
        remark: "Insurance",
        amount: 200,
        currency: "USD",
        type: "Debit",
      },
    ];
    const [filteredTransactions, setFilteredTransactions] =
      useState(transactionList);
    const handleAllSorting = (
      order: "asc" | "desc",
      column: keyof Transaction
    ) => {
      const sorted = [...transactionList].sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];

        // Handle number comparison
        if (typeof aValue === "number" && typeof bValue === "number") {
          console.log(typeof aValue);
          return order === "asc" ? aValue - bValue : bValue - aValue;
        }

        // Handle string comparison

        if (typeof aValue === "string" && typeof bValue === "string") {
          return order === "asc"
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }

        // // Handle date comparison
        if (column == "date") {
          let aDate = new Date(aValue);
          let bDate = new Date(bValue);
          const timeA = aDate?.getTime();
          const timeB = bDate.getTime();
          return order === "asc" ? timeA - timeB : timeB - timeA;
        }

        // Fallback for other types or mixed types
        return 0;
      });

      setFilteredTransactions(sorted || transactionList);
    };
    return (
      <div className='pt-7'>
        <h4 className='text-[20px] leading-6 font-bold pt-3 pb-4.5'>Summary</h4>
        <div className='pb-3 flex items-center'>
          {dashboardSummary.map((card, index) => (
            <div
              className={`${
                index == dashboardSummary.length - 1 ? "mr-0" : "mr-7"
              }`}
              key={index}
            >
              <Card
                cardTitle={card.title}
                totalAmount={`${"$"}${card.totalBalance}`}
                percentage={`${card.balanceChange > 0 ? "+" : ""}${
                  card.balanceChange
                }%`}
              ></Card>
            </div>
          ))}
        </div>
        <TableWrapper customClass='my-7'>
          <TableRow>
            <TableHead
              isSortable
              customClass='w-[50%]'
              headTitle='Date'
              onSort={order => {
                handleAllSorting(order, "date");
              }}
            />
            <TableHead
              isSortable
              customClass='w-[15%]'
              headTitle='Remark'
              onSort={order => {
                handleAllSorting(order, "remark");
              }}
            />
            <TableHead
              customClass='flex-1'
              headTitle='Amount'
              onSort={order => {
                handleAllSorting(order, "amount");
              }}
            />
            <TableHead customClass='flex-1' headTitle='Currency' />
            <TableHead
              customClass='flex-1'
              headTitle='Type'
              onSort={order => {
                handleAllSorting(order, "type");
              }}
            />
          </TableRow>
          {filteredTransactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableData customClass='w-[50%]'>
                <p className='text-[#1B2528]'>{transaction.date}</p>
              </TableData>
              <TableData customClass='whitespace-nowrap w-[15%]'>
                <p className='text-[#1B2528]'>{transaction.remark}</p>
              </TableData>
              <TableData customClass='flex-1 whitespace-nowrap'>
                <p className='text-[#1B2528]'>
                  {transaction.type == "Debit" && "-"}${transaction.amount}
                </p>
              </TableData>
              <TableData customClass='flex-1 whitespace-nowrap'>
                <p className='text-[#1B2528]'>{transaction.currency}</p>
              </TableData>
              <TableData customClass='flex-1 whitespace-nowrap'>
                <StatusBadge
                  variant={getBadgeVariant(transaction.type)}
                  statusText={transaction.type}
                />
              </TableData>
            </TableRow>
          ))}
        </TableWrapper>
      </div>
    );
}

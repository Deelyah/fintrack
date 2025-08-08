"use client";
import StatusBadge from "../components/ui/StatusBadge";
import Card from "../components/ui/Card";
import TableHead from "../components/ui/table/TableHead";
import TableRow from "../components/ui/table/TableRow";
import TableData from "../components/ui/table/TableData";
import TableWrapper from "../components/ui/table/TableWrapper";
import { getBadgeVariant } from "./helpers";
import DashboardPage from "@/components/shared/dashboard/DashboardPage";

export default function Home() {
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
      amount: 4500,
      currency: "string",
      type: "Credit",
    },
    {
      id: "23",
      date: "2023-10-01",
      remark: "Salary",
      amount: 4500,
      currency: "string",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-01",
      remark: "Salary",
      amount: 4500,
      currency: "string",
      type: "Credit",
    },
    {
      id: "23",
      date: "2023-10-01",
      remark: "Salary",
      amount: 4500,
      currency: "string",
      type: "Debit",
    },
    {
      id: "23",
      date: "2023-10-01",
      remark: "Salary",
      amount: 4500,
      currency: "string",
      type: "Credit",
    },
  ];
  const overviewSummary = [
    {
      title: "Total Balance",
      amount: "12,345",
      precentage: "+5%",
      prefix: "$",
    },
    { title: "Total Credits", amount: "7,890", precentage: "+3%", prefix: "$" },
    { title: "Total Debits", amount: "12,345", precentage: "+5%", prefix: "$" },
    { title: "Transactions", amount: "150", precentage: "+10%", prefix: "" },
  ];

  return (
    <div className='py-7 px-12'>
      <DashboardPage />
      <Card
        cardTitle='Total Balance'
        totalAmount='$1500'
        percentage='+2%'
      ></Card>

      {/* <TableWrapper>
        <TableRow>
          <TableHead
            customClass='w-[60%]'
            headTitle='Date'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Remark'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Remark'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Remark'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Remark'
            onSort={order => {
              console.log(order);
            }}
          />
        </TableRow>
        {transactionList.map((transaction, index) => (
          <TableRow key={index}>
            <TableData customClass='w-[60%]'>
              <p className='text-[#1B2528]'>{transaction.date}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.amount}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.currency}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <p className='text-[#1B2528]'>{transaction.remark}</p>
            </TableData>
            <TableData customClass='flex-1'>
              <StatusBadge
                variant={getBadgeVariant(transaction.type)}
                statusText={transaction.type}
              />
            </TableData>
          </TableRow>
        ))}
      </TableWrapper> */}
    </div>
  );
}

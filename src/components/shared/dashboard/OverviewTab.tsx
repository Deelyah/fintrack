import { getBadgeVariant } from "@/app/helpers";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import TableData from "@/components/ui/table/TableData";
import TableHead from "@/components/ui/table/TableHead";
import TableRow from "@/components/ui/table/TableRow";
import TableWrapper from "@/components/ui/table/TableWrapper";

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
  //   const dashboardSummary:DashboardSummary[] = [
  //     {totalBalance: 12650;
  //     totalCredits: 899;
  //     totalDebits: 900;
  //     transactionCount: number;
  //     balanceChange: number;
  //     creditsChange: number;
  //     debitsChange: number;
  //     transactionChange: number;}
  //   ]
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
      remark: "Groceries",
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
      remark: "Groceries",
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
  return (
    <div className='pt-7'>
      <h4 className='text-[20px] leading-6 font-bold pt-3 pb-4.5'>Summary</h4>
      <div className='pb-3'>
        <Card
          cardTitle='Total Balance'
          totalAmount='$1500'
          percentage='+2%'
        ></Card>
      </div>
      <TableWrapper customClass='my-7'>
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
            headTitle='Amount'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Currency'
            onSort={order => {
              console.log(order);
            }}
          />
          <TableHead
            customClass='flex-1'
            headTitle='Type'
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
      </TableWrapper>
    </div>
  );
}

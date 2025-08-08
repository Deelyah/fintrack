"use client";
import StatusBadge from "../components/ui/StatusBadge";
import Card from "../components/ui/Card";
import TableHead from "../components/ui/table/TableHead";
import TableRow from "../components/ui/table/TableRow";
import TableData from "../components/ui/table/TableData";
import TableWrapper from "../components/ui/table/TableWrapper";
import { getBadgeVariant } from "./helpers";
import DashboardPage from "@/components/shared/dashboard/DashboardPage";
import TabNav from "@/components/ui/tab/TabNav";
import TabNavWrapper from "@/components/ui/tab/TabNavWrapper";
import { useState } from "react";

export default function Home() {
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
    <div className='py-7 pr-12'>
      <DashboardPage />
    </div>
  );
}

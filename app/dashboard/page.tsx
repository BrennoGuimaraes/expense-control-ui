"use client";
import PieChartWithPaddingAngle from "@/components/pie-chart";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { getTypesWithPercentApi } from "api/getTypesWithPercentApi";
import { getTransactionsApi } from "api/getTransactionsApi";

import { TypesWithPercentResponse } from "../types/TypesWithPercentResponse";
import { toast } from "sonner";
import { TableDashboard } from "@/components/table-dashboard";
import { TransactionResponse } from "../types/TransactionResponse";

export default function Dashboard() {
  const [types, setTypes] = useState<TypesWithPercentResponse[]>([]);
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  useEffect(() => {
    getTypesWithPercent();
    getTransactions();
  }, []);

  const getTypesWithPercent = async () => {
    try {
      const data = await getTypesWithPercentApi();
      console.log(data);

      setTypes(data);
    } catch (error) {
      toast.error("Error loading chart. Please try again.", {
        position: "bottom-left",
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    } finally {
      setLoadingTypes(false);
    }
  };

  const getTransactions = async () => {
    try {
      const data = await getTransactionsApi();

      setTransactions(data);
    } catch (error) {
      toast.error("Error loading chart. Please try again.", {
        position: "bottom-left",
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    } finally {
      setLoadingTransactions(false);
      console.log(transactions);
    }
  };

  return (
    <div className="flex gap-6">
      <div className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 shadow-lg p-6 w-110 h-110">
        {loadingTypes && (
          <div className="flex justify-center content-center h-full flex-wrap">
            <Spinner />
          </div>
        )}
        {!loadingTypes && <PieChartWithPaddingAngle types={types} />}{" "}
      </div>
      <div className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 shadow-lg p-6 w-220 h-110">
        {loadingTransactions && (
          <div className="flex justify-center content-center h-full flex-wrap">
            <Spinner />
          </div>
        )}
        {!loadingTransactions && (
          <TableDashboard transactions={transactions} />
        )}{" "}
      </div>
    </div>
  );
}

"use client";
import PieChartWithPaddingAngle from "@/components/pie-chart";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { getCategoriesWithPercentApi } from "api/getCategoriesWithPercentApi";
import { getTransactionsApi } from "api/getTransactionsApi";
import { getCategoriesApi } from "api/getCategoriesApi";
import { toast } from "sonner";
import { TableDashboard } from "@/components/table-dashboard";
import { TransactionResponse } from "../types/TransactionResponse";
import { Button } from "@/components/ui/button";
import { CategoriesWithPercentResponse } from "../types/CategoriesWithPercentResponse";
import { TransactionDialog } from "@/components/transaction-dialog";
import { CategoriesResponse } from "../types/CategoriesResponse";

export default function Dashboard() {
  const [categoriesWithPercent, setCategoriesWithPercent] = useState<
    CategoriesWithPercentResponse[]
  >([]);

  const [categories, setCategories] = useState<CategoriesResponse[]>([]);
  const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [loadingTransactionCategories, setLoadingTransactionCategories] =
    useState(false);
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false);

  useEffect(() => {
    getCategoriesWithPercent();
    getTransactions();
  }, []);

  const getCategoriesWithPercent = async () => {
    try {
      const data = await getCategoriesWithPercentApi();
      console.log(data);

      setCategoriesWithPercent(data);
    } catch (error) {
      toast.error("Error loading chart. Please try again.", {
        position: "bottom-left",
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
    } finally {
      setLoadingCategories(false);
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

  const getCategories = async () => {
    try {
      setLoadingTransactionCategories(true);
      const data = await getCategoriesApi();
      setCategories(data);
    } catch (error) {
      toast.error("Error loading categories. Please try again.", {
        position: "bottom-left",
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
      throw error;
    } finally {
      setLoadingTransactionCategories(false);
    }
  };

  const handleOpenTransactionDialog = async () => {
    if (categories.length === 0) {
      try {
        await getCategories();
      } catch {
        return;
      }
    }

    setIsTransactionDialogOpen(true);
  };

  return (
    <div className="flex gap-6">
      <div className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 shadow-lg p-6 w-110 h-110">
        {loadingCategories && (
          <div className="flex justify-center content-center h-full flex-wrap">
            <Spinner />
          </div>
        )}
        {!loadingCategories && (
          <PieChartWithPaddingAngle
            categoriesWithPercent={categoriesWithPercent}
            isAnimationActive={false}
          />
        )}{" "}
      </div>
      <div className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 shadow-lg p-6 w-220 h-110">
        <div className="mb-4 flex justify-end">
          <Button
            onClick={handleOpenTransactionDialog}
            disabled={loadingTransactionCategories}
          >
            {loadingTransactionCategories
              ? "Loading categories..."
              : "Create Transaction"}
          </Button>
        </div>
        {loadingTransactions && (
          <div className="flex justify-center content-center h-full flex-wrap">
            <Spinner />
          </div>
        )}
        {!loadingTransactions && <TableDashboard transactions={transactions} />}{" "}
        <TransactionDialog
          open={isTransactionDialogOpen}
          onOpenChange={setIsTransactionDialogOpen}
          categories={categories}
          loadingCategories={loadingTransactionCategories}
        />
      </div>
    </div>
  );
}

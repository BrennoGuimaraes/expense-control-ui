"use client";
import PieChartWithPaddingAngle from "@/components/pie-chart";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { getTypesWithPercentApi } from "api/getTypesWithPercentApi";

import { TypesWithPercentResponse } from "../types/TypesWithPercentResponse";
import { toast } from "sonner";

export default function Dashboard() {
  const [types, setTypes] = useState<TypesWithPercentResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTypesWithPercent();

    debugger;
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
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-sm border border-zinc-200 dark:border-zinc-700/50 shadow-lg p-6 w-110 h-110">
      {loading && (
        <div className="flex justify-center content-center h-full flex-wrap">
          <Spinner />
        </div>
      )}
      {!loading && <PieChartWithPaddingAngle types={types} />}{" "}
    </div>
  );
}

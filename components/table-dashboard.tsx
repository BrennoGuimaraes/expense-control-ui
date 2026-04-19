"use client";

import { TransactionResponse } from "@/app/types/TransactionResponse";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  transactions: TransactionResponse[];
}

const PAGE_SIZE = 7;

export function TableDashboard({ transactions }: Props) {
  const [page, setPage] = useState(0);
  const columns = transactions.length > 0 ? Object.keys(transactions[0]) : [];

  const totalPages = Math.ceil(transactions.length / PAGE_SIZE);
  const paginated = transactions.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE,
  );

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent transactions.</TableCaption>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.map((transaction, i) => (
            <TableRow key={i}>
              {columns.map((col) => (
                <TableCell key={col}>
                  {String(transaction[col as keyof TransactionResponse] ?? "-")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end gap-2 py-4">
        <span className="text-sm text-muted-foreground">
          Page {page + 1} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => p - 1)}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPage((p) => p + 1)}
          disabled={page + 1 >= totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

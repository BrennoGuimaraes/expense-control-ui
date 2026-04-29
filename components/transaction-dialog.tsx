import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectData } from "./select-category";
import { useState } from "react";
import { CategoriesResponse } from "@/app/types/CategoriesResponse";
import { DatePicker } from "./date-picker";

type TransactionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  categories: CategoriesResponse[];
  loadingCategories?: boolean;
};

function formatCurrency(digits: string): string {
  const number = parseInt(digits || "0", 10);
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number / 100);
}

export function TransactionDialog({
  open,
  onOpenChange,
  categories,
  loadingCategories = false,
}: TransactionDialogProps) {
  const [description, setDescription] = useState("");
  const [amountDisplay, setAmountDisplay] = useState("R$ 0,00");
  const [amountRaw, setAmountRaw] = useState("");

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const digits = e.target.value.replace(/\D/g, "");
    setAmountRaw(digits);
    setAmountDisplay(formatCurrency(digits));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const reais = parseInt(amountRaw || "0", 10) / 100;
    console.log({ description, amount: reais });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Create Transaction</DialogTitle>
          <DialogDescription>
            Enter the transaction details below to add a new transaction.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <Label htmlFor="description-1">Description</Label>
              <Input
                id="description-1"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Debit purchase - BANCA UNIAO	"
              />
            </Field>

            <Field>
              <Label htmlFor="amount-1">Amount</Label>
              <Input
                id="amount-1"
                name="amount"
                value={amountDisplay}
                onChange={handleAmountChange}
                inputMode="numeric"
                data-raw={amountRaw}
              />
            </Field>

            <Field>
              <SelectData categories={categories} loading={loadingCategories} />
            </Field>
            <DatePicker></DatePicker>
          </FieldGroup>

          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

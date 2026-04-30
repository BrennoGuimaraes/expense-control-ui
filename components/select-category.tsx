"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoriesResponse } from "@/app/types/CategoriesResponse";

type SelectDataProps = {
  onSelectValue: React.Dispatch<React.SetStateAction<string | undefined>>;
  categories: CategoriesResponse[];
  loading?: boolean;
};

export function SelectData({
  onSelectValue,
  categories,
  loading = false,
}: SelectDataProps) {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Category</FieldLabel>
      <Select onValueChange={onSelectValue}>
        <SelectTrigger>
          <SelectValue
            placeholder={loading ? "Loading categories..." : "Choose category"}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}

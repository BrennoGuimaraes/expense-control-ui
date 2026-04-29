import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
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
  categories: CategoriesResponse[];
  loading?: boolean;
};

export function SelectData({ categories, loading = false }: SelectDataProps) {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Category</FieldLabel>
      <Select>
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

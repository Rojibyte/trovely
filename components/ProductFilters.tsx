import Image from "next/image";
import filterIcon from "@/public/filter-icon.svg";
import { Product } from "@/lib/generated/prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { sortOptions } from "@/lib/sortOptions";
import { FilterOptions } from "@/lib/filterOptions";

type SerializedProducts = Omit<Product, "price"> & { price: number };
// ^ singular — one product's shape

interface ProductFilterProps {
  products: SerializedProducts[];
  filterOptions: FilterOptions;
  onSortChange: (sortBy: string) => void;
  onFilterChecked: (filterBy: string) => void;
}

export default function ProductFilters({
  products,
  filterOptions,
  onSortChange,
  onFilterChecked,
}: ProductFilterProps) {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <button className="w-fit px-4 py-3 flex gap-4 bg-background border border-(--stone3) rounded-2xl cursor-pointer">
          <span className="font-sans text-base font-extralight tracking-[0.06em]">
            Filter
          </span>
          <Image src={filterIcon} alt="Filter Icon" width={18} height={18} />
        </button>
        <div className="flex justify-between items-center gap-8">
          <span className="font-mono text-base font-extralight tracking-[0.06em]">
            {products.length} products
          </span>
          <Select
            onValueChange={(value) => onSortChange(value as string)}
            items={sortOptions}
          >
            <SelectTrigger className="w-60 px-4 py-6 bg-background border border-(--stone3) rounded-2xl">
              <SelectValue
                placeholder="Sort By"
                className="font-sans text-(--ink1) text-base font-extralight leading-none tracking-[0.06em]"
              />
            </SelectTrigger>
            <SelectContent alignItemWithTrigger={false}>
              <SelectGroup className="bg-background border border-(--stone3) rounded-2xl ring-0 focus:outline-none">
                {sortOptions.map((item) => (
                  <SelectItem
                    key={item.value}
                    value={item.value}
                    className="font-sans text-base font-extralight tracking-[0.06em]"
                  >
                    {item.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <FieldSet className="flex flex-row w-fit">
        <FieldLegend
          variant="label"
          className="font-heading text-(--ink1) text-3xl leading-none tracking-[0.06em]"
        >
          Filter by:
        </FieldLegend>
        {Object.entries(filterOptions).map(([groupName, option]) => (
          <FieldGroup
            key={groupName}
            className={`${groupName === "Materials" ? "w-55" : "w-30"} gap-3`}
          >
            {option.map((opt, index) => (
              <Field key={index} orientation="horizontal">
                <Checkbox
                  id={`${opt.value}`}
                  name={`filter-category-${opt.value}`}
                  className="border-(--ink1)"
                />
                <FieldLabel
                  htmlFor={`filter-category-${opt.value}`}
                  className="font-sans"
                >
                  {opt.label}
                </FieldLabel>
              </Field>
            ))}
          </FieldGroup>
        ))}
      </FieldSet>
    </>
  );
}

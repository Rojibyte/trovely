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
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

type SerializedProducts = Omit<Product, "price"> & { price: number };
// ^ singular — one product's shape

interface ProductFilterProps {
  products: SerializedProducts[];
  filterOptions: FilterOptions;
  onSortChange: (sortBy: string) => void;
  onFilterChange: (groupName: string, value: string, checked: boolean) => void;
}

export default function ProductFilters({
  products,
  filterOptions,
  onSortChange,
  onFilterChange,
}: ProductFilterProps) {
  return (
    <>
      <div className="w-full flex justify-between items-start">
        <Accordion orientation="horizontal" multiple className="w-fit">
          {Object.entries(filterOptions).map(([groupName, option]) => (
            <AccordionItem key={groupName} value={groupName}>
              <AccordionTrigger>{groupName}</AccordionTrigger>
              <AccordionContent>
                {option.map((opt, index) => (
                  <Field key={index} orientation="horizontal">
                    <Checkbox
                      id={`${opt.value}`}
                      name={`filter-category-${opt.value}`}
                      className=""
                      onCheckedChange={(checked) =>
                        onFilterChange(groupName, opt.value, checked === true)
                      }
                    />
                    <FieldLabel
                      htmlFor={`filter-category-${opt.value}`}
                      className="font-sans"
                    >
                      {opt.label}
                    </FieldLabel>
                  </Field>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
    </>
  );
}

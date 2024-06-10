import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectedColumnsState } from "./import-card";
import { cn } from "@/lib/utils";

type Props = {
  columnIdx: number;
  selectedColumns: SelectedColumnsState;
  onChange: (columnIdx: number, value: string | null) => void;
};

const options = ["amount", "payee", "date"];

const TableHeadSelect = (props: Props) => {
  const { columnIdx, onChange, selectedColumns } = props;

  const currentSelection = selectedColumns[`column_${columnIdx}`];

  return (
    <Select
      value={currentSelection || ""}
      onValueChange={(value) => onChange(columnIdx, value)}
    >
      <SelectTrigger
        className={cn(
          "focus:ring-offset-0 focus:ring-transparent outline-none border-none bg-transparent capitalize",
          currentSelection && "text-blue-500"
        )}
      >
        <SelectValue placeholder="Skip" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="skip">Skip</SelectItem>

        {options.map((option) => {
          const disabled =
            Object.values(selectedColumns).includes(option) &&
            selectedColumns[`column_${columnIdx}`] !== option;

          return (
            <SelectItem
              className="capitalize"
              disabled={disabled}
              value={option}
              key={option}
            >
              {option}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export { TableHeadSelect };

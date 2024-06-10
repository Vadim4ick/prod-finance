import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SelectedColumnsState } from "./import-card";
import { TableHeadSelect } from "./table-header-select";

type Props = {
  selectedColumns: SelectedColumnsState;
  headers: string[];
  body: string[][];
  onTableHeadSelectChange: (columnIdx: number, value: string | null) => void;
};

const ImportTable = (props: Props) => {
  const { body, headers, onTableHeadSelectChange, selectedColumns } = props;

  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          {headers.map((_item, idx) => (
            <TableHead key={idx}>
              <TableHeadSelect
                columnIdx={idx}
                selectedColumns={selectedColumns}
                onChange={onTableHeadSelectChange}
              />
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {body.map((row: string[], idx) => (
          <TableRow key={idx}>
            {row.map((cell, idxCell) => (
              <TableCell key={idxCell}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export { ImportTable };

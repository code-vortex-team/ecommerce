"use client"
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { color } from "../colors";

interface ShopOrderProps {
  columns: ColumnDef<any, any>[];
  data: any[];
}

const ShopOrder: React.FC<ShopOrderProps> = ({ columns, data }) => {
  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { getHeaderGroups, getRowModel } = tableInstance;

  return (
    <Box overflowX="auto" padding="20px">
      <Table variant="" colorScheme="">
        <Thead borderBottom={"1px solid "} borderColor={color.base.textFieldStroke}>
          {getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} fontFamily={"IRANYekanXFaNum"} letterSpacing={"0px"} fontSize={"1rem"} fontWeight={"400"} lineHeight={"1.8rem"} textAlign={"center"} >
                  {typeof header.column.columnDef.header === "function"
                    ? header.column.columnDef.header()
                    : header.column.columnDef.header}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id} textAlign={"center"}>
                  {typeof cell.column.columnDef.cell === "function"
                    ? cell.column.columnDef.cell(cell.getContext())
                    : cell.getValue()}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ShopOrder;

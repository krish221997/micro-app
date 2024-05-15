"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  invoiceNumber: string;
  total: number;
  status: string;
  customer: {
    fullName: string;
  };
  currency: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const badgeClassName =
        row.getValue("status") === "draft"
          ? "bg-gray-500"
          : row.getValue("status") === "authorised"
          ? "bg-green-500"
          : "bg-gray-500";

      return (
        <Badge className={`text-xs ${badgeClassName}`}>
          {row.getValue("status")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => {
      return <div className="font-small">{row.original.customer.fullName}</div>;
    },
  },
  {
    accessorKey: "invoiceNumber",
    header: "Invoice Number",
    cell: ({ row }) => {
      return <div className="font-small">{row.getValue("invoiceNumber")}</div>;
    },
  },
  // {
  //   accessorKey: "email",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  // },
  {
    accessorKey: "total",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: row.original.currency,
      }).format(amount);

      return <div className="text-right font-small">{formatted}</div>;
    },
  },
];

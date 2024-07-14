"use client";
import CreateCauseModal from "@/app/components/dashboard/CreateCauseModal";
import { DeleteConfirmationDialog } from "@/app/components/shared/DeleteConfirmationDialog";
import { Spinner } from "@/app/components/shared/Spinner";
import {
  useDeleteCauseMutation,
  useGetAllCauseQuery,
} from "@/app/redux/api/causeApi";
import { useDebounce } from "@/app/redux/hooks";
import { ICause } from "@/app/types/cause";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import toast from "react-hot-toast";

import EditCauseModal from "@/app/components/dashboard/EditCauseModal";
import PaginationControls from "@/app/components/shared/PaginationControls";
import SortControls from "@/app/components/shared/SortControls";

export default function ManageCauses() {
  // const query: Record<string, unknown> = {};

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const debounceTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });

  const query: Record<string, unknown> = {
    page,
    limit,
    sortBy,
    sortOrder,
  };

  if (!!debounceTerm) {
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading } = useGetAllCauseQuery({ ...query });

  const [deleteCause] = useDeleteCauseMutation();

  const sortOptions = [
    { value: "title", label: "Title" },
    { value: "goalAmount", label: "Goal Amount" },
    { value: "raisedAmount", label: "Raised Amount" },
    { value: "createdAt", label: "Created At" },
  ];

  const handleSortChange = (
    newSortBy: string,
    newSortOrder: "asc" | "desc"
  ) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setPage(1); // Reset to first page when sort changes
  };

  //delete cause handler
  const handleDeleteCause = async (causeId: any) => {
    try {
      const res = await deleteCause(causeId).unwrap();
      if (res?.success && res?.statusCode === 200) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Causes</h1>
      <div className="mb-4 flex flex-col-reverse gap-y-2 justify-between ">
        <Input
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search causes..."
          className="outline-none  "
        />

        <div
          className="flex 
         flex-col-reverse   
          sm:flex-row 
          min-[767px]:flex-col-reverse 
          min-[831px]:flex-row
          gap-y-3 justify-between"
        >
          <SortControls
            sortBy={sortBy}
            setSortBy={(newSortBy) => handleSortChange(newSortBy, sortOrder)}
            sortOrder={sortOrder}
            setSortOrder={(newSortOrder) =>
              handleSortChange(sortBy, newSortOrder)
            }
            sortOptions={sortOptions}
          />

          <CreateCauseModal />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Goal</TableHead>
            <TableHead>Raised</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Items */}
        <TableBody>
          {data?.meta?.total === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No causes found
              </TableCell>
            </TableRow>
          )}
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                <Spinner className="mx-auto h-6 w-6" />
              </TableCell>
            </TableRow>
          ) : (
            data?.causes?.map((cause: ICause) => (
              <TableRow key={cause?._id}>
                <TableCell>{cause?.title}</TableCell>
                <TableCell>${cause?.goalAmount}</TableCell>
                <TableCell>${cause?.raisedAmount}</TableCell>
                <TableCell className=" flex flex-col sm:flex-row  gap-3 ">
                  <EditCauseModal causeId={cause?._id} />
                  <DeleteConfirmationDialog
                    onConfirm={() => handleDeleteCause(cause?._id)}
                    itemType="cause"
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {data?.meta && data?.meta?.total > limit && (
        <PaginationControls
          currentPage={page}
          totalPages={Math.ceil(data?.meta?.total / limit)}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}

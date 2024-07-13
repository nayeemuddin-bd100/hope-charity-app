"use client";
import CreateCauseModal from "@/app/components/dashboard/CreateCauseModal";
import { DeleteConfirmationDialog } from "@/app/components/shared/DeleteConfirmationDialog";
import { Spinner } from "@/app/components/shared/Spinner";
import {
  useDeleteCauseMutation,
  useGetAllCauseQuery,
} from "@/app/redux/api/causeApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import toast from "react-hot-toast";

export default function ManageCauses() {
  const { data, isLoading } = useGetAllCauseQuery({});
  const [deleteCause] = useDeleteCauseMutation();

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
      <div
        className="mb-4 flex  min-[0px]:flex-col-reverse sm:flex-row 
        min-[768px]:flex-col-reverse
        min-[819px]:flex-row
        gap-y-2 justify-between "
      >
        <Input placeholder="Search causes..." className="max-w-sm" />
        <div className="max-w-xs">
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
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                <Spinner className="mx-auto h-6 w-6" />
              </TableCell>
            </TableRow>
          ) : (
            //TODO: add cause type

            data?.data?.slice(0, 10)?.map((cause: any) => (
              <TableRow key={cause._id}>
                <TableCell>{cause.title}</TableCell>
                <TableCell>${cause.goalAmount}</TableCell>
                <TableCell>${cause.raisedAmount}</TableCell>
                <TableCell className=" flex flex-col sm:flex-row  gap-y-3 sm:gap-y-0 ">
                  <Button
                    variant="outline"
                    className=" mr-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white "
                  >
                    Edit
                  </Button>
                  <DeleteConfirmationDialog
                    onConfirm={() => handleDeleteCause(cause._id)}
                    itemType="cause"
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

"use client";
import { DeleteConfirmationDialog } from "@/app/components/shared/DeleteConfirmationDialog";
import PaginationControls from "@/app/components/shared/PaginationControls";
import SortControls from "@/app/components/shared/SortControls";
import { Spinner } from "@/app/components/shared/Spinner";
import {
    useDeleteDonationMutation,
    useGetAllDonationQuery,
} from "@/app/redux/api/donationApi";
import { useDebounce } from "@/app/redux/hooks";
import { IDonation } from "@/app/types/donation";
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

interface Donation {
    id: number;
    donorName: string;
    email: string;
    amount: number;
    date: string;
}

export default function DonationsPage() {
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
    const { data, isLoading } = useGetAllDonationQuery({ ...query });

    const [deleteDonation] = useDeleteDonationMutation();

    const sortOptions = [
        { value: "email", label: "Email" },
        { value: "name.firstName", label: "Name" },
        { value: "createdAt", label: "Created At" },
    ];

    const handleSortChange = (
        newSortBy: string,
        newSortOrder: "asc" | "desc"
    ) => {
        setSortBy(newSortBy);
        setSortOrder(newSortOrder);
        setPage(1);
    };

    //delete donation handler
    const handleDeleteDonation = async (id: string) => {
        try {
            const res = await deleteDonation(id).unwrap();
            if (res?.success && res?.statusCode === 200) {
                toast.success(res?.message);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">
                Manage Donations
            </h1>
            <div className="mb-4 flex flex-col-reverse gap-y-2 justify-between ">
                <Input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search donations..."
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
                        setSortBy={(newSortBy) =>
                            handleSortChange(newSortBy, sortOrder)
                        }
                        sortOrder={sortOrder}
                        setSortOrder={(newSortOrder) =>
                            handleSortChange(sortBy, newSortOrder)
                        }
                        sortOptions={sortOptions}
                    />
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                {/* Table Items */}
                <TableBody>
                    {data?.meta?.total === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No donations found
                            </TableCell>
                        </TableRow>
                    )}
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                <Spinner className="mx-auto h-6 w-6" />
                            </TableCell>
                        </TableRow>
                    ) : data?.donations && data?.donations?.length > 0 ? (
                        data?.donations?.map((donation: IDonation) => (
                            <TableRow key={donation?._id} className="text-base">
                                <TableCell>
                                    {donation?.donor?.name?.firstName}{" "}
                                    {donation?.name?.lastName}
                                </TableCell>
                                <TableCell>{donation?.donor?.email}</TableCell>
                                <TableCell>{donation?.amount}</TableCell>
                                <TableCell> date</TableCell>
                                <TableCell className=" flex flex-col sm:flex-row  gap-3 ">
                                    <DeleteConfirmationDialog
                                        onConfirm={() =>
                                            handleDeleteDonation(donation?._id)
                                        }
                                        itemType="donation"
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    ) : null}
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

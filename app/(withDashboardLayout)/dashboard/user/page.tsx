"use client";
import { DeleteConfirmationDialog } from "@/app/components/shared/DeleteConfirmationDialog";
import PaginationControls from "@/app/components/shared/PaginationControls";
import SortControls from "@/app/components/shared/SortControls";
import { Spinner } from "@/app/components/shared/Spinner";
import {
    useDeleteUserMutation,
    useGetAllUserQuery,
} from "@/app/redux/api/userApi";
import { useDebounce } from "@/app/redux/hooks";
import { IUser } from "@/app/types/user/index";
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

const getRoleStyle = (role: string) => {
    switch (role?.toLowerCase()) {
        case "admin":
            return "bg-blue-100 text-blue-800";
        case "super-admin":
            return "bg-purple-100 text-purple-800";
        case "donor":
            return "bg-green-100 text-green-800";
        case "volunteer":
            return "bg-yellow-100 text-yellow-800";
        default:
            return "bg-gray-100 text-gray-800";
    }
};
const ManageUsers = () => {
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
    const { data, isLoading } = useGetAllUserQuery({ ...query });

    const [deleteUser] = useDeleteUserMutation();

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
        setPage(1); // Reset to first page when sort changes
    };

    //delete user handler
    const handleDeleteUser = async (user: IUser) => {
        const role = user?.role as string;
        let roleId;

        switch (role) {
            case "donor":
                roleId = user?.donor;
                break;
            case "volunteer":
                roleId = user?.volunteer;
                break;
            case "admin":
                roleId = user?.admin;
                break;
            default:
                roleId = undefined;
        }

        try {
            const res = await deleteUser({ role, roleId }).unwrap();
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
                Manage Users
            </h1>
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
                        <TableHead>Role</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                {/* Table Items */}
                <TableBody>
                    {data?.meta?.total === 0 && (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                No user found
                            </TableCell>
                        </TableRow>
                    )}
                    {isLoading ? (
                        <TableRow>
                            <TableCell colSpan={5} className="h-24 text-center">
                                <Spinner className="mx-auto h-6 w-6" />
                            </TableCell>
                        </TableRow>
                    ) : data?.users && data?.users?.length > 0 ? (
                        data?.users?.map((user: IUser) => (
                            <TableRow key={user?._id} className="text-base">
                                <TableCell>
                                    {user?.name?.firstName}{" "}
                                    {user?.name?.lastName}
                                </TableCell>
                                <TableCell>{user?.email}</TableCell>
                                <TableCell>
                                    <span
                                        className={`px-2 py-1 rounded font-medium capitalize ${getRoleStyle(
                                            String(user?.role).toLowerCase()
                                        )}`}
                                    >
                                        {String(user?.role)}
                                    </span>
                                </TableCell>
                                <TableCell className=" flex flex-col sm:flex-row  gap-3 ">
                                    <DeleteConfirmationDialog
                                        onConfirm={() => handleDeleteUser(user)}
                                        itemType="user"
                                        itemName={`${user?.name?.firstName} ${user?.name?.lastName}`}
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
};

export default ManageUsers;

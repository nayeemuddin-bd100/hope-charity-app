"use client";
import { useDebounce } from "@/app/redux/hooks";
import getCause from "@/app/services/actions/getCause";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PaginationControls from "../shared/PaginationControls";
import SortControls from "../shared/SortControls";
import { Spinner } from "../shared/Spinner";
import CauseCard from "./CauseCard";

interface ICauseClientProps {
  initialCauses: any;
  sorting?: boolean;
  pagination?: boolean;
  showMoreBtn?: boolean;
}

const CauseClient = ({
  initialCauses,
  sorting = true,
  pagination = true,
  showMoreBtn = false,
}: ICauseClientProps) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);
  const [sortBy, setSortBy] = useState<string>("createdAt");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const [causes, setCauses] = useState<any>(initialCauses);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // set debounce term
  const debounceTerm = useDebounce({
    searchQuery: searchTerm,
    delay: 600,
  });

  // fetch causes action
  useEffect(() => {
    const fetchCauses = async () => {
      setIsLoading(true);
      try {
        const causeData = await getCause({
          searchTerm: debounceTerm,
          page,
          limit,
          sortBy,
          sortOrder,
        });
        setCauses(causeData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCauses();
  }, [page, limit, sortBy, sortOrder, debounceTerm]);

  // sorting options
  const sortOptions = [
    { value: "title", label: "Title" },
    { value: "goalAmount", label: "Goal Amount" },
    { value: "raisedAmount", label: "Raised Amount" },
    { value: "createdAt", label: "Created At" },
  ];

  // sort change action
  const handleSortChange = (
    newSortBy: string,
    newSortOrder: "asc" | "desc"
  ) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setPage(1); // Reset to first page when sort changes
  };

  return (
    <div>
      {/* Search and sort */}
      {sorting && (
        <div className="my-4 flex flex-col sm:flex-row gap-y-2 sm:gap-x-5 justify-between ">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search causes..."
            className="outline-none"
          />
          <SortControls
            sortBy={sortBy}
            setSortBy={(newSortBy) => handleSortChange(newSortBy, sortOrder)}
            sortOrder={sortOrder}
            setSortOrder={(newSortOrder) =>
              handleSortChange(sortBy, newSortOrder)
            }
            sortOptions={sortOptions}
          />
        </div>
      )}

      {/* Causes Items */}
      {isLoading ? (
        <Spinner className="mx-auto h-20 w-20 mt-10" />
      ) : causes?.data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
          {causes.data.map((cause: any) => (
            <CauseCard
              key={cause?.id}
              image={cause?.image}
              title={cause?.title}
              desc={cause?.description}
              goal={cause?.goalAmount}
              raise={cause?.raisedAmount}
            />
          ))}
        </div>
      ) : (
        <div className="my-10 text-2xl text-center">No Causes Found</div>
      )}

      {/* Pagination */}
      {pagination && causes?.meta && causes?.meta?.total > limit && (
        <PaginationControls
          currentPage={page}
          totalPages={Math.ceil(causes?.meta?.total / limit)}
          onPageChange={setPage}
        />
      )}

      {showMoreBtn && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => router.push("/cause")}
            className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-300 ease-in-out mt-10"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default CauseClient;

interface GetCauseParams {
  searchTerm?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

const getCause = async (params: GetCauseParams = {}) => {
  const query = new URLSearchParams(params as any).toString();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/cause?${query}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch causes");
  }

  const result = await response.json();
  return result;
};

export default getCause;

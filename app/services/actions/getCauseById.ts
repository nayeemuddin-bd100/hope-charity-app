interface GetCauseByIdParams {
  causeId: string;
  fields?: string;
}

const getCauseById = async (params: GetCauseByIdParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/cause/${
      params.causeId
    }?fields=${params.fields || ""}`
  );

  const result = await response.json();

  return result;
};

export default getCauseById;

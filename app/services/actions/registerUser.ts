interface IUserData {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  address: string;
  contactNo: string;
  password: string;
  role: string;
}

const registerUser = async (data: IUserData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/users/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const result = await response.json();

  return result;
};

export default registerUser;

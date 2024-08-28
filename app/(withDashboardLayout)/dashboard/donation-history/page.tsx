import getProfile from "@/app/services/actions/getProfile";
import { format } from "date-fns";
import Image from "next/image";

const DonationHistory = async () => {
  const user = await getProfile();
  const donor = user?.data;
  const donation = user?.data?.donation;

  // sort donations by date in descending order
  const sortedDonations = donation.sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-2 ">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Donor Profile Header */}
          <div className="bg-gradient-to-r from-green-500 to-yellow-400 p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center">
              <Image
                src={donor?.profileImage}
                alt={`${donor?.name?.firstName} ${donor?.name?.lastName}`}
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-3xl font-bold text-white">
                  {donor?.name?.firstName} {donor?.name?.lastName}
                </h1>
                <p className="text-green-900">{donor?.email}</p>
                <p className="text-green-900">{donor?.contactNo}</p>
                <p className="text-green-900">{donor?.address}</p>
              </div>
            </div>
          </div>

          {/* Donation History */}
          <div className="p-6 sm:p-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Donation History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-4 px-6 font-semibold text-sm text-gray-600 border-b">
                      Date
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm text-gray-600 border-b">
                      Amount
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm text-gray-600 border-b">
                      Cause
                    </th>
                    <th className="py-4 px-6 font-semibold text-sm text-gray-600 border-b">
                      Transaction ID
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedDonations?.map((donation: any) => (
                    <tr key={donation?.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 border-b truncate">
                        {format(new Date(donation?.createdAt), "dd-MM-yy")}
                      </td>
                      <td className="py-4 px-6 border-b">
                        ${donation?.amount.toFixed(2)}
                      </td>
                      <td className="py-4 px-6 border-b truncate">
                        {donation?.cause?.title
                          .split(" ")
                          .slice(0, 10)
                          .join(" ") +
                          (donation?.cause?.title.split(" ").length > 10
                            ? "..."
                            : "")}
                      </td>
                      <td className="py-4 px-6 border-b text-sm text-gray-500">
                        {donation?.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Donation Summary */}
          <div className="bg-gray-50 p-6 sm:p-10 border-t">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Donation Summary
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-green-500">
                  $
                  {donation
                    ?.reduce(
                      (sum: number, donation: { amount: number }) =>
                        sum + donation.amount,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-600">Number of Donations</p>
                <p className="text-2xl font-bold text-green-500">
                  {donation?.length}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-600">Largest Donation</p>
                <p className="text-2xl font-bold text-green-500">
                  $
                  {Math.max(
                    ...donation?.map((d: { amount: number }) => d.amount)
                  ).toFixed(2)}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-sm text-gray-600">Most Recent Donation</p>
                <p className="text-2xl font-bold text-green-500">
                  {format(new Date(sortedDonations[0]?.createdAt), "dd-MM-yy")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;

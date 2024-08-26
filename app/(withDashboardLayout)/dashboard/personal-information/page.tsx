import UpdateDonorModal from "@/app/components/dashboard/UpdateUserModal";
import { Spinner } from "@/app/components/shared/Spinner";
import getProfile from "@/app/services/actions/getProfile";
import Image from "next/image";
import { Suspense } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";

const PersonalInformation = async () => {
  const user = await getProfile();
  const userData = user?.data;

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-10">
      <div
        className="mb-6 flex flex-col 
          sm:flex  
          sm:justify-between         
          sm:flex-row 
          min-[767px]:flex-col
          min-[831px]:flex-row
          gap-y-3 "
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Personal Information
        </h1>
        <div>
          <Suspense fallback={<Spinner className="mx-auto h-8 w-8" />}>
            <UpdateDonorModal userData={userData} />
          </Suspense>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {/* col 1 */}
        <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-24">
          <div className="flex items-center">
            <FaUser className="text-green-500 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-600">First Name</p>
              <p className="font-semibold">{userData?.name.firstName}</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaUser className="text-green-500 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-600">Last Name</p>
              <p className="font-semibold">{userData?.name.lastName}</p>
            </div>
          </div>
        </div>

        {/* col 2 */}

        <div className="flex flex-col gap-2 sm:flex sm:flex-row sm:gap-24">
          <div className="flex items-center">
            <FaEnvelope className="text-green-500 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold">{userData?.email}</p>
            </div>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-green-500 mr-4 text-xl" />
            <div>
              <p className="text-sm text-gray-600">Contact Number</p>
              <p className="font-semibold">{userData?.contactNo}</p>
            </div>
          </div>
        </div>
        {/* col 3 */}

        <div className="flex items-center col-span-2">
          <FaMapMarkerAlt className="text-green-500 mr-4 text-xl" />
          <div className="w-full">
            <p className="text-sm text-gray-600">Address</p>
            <p className="font-semibold">{userData?.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
        <div className="flex items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mr-6">
            <Image
              src={userData?.profileImage}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Account Details</h2>
        <p>
          <strong>User ID:</strong> {userData.user}
        </p>
        <p>
          <strong>Account Created:</strong>{" "}
          {new Date(userData.createdAt).toLocaleDateString()}
        </p>
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(userData.updatedAt).toLocaleDateString()}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Donation Activity</h2>
        <p>
          <strong>Total Donations:</strong> {userData.donation.length}
        </p>
      </div>
    </div>
  );
};

export default PersonalInformation;

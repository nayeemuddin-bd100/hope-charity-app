"use client";
import ProgressBar from "../../components/cause/ProgressBar";
import DonationForm from "../../components/donate/DonationForm";
import Breadcrumb from "../../components/shared/Breadcrumb";
import Container from "../../components/shared/Container";

const Donate = () => {
  return (
    <div>
      <Breadcrumb label="Confirm Donation" />
      <div className="py-20 ">
        <Container>
          <div className="flex flex-col justify-center items-center md:mx-5 lg:mx-10 ">
            {/* background cover */}
            <div className=" bg-[url('/images/donate.jpg')] bg-cover bg-center bg-no-repeat h-[400px] w-full lg:w-4/5 "></div>

            {/* Main section */}
            <div className="-mt-20 w-[90%] md:w-3/4 lg:w-[70%] mx-auto rounded-xl shadow-2xl bg-white py-10 px-5 shadow-slate-400 ">
              {/* progress bar */}
              <div className="flex flex-col justify-between items-center gap-2 mb-8">
                <ProgressBar percentage={50} />
                <div className="flex justify-center items-center gap-5 ">
                  <p className="text-xl text-green-500">Goal:$3000</p>
                  <p className="text-xl text-yellow-500">Raised:$1500</p>
                </div>
              </div>

              {/* Header */}
              <p className="text-3xl font-bold text-gray-800">
                Education for Poor Children
              </p>
              <p className="text-lg text-gray-500 mt-3">
                Providing the necessary resources and support to ensure a child
                from a poor family can attend school for an entire year.
              </p>

              {/* Donation form  */}

              <DonationForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Donate;

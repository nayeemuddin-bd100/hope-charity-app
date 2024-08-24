import ProgressBar from "@/app/components/cause/ProgressBar";
import DonationForm from "@/app/components/donate/DonationForm";
import Breadcrumb from "@/app/components/shared/Breadcrumb";
import Container from "@/app/components/shared/Container";
import TruncatedText from "@/app/components/shared/TruncatedText";
import NotFound from "@/app/not-found";
import getCauseById from "@/app/services/actions/getCauseById";

interface IParams {
  params: {
    causeId: string;
  };
}
const Donate = async ({ params }: IParams) => {
  const { causeId } = params;
  const cause = await getCauseById({
    causeId,
  });

  const { raisedAmount, goalAmount, title, description } = cause?.data;

  const percentage = (raisedAmount / goalAmount) * 100;

  if (!cause || !cause.success) return <NotFound />;

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
                <ProgressBar percentage={percentage} />
                <div className="flex justify-center items-center gap-5 ">
                  <p className="text-xl text-green-500">Goal:${goalAmount}</p>
                  <p className="text-xl text-yellow-500">
                    Raised:${raisedAmount}
                  </p>
                </div>
              </div>

              {/* Header */}
              <p className="text-3xl font-bold text-gray-800">
                <TruncatedText text={title} lines={3} />
              </p>
              <p className="text-lg text-gray-500 mt-3">
                <TruncatedText text={description} lines={6} />
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

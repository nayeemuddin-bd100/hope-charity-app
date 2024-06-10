import Container from "../shared/Container";

const Cta = () => {
  return (
    <div className="py-10 md:py-28 bg-primary bg-[url('/images/volunteer-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl lg:text-4xl text-center  font-semibold text-white">
              If You Want To Join With Us As a Volunteer. Contact Us Today!
            </h2>
          </div>

          <div className="flex flex-row md:flex-row justify-evenly items-center w-full md:w-1/2">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl md:text-2xl lg:text-4xl  text-white">
                Call Now
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-4xl  text-yellow-500">
                990 124 675
              </h2>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h2 className="text-xl md:text-2xl lg:text-4xl  text-white">
                Email Us!
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-4xl  text-green-500">
                support@hope.com
              </h2>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cta;

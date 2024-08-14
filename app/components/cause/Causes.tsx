import { Suspense, lazy } from "react";
import Container from "../shared/Container";
import Heading from "../shared/Heading";
import { Spinner } from "../shared/Spinner";

const LazyClientCause = lazy(() => import("./CauseClient"));

const Causes = () => {
  return (
    <div className="py-10">
      <Container>
        {/* Causes Header */}
        <div className="flex flex-col justify-center items-center gap-y-5">
          <Heading label="Causes" gradient />
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center capitalize">
            Latest caused of hope
          </h2>
          <p className="text-lg lg:text-xl font-inter text-gray-600">
            Supporting Communities, Alleviating Poverty, and Promoting Health
          </p>
        </div>

        <Suspense fallback={<Spinner className="mx-auto h-8 w-8 mt-10" />}>
          <LazyClientCause />
        </Suspense>
      </Container>
    </div>
  );
};

export default Causes;

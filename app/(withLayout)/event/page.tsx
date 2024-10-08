import Events from "../../components/home/Events";
import Breadcrumb from "../../components/shared/Breadcrumb";

const Event = () => {
  return (
    <div>
      <Breadcrumb label="Our Events" />
      <Events showMoreBtn={false} />
    </div>
  );
};

export default Event;

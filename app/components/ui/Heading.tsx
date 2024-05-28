interface HeadingProps {
  label: string;
}

const Heading = ({ label }: HeadingProps) => {
  return (
    <div className="text-xl  bg-[url('/images/title-round-bg.png')] w-[175px] h-[70px] bg-center bg-no-repeat flex justify-center items-center uppercase ">
      <span className="-mt-2.5">{label}</span>
    </div>
  );
};

export default Heading;

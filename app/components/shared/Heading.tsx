interface HeadingProps {
  label: string;
  gradient?: boolean;
}

const Heading = ({ label, gradient }: HeadingProps) => {
  return (
    <div
      className={`text-xl w-[175px] h-[70px] bg-center bg-no-repeat flex justify-center items-center uppercase ${
        gradient
          ? 'bg-[url("/images/title-round-bg-gradient.png")]'
          : 'bg-[url("/images/title-round-bg.png")]'
      }`}
    >
      <span className="-mt-2.5">{label}</span>
    </div>
  );
};

export default Heading;

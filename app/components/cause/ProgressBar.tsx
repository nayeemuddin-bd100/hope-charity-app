"use client";
import { Line } from "rc-progress";
type ProgressBarProps = {
  percentage: number;
};

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="flex flex-col xs:flex-row justify-center gap-y-3 gap-x-5 w-full items-center mt-4 px-16">
      <Line
        percent={percentage}
        strokeWidth={4}
        strokeColor="#22c55e"
        trailWidth={3}
        trailColor="#d6d6d6"
        strokeLinecap="round"
        className="w-full"
      />
      <span className="text-xl font-semibold text-green-500">
        {percentage.toFixed(0)}%
      </span>
    </div>
  );
};

export default ProgressBar;

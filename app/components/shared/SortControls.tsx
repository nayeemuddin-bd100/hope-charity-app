import React from "react";
import SortingSelect from "./SortingSelect";

interface SortControlsProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
  sortOptions: { value: string; label: string }[];
}

const SortControls: React.FC<SortControlsProps> = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  sortOptions,
}) => {
  return (
    <div className="flex gap-2">
      <SortingSelect
        value={sortBy}
        onValueChange={setSortBy}
        options={sortOptions}
        placeholder="Sort by"
      />
      <SortingSelect
        value={sortOrder}
        onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
        options={[
          { value: "asc", label: "Ascending" },
          { value: "desc", label: "Descending" },
        ]}
        placeholder="Sort order"
      />
    </div>
  );
};

export default SortControls;

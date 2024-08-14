import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortingSelectProps {
  value: string;
  onValueChange: (value: "asc" | "desc") => void;
  options: { value: string; label: string }[];
  placeholder: string;
}

const SortingSelect = ({
  value,
  onValueChange,
  options,
  placeholder,
}: SortingSelectProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px] outline-none bg-white z-40 focus:outline-none focus-within:outline-none focus-visible:outline-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="outline-none bg-white z-50">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SortingSelect;

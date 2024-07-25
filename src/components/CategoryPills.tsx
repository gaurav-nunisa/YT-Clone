import { Button } from "./Button";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type CategoryPillProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

const TRANSLATE_AMOUNT = 200

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [isRightVisible, setIsRightVisible] = useState(false);
  const [isLeftVisible, setLeftVisible] = useState(false);

  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            variant={selectedCategory === category ? "dark" : "default"}
            className="py-1 px-3 rounded-lg whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>
      {isRightVisible && (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {/* handle right navigation */}}
          >
            <MdChevronRight />
          </Button>
        </div>
      )}
      {isLeftVisible && (
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {/* handle left navigation */}}
          >
            <MdChevronLeft />
          </Button>
        </div>
      )}
    </div>
  );
}

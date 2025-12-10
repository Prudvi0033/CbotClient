import React from "react";
import { useCategoryStore } from "../store/useCategoryStore";

const Categories = ({ categories}) => {
  const selectCategory = useCategoryStore((state) => state.selectCategory);

  return (
    <div className="bg-neutral-200 p-4 rounded-xl shadow-md w-full max-w-md">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        Choose a category
      </h2>

      <div className="flex flex-col gap-2">
        {categories.map((cat, idx) => {
          return (
            <button
              key={idx}
              onClick={() => selectCategory(cat)}
              className="px-3 py-2 text-sm font-medium rounded-lg
                         bg-neutral-200 cursor-pointer hover:bg-neutral-100/70
                         transition text-left shadow-[inset_8px_8px_12px_rgba(255,255,255,0.5),4px_2px_6px_rgba(0,0,0,0.1)]"
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

// Deals.tsx
import { Product } from "@/types";
import React from "react";

interface DealsProps {
  products: Product[];
}

const Deals: React.FC<DealsProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-2">
      {products.map((prod, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 p-3 rounded-xl bg-neutral-200 border border-neutral-200 shadow-sm"
        >
          <img
            src={prod.imageUrl}
            alt={prod.name}
            className="w-30 h-20 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold text-sm text-neutral-800">{prod.name}</h3>
            <p className="text-xs text-neutral-500">{prod.category}</p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs line-through text-neutral-500">₹{prod.price}</p>
              <p className="text-sm font-bold text-green-600">₹{prod.dealPrice}</p>
            </div>
            <p className="text-[10px] text-neutral-400 mt-1">
              Added on: {new Date(prod.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deals;

import { OrderProductData } from "@/types";
import React from "react";

interface OrdersProps {
  orders: OrderProductData[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {orders.map((order, idx) => (
        <div
          key={idx}
          className="flex items-center gap-4 p-3 rounded-xl bg-neutral-200 border border-neutral-200 shadow-sm"
        >
          <img
            src={order.imageUrl}
            alt={order.name}
            className="w-30 h-20 object-cover rounded-lg"
          />

          <div className="flex flex-col">
            <h3 className="font-semibold text-sm text-neutral-800">
              {order.name}
            </h3>
            <p className="text-xs text-neutral-500">{order.category}</p>

            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-neutral-500">₹{order.price}</p>
            </div>

            <div className="my-1">
              <p className="text-[12px]">Status: <span className="text-sm font-bold text-green-600">{order.staus}</span></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;

import { PaymentItemData } from "@/types";
import React from "react";
import { FileText } from "lucide-react";

interface PaymentsProps {
  payments: PaymentItemData[];
}

const Payments: React.FC<PaymentsProps> = ({ payments }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {payments.map((payment) => (
        <div
          key={payment._id}
          className="flex items-start gap-3 p-4 w-full max-w-sm rounded-xl 
                     bg-neutral-200 border border-neutral-200 shadow-sm 
                     hover:shadow-md transition-all duration-200"
        >
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center 
                          bg-neutral-300 border border-neutral-200 rounded-lg shrink-0">
            <FileText className="text-neutral-800 w-5 h-5" />
          </div>

          {/* Content */}
          <div className="flex flex-col w-full">
            {/* Order ID */}
            <p className="text-sm font-semibold text-neutral-800">
              #{payment.orderId}
            </p>

            {/* Status */}
            <p className="text-xs text-neutral-500 mt-0.5">
              Status:{" "}
              <span
                className={`font-semibold ${
                  payment.status === "PAID"
                    ? "text-green-600"
                    : payment.status === "PENDING"
                    ? "text-yellow-600"
                    : "text-neutral-600"
                }`}
              >
                {payment.status}
              </span>
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-neutral-200 my-2"></div>

            {/* Money section */}
            <div className="flex justify-between items-center text-xs">
              <div>
                <p className="text-neutral-500">Paid</p>
                <p className="font-semibold text-neutral-800">
                  ₹{payment.amountPaid}
                </p>
              </div>

              <div>
                <p className="text-neutral-500">Pending</p>
                <p className="font-semibold text-red-600">
                  ₹{payment.pendingAmount}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Payments;

import React from "react";
import { Headset } from "lucide-react";

interface SupportMessageProps {
  message: string;
}

const Support: React.FC<SupportMessageProps> = ({ message }) => {
  return (
    <div className="w-full h-fit max-w-md bg-neutral-200 border border-neutral-200 rounded-xl p-4 shadow-sm flex items-start gap-3">
      
      {/* Icon */}
      <div className="rounded-lg bg-neutral-300 border border-neutral-100 flex items-center justify-center mt-0.5 p-2">
        <Headset size={24} className="text-blue-800" />
      </div>

      {/* Message */}
      <p className="text-sm text-neutral-700 leading-relaxed">
        {message}
      </p>
    </div>
  );
};

export default Support;

import { ContentItem } from "@/types";
import React from "react";
import Deals from "./DealsSection";
import Orders from "./OrdersSection";
import Payments from "./PaymentsSection";

import { motion } from "motion/react";
import { Loader } from "./Loader";
import Support from "./Support";

interface ContentProps {
  data: ContentItem[];
  userName?: string;
  loading?: boolean;
}

const Content: React.FC<ContentProps> = ({ data, userName, loading }) => {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {loading && (
        <motion.div
          className="text-neutral-500 text-sm flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Loader />
        </motion.div>
      )}

      {/* Show greeting when username is loaded */}
      {userName && data.length === 0 && (
        <motion.div
          className="bg-neutral-200 rounded-md text-black w-fit p-2 max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          Hey {userName}! Ask me to check your deals, orders, payments, or get
          help anytime!
        </motion.div>
      )}

      {data.map((item, index) => (
        <div key={index} className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-700 capitalize">
            {item.section}
          </h2>

          {item.section === "deals" && <Deals products={item.data.prodcuts} />}
          {item.section === "orders" && <Orders orders={item.data.orders} />}
          {item.section === "payments" && (
            <Payments payments={item.data.data} />
          )}
          {item.section === "support" && <Support message={item.data.msg} />}
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default Content;

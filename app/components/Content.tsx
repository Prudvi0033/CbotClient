import React from "react";
import Deals from "./DealsSection";
import Orders from "./OrdersSection";
import Payments from "./PaymentsSection";

import { motion } from "motion/react";
import { Loader } from "./Loader";
import Support from "./Support";
import Products from "./Products";
import Categories from "./Categories";

const Content = ({ data, userName, loading }) => {
  const bottomRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-6">
      {loading && (
        <motion.div
          className="text-neutral-500 text-sm flex justify-start"
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

      {data.map((item, index) => {
        console.log("ITEM FROM CONTENT:", item);

        return (
          <div key={index} className="space-y-3">
            {/* USER MESSAGE BUBBLE */}
            {item.section === "userMessage" ? (
              <div className="flex justify-end gap-2">
                <div className="flex justify-end mb-4">
                  <div className="bg-linear-to-br from-orange-500 to-orange-300 shadow-[inset_3px_2px_12px_rgba(255,255,255,0.6),inset_-2px_-2px_2px_rgba(255,255,255,0.3),2px_2px_4px_rgba(0,0,0,0.15)] text-white p-3 rounded-2xl max-w-xs rounded-br-none">
                    <p className="text-sm leading-relaxed wrap-break-word">
                      {item.data.text}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold text-neutral-700 capitalize">
                  {item.section}
                </h2>

                {item.section === "deals" && (
                  <Deals products={item.data.data} />
                )}
                {item.section === "orders" && (
                  <Orders orders={item.data.data} />
                )}
                {item.section === "payments" && (
                  <Payments payments={item.data.data} />
                )}
                {item.section === "categories" && (
                  <Categories
                    categories={item.data.data}
                  />
                )}
                {item.section === "products" && (
                  <Products products={item.data.data} />
                )}
                {item.section === "support" && (
                  <Support message={item.data.data} />
                )}
              </>
            )}
          </div>
        );
      })}

      <div ref={bottomRef} />
    </div>
  );
};

export default Content;

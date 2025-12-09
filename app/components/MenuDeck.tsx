'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MenuProps {
    onClose: () => void
}

const MenuDeck = ({onClose} : MenuProps) => {
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-72 min-w-48 bg-white rounded-xl shadow-lg p-4 text-neutral-800 relative"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 cursor-pointer p-1 rounded hover:bg-neutral-100 transition"
      >
        <X size={20} />
      </button>

      {/* Heading */}
      <h2 className="text-base font-semibold mb-4">Menu</h2>

      {/* Deals Section - always visible */}
      <div className="mb-2">
        <div className="w-full p-2 rounded-lg hover:bg-neutral-100 transition text-sm font-medium text-neutral-800">
          Deals
        </div>
      </div>

      {/* Orders Section */}
      <div className="mb-2">
        <button
          onClick={() => setOrdersOpen(!ordersOpen)}
          className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-neutral-100 transition text-sm font-medium"
        >
          Orders
          {ordersOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        <AnimatePresence>
          {ordersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden"
            >
              <button className="text-xs p-1 rounded hover:bg-neutral-100 transition text-neutral-700 text-left">
                Place Order
              </button>
              <button className="text-xs p-1 rounded hover:bg-neutral-100 transition text-neutral-700 text-left">
                View Orders
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Payment Section */}
      <div className="mb-2">
        <div className="text-sm font-medium p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition">
          Payment
        </div>
      </div>

      {/* Other Section */}
      <div className="mb-2">
        <button
          onClick={() => setOtherOpen(!otherOpen)}
          className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-neutral-100 transition text-sm font-medium"
        >
          Other
          {otherOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        <AnimatePresence>
          {otherOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden"
            >
              <button className="text-xs p-1 rounded hover:bg-neutral-100 transition text-neutral-700 text-left">
                Customer Support
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default MenuDeck;
